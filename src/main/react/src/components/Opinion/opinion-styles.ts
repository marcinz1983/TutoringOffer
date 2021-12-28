import {mainTheme} from "../../themes/mainTheme";
import {alpha} from "@mui/system";

export const opinionStyles = {
    opinionPaper: {
        margin: '30px 0',
        padding: '20px',
        boxShadow: 'none',
        border: `2px solid ${alpha(`${mainTheme.palette.primary.main}`, 0.4)}`,
        borderRadius: '30px'
    },

    opinionGridContainer: {
        justifyContent: 'center'
    },

    opinionDescGridItem: {
        justifyContent: 'center',
        paddingTop: '20px',
    },

    opinionGridItem: {
        display: 'flex',
        alignItems: 'space-between',
        justifyContent: 'space-between',
        h5: {
            margin: '0 10px'
        }
    },

    avatarGridItem: {
      display: 'flex',
      alignItems: 'center'
    },

    ratingGridItem: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: {
            xs: 'start',
            sm: 'end'
        },
        paddingTop: '10px'
    }
} as const