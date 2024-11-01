import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import { Layout } from "../pages/Layout";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/campus" element={<Layout />} />
      <Route path="/*" element={<Navigate to="/campus" />} />
    </Routes>
  );
};
