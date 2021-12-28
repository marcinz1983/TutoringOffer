import {alpha} from "@mui/system";
import {mainTheme} from "../../themes/mainTheme";

export const offerDetailsStyles = {
    offerDetailsMobilePaper: {
        padding: '20px',
        display: {
            sm: 'block',
            md: 'none'
        }
    },

    offerDetailsDesktopPaper: {
        display: {
            xs: 'none',
            sm: 'none',
            md: 'block'
        },
        padding: {
            sm: '20px',
            md: '20px 20px 20px 0',
            xl: '40px 40px 40px 0'
        },
        marginTop: '70px',
        borderRadius: '30px',
        boxShadow: 'none',
        border: `2px solid ${alpha(`${mainTheme.palette.primary.main}`, 0.4)}`,
    },


    trainerAvatarGridItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '40px',
    },

    trainerAvatar: {
        width: {
            xs: '70vw',
            sm: '60vw',
            md: '20vw',
            lg: '15vw',
            xl: '12vw'
        },
        height: {
            xs: '70vw',
            sm: '60vw',
            md: '20vw',
            lg: '15vw',
            xl: '12vw'
        },
        borderRadius: '30px',
        boxShadow: `0px 2px 15px ${alpha('#222222', 0.2)}`,
        border: `1px solid ${alpha('#222222', 0.3)}`,
    },

    favAndShareIconsGridItem: {
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'right',
        '& > :last-child': {
            paddingRight: '0'
        }
    },

    ratingGridItem: {
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center',
        '& > :last-child': {
            paddingLeft: '5px',
            fontSize: '14px',
        }
    },

    phoneGridItem: {
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'end',
        button: {
            padding: "0"
        }
    },

    backgroundDescriptionGridItem: {
        padding: '10px 0',
    },

    priceTypography: {
        fontWeight: '500',
        fontSize: '20px',
    },

    trainerName: {
        fontWeight: '500',
    },

    desktopGridContainerMain: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    desktopDetailsGridItem: {
        display: 'flex'
    },

    desktopAvatarGridItem: {
        display: 'flex',
        justifyContent: 'center'
    },

    desktopNameGridItem: {
        display: 'flex',
    },

    desktopRatingGridItem: {
        display: 'flex',
        alignItems: 'center',
        div: {
            marginLeft: '30px',
            display: 'flex',
            alignItems: 'center'
        },
        '& #rate-count': {
            marginLeft: '10px',
            fontSize: '13px'
        }
    },

    desktopPriceGridItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'right',
        alignItems: 'end'
    },

    desktopPhoneGridItem: {
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'end',
        button: {
            fontSize: '20px'
        }
    },

    detailsPaper: {
        border: `2px solid ${alpha(`${mainTheme.palette.primary.main}`, 0.4)}`,
        borderRadius: {
            sm: '3px',
            md: '30px'
        },
        boxShadow: 'none',
        padding: '20px',
        h6: {
            margin: '10px 0 20px 0'
        }
    },

    paramsDetailsPaper: {
        border: `2px solid ${alpha(`${mainTheme.palette.primary.main}`, 0.4)}`,
        height: '100%',
        borderRadius: {
            sm: '3px',
            md: '30px'
        },
        boxShadow: 'none',
        padding: '20px',
        h6: {
            margin: '10px 0 20px 0'
        }
    },

    hashtagPaper: {
        border: `2px solid ${alpha(`${mainTheme.palette.primary.main}`, 0.4)}`,
        borderRadius: {
            sm: '3px',
            md: '30px'
        },
        boxShadow: 'none',
        padding: '20px',
        marginTop: '30px',
        h6: {
            margin: '10px 0 20px 0'
        }
    },

    otherTrainersGridItem: {
      margin: {
          sm: "20px 0",
      }
    },

    propTypography: {
        margin: '20px 0'
    },

    mobileAccordion: {
        display: {
            xs: 'block',
            md: 'none'
        }
    },

    divider: {
        background: `${mainTheme.palette.primary.main}`,
        border: `1px solid ${mainTheme.palette.primary.main}`
    },

    hideOnMobile: {
        display: {
            xs: 'none',
            md: 'block'
        }
    },

    hideOnDesktop: {
        display: {
            sm: 'block',
            md: 'none'
        }
    },

    detailsHeading: {
        paddingTop: '30px',
        fontWeight: 500
    },

    otherTrainersHeading: {
        marginBottom: "50px",
        paddingTop: '30px',
        fontWeight: 500
    },

    desktopPropGridItem: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '30px'
    },

    //addOpinionDialog
    dialogPaper: {
        width: "600px",
        borderRadius: '30px'
    },

    gridColumnItem: {
        display: 'flex-column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    gridRowItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    gridColumnChildren: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    opinionModalRating: {
        margin: '20px'
    },

    opinionTextField: {
        width: '80%'
    },

    opinionTextFieldCounter: {
        display: 'flex',
        justifyContent: "end",
        marginRight: "60px",
        marginTop: "10px"
    },

    addOpinionButton: {
        borderRadius: "50px",
        width: '300px',
        color: 'white',
        height: '50px',
        margin: "30px",
        boxShadow: `0 10px 10px ${alpha("#cccccc", 0.7)}`,
        '&:hover': {
            backgroundColor: mainTheme.palette.secondary.main,
            boxShadow: `0 10px 10px ${alpha("#cccccc", 0.7)}`,
        }
    },

    //opinionSection

    opinionSectionParentGridItem: {
      marginTop: "50px"
    },

    opinionSectionGridItemSpaceBetween: {
        display: "flex",
        justifyContent: 'space-between'
    },


} as const