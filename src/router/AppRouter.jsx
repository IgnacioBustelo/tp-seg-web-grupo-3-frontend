import {Navigate, Route, Routes} from "react-router-dom";
import {AuthRoutes} from "../auth/routes/AuthRoutes.jsx";
import {AppRoutes} from "../campus/routes/AppRoutes.jsx";
import NotYet from "../campus/pages/NotJet";
import {Calificaciones} from "../campus/pages/Calificaciones";
import {Layout} from "../campus/pages/Layout";
import {HomePage} from "../campus/pages/HomePage";

export const AppRouter = () => {
    const status = 'false';

    return (
        <Routes>
            <Route path="/" element={<Layout/>}>

                {
                    (status === 'authenticated')
                        ? <Route path="/*" element={<AppRoutes/>}/>
                        : <Route path="/auth/*" element={<AuthRoutes/>}/>
                }
                {/* Rutas anidadas dentro del Layout */}
                <Route path="campus" element={<HomePage/>}/>
                <Route path="notYet" element={<NotYet/>}/>
                <Route path="calificaciones" element={<Calificaciones/>}/>
                <Route path="/*" element={<Navigate to="/campus"/>}/> </Route>
        </Routes>
    );
};