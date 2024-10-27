import { HomePage } from "../pages/HomePage.jsx";
import { Navigate, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/campus" element={<HomePage />} />
      <Route path="/*" element={<Navigate to="/campus" />} />
    </Routes>
  );
};
