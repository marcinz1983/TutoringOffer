import { mainTheme } from "../../../themes/mainTheme"

export const loginFormDialogStyles = {
    paper:{
        width: '430px',
        minHeight: '500px',
        borderRadius: '30px',
        display: 'flex',
        flexDirection: 'column'
    },

    iconButton: {
        display: 'flex',
        justifyContent: 'right',
        maxHeight: '50px',
        svg: {
            margin: '5px',
            color: mainTheme.palette.primary.main
        },
        
    },
    formContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignitems: 'center'
    },

    formItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px',
    },

    formItemOptions: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        a: {
            textDecoration: 'none',
            color: 'black'
        }
    },

    checkbox: {
       padding: "5px 5px 5px 0" 
    },

    loginButton: {
        borderRadius: "20px",
        color: 'white',
        height: '40px',
        marginTop: '40px',
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: mainTheme.palette.secondary.main,
            boxShadow: 'none'
        }
    },

    formItemRegister: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 0 20px 0',
        h6: {
            fontSize: '18px'
        },
        a: {
            textDecoration: 'none',
            fontWeight: 'bold',
            color: mainTheme.palette.secondary.main
        }
    }

} as const