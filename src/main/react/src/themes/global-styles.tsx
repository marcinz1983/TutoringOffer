import { mainTheme} from "../themes/mainTheme"
import { alpha } from "@mui/system"

export const globalStyles = {
    primaryButton: {
        borderRadius: "50px",
    color: 'white',
    height: '50px',
    marginTop: {
        xs: '10px',
        sm: '30px'
    },
    boxShadow: `0 10px 10px ${alpha("#cccccc", 0.7)}`,
    '&:hover': {
        backgroundColor: mainTheme.palette.secondary.main,
        boxShadow: `0 10px 10px ${alpha("#cccccc", 0.7)}`,
    }
    },

    centerGridItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
}