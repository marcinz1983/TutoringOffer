import {alpha} from "@mui/system";
import {mainTheme} from "../../themes/mainTheme";

export const contentCarouselStyles = {
    itemPaper: {
        border: `2px solid ${alpha(`${mainTheme.palette.primary.main}`, 0.4)}`,
        borderRadius: {
            sm: '3px',
            md: '30px'
        },
        boxShadow: 'none',
        padding: '20px',
        margin: '20px',
    },

    arrowIcon: {
        display: "block",
        color: mainTheme.palette.secondary.main,
        height: "50px",
        width: '50px',
    },

    sliderBox: {
        width: "25%",
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important'
    },

    sliderGridContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    sliderGridItem: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    },

    sliderDescGridItem: {
        width: '90%',
        marginTop: '20px'
    },

    sliderDescItemPrice: {
        marginTop: '15px'
    },

    sliderIconGridItem: {
        display: 'flex',
        alignItems: 'space-between',
        justifyContent: 'space-between',
        width: '90%'
    },

    sliderDescIcon: {
        margin: '20px'
    },

    //opinionCarousel

    opinionBox: {
        width: '25%'
    },

    opinionPaper: {
        height: '200px',
        margin: '30px',
        borderRadius: '30px'
    },

    opinionMainGridContainer: {
        height: '100%'
    },

    opinionGridAvatarGridItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    gridDescriptionContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },

    gridItemDescriptionTitle: {
        height: '30%',
        display: 'flex',
        alignItems: 'center'
    },

    typographyTitle: {
        margin: '10px 20px 0 0 '
    },

    gridItemDescriptionDetails: {
        height: '70%',
        padding: '10px',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
    },

    avatarSize: {
        xs: '15vw',
        sm: '15vw',
        md: '8vw',
        lg: '6vw'
    }

} as const
