import {createSlice} from '@reduxjs/toolkit'


export const crtcSlice = createSlice({
    name: 'crtc',
    initialState: {
        active: {
            userName: 'Pepito',
            rol: 'admin',
            materias: { "fisica": 8},
        }

    },
    reducers: {

        setInitialState: (state, action) => {
            state.active = action.payload;
        }
    }
})

export const {} = crtcSlice.actions