import {createSlice} from '@reduxjs/toolkit'


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', //not-authenticated, authenticated
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, {payload}) => {

        },

        checkingCredentials: (state) => {
            state.status = 'checking'

        }

    },
})

export const {login, checkingCredentials} = authSlice.actions