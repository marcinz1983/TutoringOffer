import { mainTheme } from '../../themes/mainTheme'

export const searchOffersStyles = {

    //mainSearch

    primaryGridItem: {
        display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
    },

    mainContainer: {
        padding: '100px 0',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    mainContainerGridItem: {
        display:'flex',
        justifyContent: 'center'
    },

    mobileSearchOptionsGridItem: {
        display: {
            xs:'flex',
            sm: 'none'
        },
        justifyContent: 'space-between',
        marginTop: '30px'
    },
    desktopSearchOptionsGridItem: {
        display: {
            xs: 'none',
            sm: 'flex'
        },
        flexDirection: 'column',
        justifyContent: 'center',
        h6: {
            margin: '30px 0 '
        },
    },
    searchOptionButton: {
        height: '30px',
        width: '120px',
        color: 'black',
        textTransform: 'capitalize'
    },

    filterBox: {
        marginTop: '50px'
    },


    //SortDialogModal
    modalAppBar: {
        position: 'relative',
        backgroundColor: '#F2D7D0',
        boxShadow: 'none'
    },

    modalPaper: {
       background: 'linear-gradient(#ffffff 0%, #F2D7D0 70%)'
    },

    list: {
        paddingTop: '40px',
        span: {
            fontSize: '20px',
            padding: '5px 3px 5px 0'
        }
    },

    //RateDialogModal
    ratePriceInputsGridItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: '30px',
        input: {
            width: '30px',
        }
    },

    sliderGridItem: {
        display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "100px",
    },

    saveButton: {
        borderRadius: "30px",
        color: 'white',
        height: '50px',
        marginTop: {
            xs: '10px',
            sm: '30px'
        },
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: mainTheme.palette.secondary.main,
            boxShadow: 'none'
        }
    },

    //searchResults
    resultsGridItem: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: "100px",
    },

    headingFindTrainer: {
        marginBottom: '100px',
        fontWeight: 'bold'
    }
} as const