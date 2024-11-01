import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import { Layout } from "../pages/Layout";
import { HomePage } from "../pages/HomePage";
import NotYet from "../pages/NotJet";
import { Calificaciones } from "../pages/Calificaciones";
import { UsersV2 } from "../pages/UsersV2";

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="campus" element={<HomePage />} />
            <Route path="notYet" element={<NotYet />} />
            <Route path="calificaciones" element={<Calificaciones />} />
            <Route path="users-v2" element={<UsersV2 />} />
            <Route path="/*" element={<Navigate to="/campus" />} />
        </Route>
    </Routes>
  );
};
