import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes.jsx";
import { AppRoutes } from "../campus/routes/AppRoutes.jsx";
import { useSelector } from "react-redux";

export const AppRouter = () => {
  const authStatus = useSelector((state) => state.auth.status);

  console.log("authStatus", authStatus);

  return (
    <Routes>
        {authStatus !== "dasd" ? (
          <Route path="/*" element={<AppRoutes />} />
        ) : (
            <Route path="/*" element={<AuthRoutes />} />
        )}
    </Routes>
  );
};
