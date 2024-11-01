import {
  Box,
  Button,
  Typography,
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Divider,
} from "@mui/material";
import { useState } from "react";

export const ControlPanel = () => {
  const [userNameToFire, setUserNameToFire] = useState("");
  const [userName, setUserName] = useState("");
  const [newRole, setNewRole] = useState("");
  const [coffeeType, setCoffeeType] = useState("");

  const handleFireUser = () => {
    console.log(`Despedido: ${userNameToFire}`);
    setUserNameToFire(""); // Limpiar el campo después de despedir
  };

  const handleRoleChange = () => {
    console.log(`Se cambió el rol de ${userName} a ${newRole}`);
    setUserName("");
    setNewRole("");
  };

  const handleCoffeeOrder = () => {
    console.log(`Pedido de café: ${coffeeType}`);
    setCoffeeType(""); // Limpiar el selector después de pedir
  };

  return (
    <Grid container spacing={3} justifyContent="space-around" p={3}>
      {/* Cuadro para Cambiar Rol */}
      <Grid item xs={12} sm={6} md={3}>
        <Box
          sx={{
            backgroundColor: "#f5f5f5",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: 2,
            height: "350px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" style={{ marginBottom: "20px" }}>
            Cambiar rol de usuario
          </Typography>
          <TextField
            label="Nombre de usuario"
            variant="outlined"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={{ marginBottom: "20px" }}
          />
          <FormControl variant="outlined" style={{ marginBottom: "20px" }}>
            <InputLabel>Nuevo rol</InputLabel>
            <Select
              value={newRole}
              onChange={(e) => setNewRole(e.target.value)}
              label="Nuevo rol"
            >
              <MenuItem value="Estudiante">Estudiante</MenuItem>
              <MenuItem value="Profesor">Profesor</MenuItem>
              <MenuItem value="Admin">Admin</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            onClick={handleRoleChange}
            style={{ marginTop: "10px" }}
          >
            Cambiar rol
          </Button>
        </Box>
      </Grid>

      {/* Cuadro para Despedir gente */}
      <Grid item xs={12} sm={6} md={3}>
        <Box
          sx={{
            backgroundColor: "#f5f5f5",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: 2,
            height: "350px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">Despedir gente</Typography>
          <TextField
            label="Nombre de usuario"
            variant="outlined"
            value={userNameToFire}
            onChange={(e) => setUserNameToFire(e.target.value)}
            style={{ marginTop: "10px", marginBottom: "10px" }}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={handleFireUser}
          >
            Despedir
          </Button>
        </Box>
      </Grid>

      {/* Cuadro para Pedir café */}
      <Grid item xs={12} sm={6} md={3}>
        <Box
          sx={{
            backgroundColor: "#f5f5f5",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: 2,
            height: "350px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">Pedir café</Typography>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexGrow={1}
          >
            <FormControl fullWidth>
              <InputLabel id="coffee-select-label">Tipo de café</InputLabel>
              <Select
                labelId="coffee-select-label"
                variant="outlined"
                value={coffeeType}
                onChange={(e) => setCoffeeType(e.target.value)}
              >
                <MenuItem value="cortado">Cortado</MenuItem>
                <MenuItem value="expreso">Expreso</MenuItem>
                <MenuItem value="con leche">Con Leche</MenuItem>
                <MenuItem value="americano">Americano</MenuItem>
                <MenuItem value="latte">Latte</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCoffeeOrder}
          >
            Pedir
          </Button>
        </Box>
      </Grid>

      {/* Cuadro para Romper ascensor de Medrano y Activar alarma de incendios */}
      <Grid item xs={12} sm={6} md={3}>
        <Box
          sx={{
            backgroundColor: "#f5f5f5",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: 2,
            height: "350px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">Romper ascensor de Medrano</Typography>
          <Button
            variant="contained"
            color="error"
            style={{ marginBottom: "10px" }}
          >
            Romper
          </Button>

          <Divider />

          <Typography variant="h6">Activar alarma de incendios</Typography>
          <Button variant="contained" color="warning">
            Activar
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
