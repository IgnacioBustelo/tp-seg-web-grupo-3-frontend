import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

export const Users = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('Nuevo alumno:', data);
        // Aquí puedes hacer el envío de datos a tu backend o servicio de almacenamiento
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                    Alta de Alumnos
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        label="Nombre"
                        {...register('firstName', {
                            required: 'Nombre es requerido',
                            pattern: {
                                value: /^[A-Za-z]+$/,
                                message: 'El nombre solo debe contener letras'
                            }
                        })}
                        fullWidth
                        margin="normal"
                        error={!!errors.firstName}
                        helperText={errors.firstName?.message}
                    />
                    <TextField
                        label="Apellido"
                        {...register('lastName', {
                            required: 'Apellido es requerido',
                            pattern: {
                                value: /^[A-Za-z]+$/,
                                message: 'El apellido solo debe contener letras'
                            }
                        })}
                        fullWidth
                        margin="normal"
                        error={!!errors.lastName}
                        helperText={errors.lastName?.message}
                    />
                    <TextField
                        label="Materia"
                        {...register('subject', {
                            required: 'Materia es requerida',
                            pattern: {
                                value: /^[A-Za-z0-9\s]+$/,
                                message: 'La materia solo debe contener letras y números'
                            }
                        })}
                        fullWidth
                        margin="normal"
                        error={!!errors.subject}
                        helperText={errors.subject?.message}
                    />
                    <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                        Registrar Alumno
                    </Button>
                </form>
            </Box>
        </Container>
    );
};