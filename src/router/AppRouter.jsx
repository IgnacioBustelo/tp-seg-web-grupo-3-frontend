import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes.jsx";
import { AppRoutes } from "../campus/routes/AppRoutes.jsx";

export const AppRouter = () => {
  const status = "false";

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<AppRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login"></Navigate>}></Route>
    </Routes>
  );
};
