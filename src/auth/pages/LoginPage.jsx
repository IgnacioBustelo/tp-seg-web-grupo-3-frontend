import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
} from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useMemo } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { api } from "../../api/api";
import { useForm } from "react-hook-form";
import { login } from "../../store/auth/authSlice";

export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { status, errorMessage } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (data) => {
    console.log("onSubmit");
    void handleReCaptchaVerify();
  };

  const executeLogin = async () => {
    console.log("executeLogin");

    console.log("formValues: ", getValues());

    const response = await api.post("/login", getValues());
    const authToken = response.data;

    console.log("authToken", authToken);

    dispatch(login(authToken));
    localStorage.setItem("authToken", authToken);
    // Will be automatically redirected to the home page when state changes


  };

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleReCaptchaVerify = useCallback(async () => {
    console.log("handleReCaptchaVerify");

    if (!executeRecaptcha) {
      console.error("Execute recaptcha not yet available");
      return;
    }

    // Get front token from Google
    const frontToken = await executeRecaptcha("login");

    if (!frontToken) {
      console.warn("RecaptchaV3 front token FAIL");
      return;
    }

    console.log("RecaptchaV3 front token SUCCESS");

    // Send the token to backend to validate
    const response = await api.post("/recaptcha-verify" + "?frontToken=" + frontToken);

    console.log("RecaptchaV3 response: ", response.data);

    // If the score is above 0.7, the user is not a bot
    if (response?.data?.score < 0.7) {
      console.warn("RecaptchaV3 backend verification FAIL");
      return;
    }

    console.log("RecaptchaV3 backend verification SUCCESS");
    void executeLogin();
  }, [executeRecaptcha]);

  return (
    <AuthLayout tittle="Login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              {...register("email", { required: "Email es requerido" })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
              name="password"
              {...register("password", { required: "Contraseña es requerida" })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </Grid>

          <Grid container display={!!errorMessage ? "" : "none"} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <Alert severity="error"> {errorMessage}</Alert>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={12}>
              <Button type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid container direction="row" justifyContent="end">
              <Link component={RouterLink} color="inherit" to="/auth/register">
                Crear una cuenta
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
