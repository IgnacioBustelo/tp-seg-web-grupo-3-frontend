import {createTheme} from "@mui/material";
import {red} from "@mui/material/colors";

export const purpleTheme = createTheme({

    palette:{
        primary:{
            main: '#6024d2',
            light: '#42a5f5',
            dark: '#1565c0',
            contrastText: '#fff',
        },
        secondary:{
            main:'#31d029'
        },
        error:{
            main: red.A400
        }
    }
})