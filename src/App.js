import "./App.css";
import { AppTheme } from "./theme/AppTheme";
import { AppRouter } from "./router/AppRouter";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMaterias, setRol, setUsername } from "./store/crtc/crtcSlice";
import { api } from "./api/api";

export const App = () => {
    const dispatch = useDispatch();
    const authStatus = useSelector((state) => state.auth.status);

    const fetchData = async () => {
        if (authStatus === "authenticated") {
            try {
                const responseUser = await api.get("/current-user");
                const userId = responseUser.data.id;

                console.log("ResponseUser:", responseUser);
                dispatch(setUsername(responseUser.data.name));
                dispatch(setRol(responseUser.data.role));

                // Send a request of GET to /students/userId/grades to get all grades from this student
                const responseGrades = await api.get(`/students/${userId}/grades`);

                let materiasCursadas = {};

                responseGrades.data.forEach(item => {
                    const subjectName = item.subject.name;
                    materiasCursadas[subjectName] = item.value;
                });

                dispatch(setMaterias(materiasCursadas));

                console.log("responseGrades:", responseGrades);
            } catch (error) {
                console.error("Error fetching data:", error);
                // Optionally, dispatch an error action if you have one
            }
        }
    };

    useEffect(() => {
        void fetchData();
    }, []);

    return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6Ld2EGsqAAAAAGgaObHGmhxh2zo7u4W0oEYI3W1V"
      scriptProps={{
        async: false, // optional, default to false,
        defer: false, // optional, default to false
        appendTo: "head", // optional, default to "head", can be "head" or "body",
        nonce: undefined, // optional, default undefined
      }}
    >
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </GoogleReCaptchaProvider>
  );
};
