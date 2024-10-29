import React from 'react';
import {useSelector} from 'react-redux';
import {Box, Typography} from '@mui/material';
import {ControlPanel} from "./ControlPanel";
import {Users} from "./Users";


export const HomePage = () => {

    const userInfo = useSelector((state) => state.crtc).active;


    return (

        <Box style={{padding: '20px'}}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', gap: 2, mt: 2}}>
                <Typography variant="h6">Bienvenido {userInfo.userName}</Typography>
                <Typography variant="body1">Eres {userInfo.rol}</Typography>
            </Box>
            {userInfo.rol === 'Estudiante' &&
                (<Typography variant="body1" sx={{marginTop: '20px'}}>
                        Explora tus materias, horarios y calificaciones desde el menú superior.
                    </Typography>
                )}
            {userInfo.rol === 'admin' &&
                <ControlPanel/>}
            {userInfo.rol === 'Docente' &&
                <Users/>
            }
        </Box>

    );
};