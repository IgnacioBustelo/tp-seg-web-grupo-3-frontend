import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import { ControlPanel } from "./ControlPanel";
import { Users } from "./Users";
import { startLoadingSignatures } from "../../store/crtc/thunks";

export const HomePage = () => {
  const userInfo = useSelector((state) => state.crtc).active;

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (userInfo.rol === "student") {
  //     dispatch(startLoadingSignatures());
  //   }
  // }, [dispatch]);

  return (
    <Box style={{ padding: "20px" }}>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", gap: 2, mt: 2 }}
      >
        <Typography variant="h6">Bienvenido {userInfo.userName}</Typography>
        <Typography variant="body1">Eres {userInfo.rol}</Typography>
      </Box>
      {userInfo.rol === "student" && (
        <Typography variant="body1" sx={{ marginTop: "20px" }}>
          Explora tus materias, horarios y calificaciones desde el menú
          superior.
        </Typography>
      )}
      {<ControlPanel />}
      {userInfo.rol === "Docente" && <Users />}
    </Box>
  );
};
