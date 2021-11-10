import { createTheme } from "@mui/material";

export const mainTheme = createTheme({

    //ovverride for default <CssBaseline /> styles
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    background: 'linear-gradient(0deg, #F2D7D0 0%, #FFFFFF 50%, #F2D7D0 100%)'
                }
            }
        }
    },

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
    },

    

});


