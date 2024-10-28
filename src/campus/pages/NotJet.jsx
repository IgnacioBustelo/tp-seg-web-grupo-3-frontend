// src/pages/NotYet.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../../media/170995_1703258738_724.jpg';
import {Button} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const NotYet = () => {
    const navigate = useNavigate();

    return (
        <div style={{ position: 'relative', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <Button
                variant="contained"
                startIcon={<ArrowBackIcon />}
                onClick={() => navigate('/campus')}
                style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                }}
            >
                Volver
            </Button>

            {/* Contenido de la página */}
            <h1>Not yet desarrollated</h1>
            <img src={image} alt="En construcción" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
    );
};

export default NotYet;