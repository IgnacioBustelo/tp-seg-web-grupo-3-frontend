import React from 'react';
import { useSelector } from 'react-redux';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
} from '@mui/material';

export const Calificaciones = () => {
    const userInfo = useSelector((state) => state.crtc).active;
    const materias = userInfo.materiasCursadas;

    // Calcular el promedio
    const calificacionesArray = Object.values(materias);
    const promedio = calificacionesArray.reduce((acc, curr) => acc + curr, 0) / calificacionesArray.length;

    return (
        <>
            <Typography variant="h4" style={{ textAlign: 'center', marginBottom: '20px', marginTop: '20px' }}>
                Rendimiento Académico
            </Typography>
            <TableContainer component={Paper} style={{ maxWidth: 600, margin: '0 auto' }}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#1976d2', color: '#fff' }}>
                            <TableCell>Materia</TableCell>
                            <TableCell>Calificación</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.entries(materias).map(([materia, calificacion]) => (
                            <TableRow key={materia}>
                                <TableCell>{materia}</TableCell>
                                <TableCell>{calificacion}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography variant="h6" style={{ marginTop: '20px', textAlign: 'center' }}>
                Promedio de notas: {promedio.toFixed(2)}
            </Typography>
        </>
    );
};