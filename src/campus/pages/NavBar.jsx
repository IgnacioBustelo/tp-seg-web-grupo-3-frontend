import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const menuItems = [
  { text: "Home", path: "/campus" },
  { text: "Materias en curso", path: "/notYet" },
  { text: "Perfil", path: "/notYet" },
  { text: "Horarios", path: "/notYet" },
  { text: "Calificaciones", path: "/calificaciones" },
];

export const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
          Instituto Nacional de Seguridad, Estudios y Capacitación en Unidades
          de Riesgo y Evaluación (I.N.S.E.C.U.R.E.)
        </Typography>
        <Box sx={{ display: "flex" }}>
          {menuItems.map((item, index) => (
            <Button key={index} color="inherit" component={Link} to={item.path}>
              {item.text}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
