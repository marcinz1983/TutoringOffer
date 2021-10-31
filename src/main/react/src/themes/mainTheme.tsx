import { createTheme } from "@mui/material";

import { IMainTheme } from "../typescript/interfaces";

export const mainTheme: IMainTheme = createTheme({
    breakpoints:{
        values:{
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1920
        }
    }
});
