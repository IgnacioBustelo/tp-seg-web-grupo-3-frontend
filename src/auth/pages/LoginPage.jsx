import {Link as RouterLink} from 'react-router-dom'
import {Alert, Button, Grid, Link, TextField, Typography} from "@mui/material";
import {Google} from "@mui/icons-material";
import {AuthLayout} from "../layout/AuthLayout.jsx";
import {useForm} from "../../hooks/useForm.js";
import {useDispatch, useSelector} from "react-redux";
import { useCallback, useMemo } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { api } from "../../api/api";

export const LoginPage = () => {

    const dispatch = useDispatch()
    const {status, errorMessage} = useSelector(state => state.auth)

    const {email, password, onInputChange} = useForm({
        email: '',
        password: ''
    })

    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const onSubmit = (event) => {
        // event.preventDefault();
        // console.log({email, password})
    }

    const onGoogleSignIn = () => {
        console.log('onGoogleSignIn')
    }

    // --- RecaptchaV3 ---

    const { executeRecaptcha } = useGoogleReCaptcha();

    const handleReCaptchaVerify = useCallback(async () => {
        if (!executeRecaptcha) {
            console.log('Execute recaptcha not yet available');
            return;
        }

        const frontToken = await executeRecaptcha('login');

        console.log("RecaptchaV3 token: ", frontToken);

        // Send the token to backend to validate
        const response = await api.post('/recaptcha-verify', { params: frontToken });

        console.log("RecaptchaV3 response: ", response.data);

        if (response?.data?.score >= 0.7) {
            console.log("RecaptchaV3 verification SUCCESS");
            onSubmit();
        } else {
            console.log("RecaptchaV3 verification FAIL");
        }

    }, [executeRecaptcha]);

    return (
        <AuthLayout tittle="Login">
            <Button type="button" variant="contained" fullWidth onClick={handleReCaptchaVerify}>CAPTCHA</Button>

            <form onSubmit={onSubmit}
            >
                <Grid container>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@google.com"
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}/>
                    </Grid>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="contraseña"
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange}/>
                    </Grid>

                    <Grid container display={!!errorMessage ? '' : 'none'} sx={{mt: 1}}>
                        <Grid item xs={12}>
                            <Alert severity='error'> {errorMessage}

                            </Alert>
                        </Grid>

                    </Grid>

                    <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
                        <Grid item xs={12} sm={6}>
                            <Button type="submit" variant="contained" fullWidth>Login</Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button disabled={isAuthenticating}
                                    variant="contained"
                                    fullWidth
                                    onClick={onGoogleSignIn}>
                                <Google/>
                                <Typography sx={{ml: 1}}>Google</Typography>
                            </Button>

                        </Grid>

                        <Grid container direction='row' justifyContent='end'>
                            <Link component={RouterLink} color='inherit' to='/auth/register'>
                                Crear una cuenta
                            </Link>
                        </Grid>
                    </Grid>

                </Grid>
            </form>
        </AuthLayout>
    );
};
