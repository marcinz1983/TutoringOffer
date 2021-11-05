import { createTheme } from "@mui/material";

import { IMainTheme } from "../typescript/interfaces";

export const mainTheme: IMainTheme = createTheme({

    breakpoints:{
        values:{
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1640
        }
    },
    palette: {
        primary: {
            main: "#F28705",
            light: "#F2A007"
        },
        secondary: {
            main: "#04ADBF"
        },
        background: {
            default: "#F2D7D0"
        }
    }
});
