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
    Modal,
    Backdrop,
    Fade,
} from "@mui/material";
import { useState } from "react";
import { api } from "../../api/api";
import { useSelector } from "react-redux";

export const ControlPanel = () => {
    const [userNameToFire, setUserNameToFire] = useState("");
    const [userName, setUserName] = useState("");
    const [newRole, setNewRole] = useState("");
    const [coffeeType, setCoffeeType] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [isError, setIsError] = useState(false);

  const handleFireUser = () => {
    console.log(`Despedido: ${userNameToFire}`);
      setUserNameToFire("");
      setModalMessage(`Usuario ${userNameToFire} horrendamente despedido.`);
      setIsError(false);
      setShowModal(true);
  };

    const handleRoleChange = async () => {
        console.log(`Se cambió el rol de ${userName} a ${newRole}`);
        setUserName("");
        setNewRole("");
        try {
            const data= { userName, newRole };
            console.log('data', data)
            const response = await api.post("/users", data);
            console.log("Respuesta del servidor:", response.data);

            setModalMessage("Rol cambiado con éxito");
            setIsError(false);
        } catch (error) {
            console.error("Error al cambiar el rol:", error);
            let errorMessage = "Error desconocido";
            if (error.response) {
                errorMessage = error.response.data.message || "Error en el servidor";
            } else if (error.request) {
                errorMessage = "Sin respuesta del servidor";
            } else {
                errorMessage = "Error al configurar la solicitud";
            }

            setModalMessage(errorMessage);
            setIsError(true); // Mensaje de error
        }
        setShowModal(true);
    };

    const handleCoffeeOrder = async () => {
        console.log(`Pedido de café: ${coffeeType}`);
        setCoffeeType(""); // Limpiar el selector después de pedir
        setModalMessage(`Pedido de ${coffeeType} realizado con éxito.`);
        setIsError(false); // Mensaje de éxito
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const userInfo = useSelector((state) => state.crtc).active;

    return userInfo.rol === "admin" && (
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

            {/* Modal de Mensajes */}
            <Modal
                open={showModal}
                onClose={handleCloseModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500 }}
            >
                <Fade in={showModal}>
                    <Box
                        sx={{
                            bgcolor: isError ? "error.main" : "success.main",
                            color: "white",
                            padding: 4,
                            borderRadius: 2,
                            outline: "none",
                            width: 300,
                            margin: "auto",
                            marginTop: "20vh",
                        }}
                    >
                        <Typography variant="h6">{modalMessage}</Typography>
                        <Button
                            onClick={handleCloseModal}
                            color="inherit"
                            style={{ marginTop: "20px" }}
                        >
                            Cerrar
                        </Button>
                    </Box>
                </Fade>
            </Modal>
        </Grid>
    );
};
