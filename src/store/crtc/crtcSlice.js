import {createSlice} from '@reduxjs/toolkit'


export const crtcSlice = createSlice({
    name: 'crtc',
    initialState: {
        active: {
            userName: 'Pepito',
            rol: 'Docente',
            materiasCursadas: { "Física": 8,
            "Algebra": 7,
            "Matematica Discreta": 10,
            "Quimica": 4,
            "Analisis Matematico 1": 7},


        }

    },
    reducers: {

        setInitialState: (state, action) => {
            state.active = action.payload;
        }
    }
})

export const {} = crtcSlice.actions