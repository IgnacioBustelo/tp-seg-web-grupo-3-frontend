import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Typography, Container, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { api } from "../../api/api";
import "./../../App.css";

export const UsersV2 = () => {
  const { rol } = useSelector((state) => state.crtc).active;

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const onSubmit = async (data) => {
    try {
      console.log("Nuevo alumno:", data);
      const response = await api.post("/users", data);
      console.log("Respuesta del servidor:", response.data);

      setModalMessage("Usuario creado");
      setIsError(false); // Mensaje de éxito
      setShowModal(true);
    } catch (error) {
      console.error("Error al crear el nuevo alumno:", error);
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
      setShowModal(true);
    }
  };

  if (rol !== "Docente") {
    return (
        <Container>
          <Box sx={{ mt: 4, textAlign: "center" }}>
            <Typography variant="h4" color="error" gutterBottom>
              🚫 ¡Tú no deberías estar aquí, vete! 🚫
            </Typography>
            <Typography variant="body1">
              Este es un espacio exclusivo para Docentes.
            </Typography>
          </Box>
        </Container>
    );
  }

  return (
      <Container maxWidth="sm">
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography
              variant="h6"
              gutterBottom
              color="error"
              sx={{ fontWeight: "bold", mb: 2 }}
          >
            ⚠️ PELIGRO: PAGINA EN CONSTRUCCIÓN ⚠️
          </Typography>
          <Typography
              variant="body1"
              gutterBottom
              color="textSecondary"
              sx={{ fontStyle: "italic", mb: 4 }}
          >
            Los campos de texto son vulnerables a SQL Injection. Si eres un
            hacker, por favor, presiona ALT+F4.
          </Typography>

          <Typography variant="h4" gutterBottom>
            Alta de Alumnos
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                label="Nombre"
                {...register("firstName", { required: "Nombre es requerido" })}
                fullWidth
                margin="normal"
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
            />
            <TextField
                label="Apellido"
                {...register("lastName", { required: "Apellido es requerido" })}
                fullWidth
                margin="normal"
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
            />
            <TextField
                label="Materia"
                {...register("subject", { required: "Materia es requerida" })}
                fullWidth
                margin="normal"
                error={!!errors.subject}
                helperText={errors.subject?.message}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
            >
              Registrar Alumno
            </Button>
          </form>
        </Box>

        {showModal && (
            <div className="modal-overlay">
              <div className={`modal-content ${isError ? "error" : "success"}`}>
                <p>{modalMessage}</p>
                <Button
                    onClick={() => setShowModal(false)}
                    variant="contained"
                    color={isError ? "error" : "success"}
                    sx={{ mt: 2 }}
                >
                  Cerrar
                </Button>
              </div>
            </div>
        )}
      </Container>
  );
};
