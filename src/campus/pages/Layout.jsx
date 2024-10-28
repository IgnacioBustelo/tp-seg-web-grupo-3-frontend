import {NavBar} from "./NavBar";
import {Box} from "@mui/material";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <Box>
            <NavBar/>
            <Box component={'main'}>
                <Outlet/>
            </Box>
        </Box>

    )

}