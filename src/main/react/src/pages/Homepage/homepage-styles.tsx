import { mainTheme } from "../../themes/mainTheme";
import { homepageConf as config } from "../../themes/component-styles.conf";

export const HomepageStyles = {
  //Hero Search
  homepageContainer: {
    display: "flex",
    justifyContent: {
      md: "center",
      lg: "left",
    },
    height: window.innerHeight - 185,
  },

  homepageHeroSearchGridItem: {
    display: "flex",
    flexDirection: {
      xs: "column",
      sm: "column",
      md: "column",
      lg: "row",
    },
    paddingTop: {
      lg: config.homepageHeroSearchGridItemPaddingTopLG,
    },
  },
  homepageHeroImgGridItem: {
    justifyContent: "center",
    display: {
      xs: "none",
      sm: "none",
      md: "none",
      lg: "block",
    },
  },
  inputContainer: {
    width: config.inputContainerWidth,
    display: "flex",
    justifyContent: {
      xs: "center",
      sm: "center",
      md: "center",
      lg: "left",
    },
  },
  homepageHeroMobileImgGridItem: {
    display: {
      xs: "flex",
      sm: "flex",
      md: "flex",
      lg: "none",
    },
    justifyContent: "center",
  },
  heroHeader: {
    paddingBottom: config.heroHeaderPaddingBottom,
    whiteSpace: "pre-wrap",
  },
  heroSubheader: {
    paddingTop: config.heroSubheaderPaddingTop,
  },
  heroSubheaderHighlight: {
    fontWeight: "bold",
    color: mainTheme.palette.secondary.main,
  },

  mobileImg: {
    paddingTop: '100px',
    width: '70vw',
  },

  // Steps Section
  stepsSectionContainer: {
      display: 'flex',
      flexDirection: {
          xs: 'column',
          sm: 'column',
          md: 'column',
          lg: 'row'
      },
      marginTop: config.stepsSectionContainerMargin,
      marginBottom: config.stepsSectionContainerMargin,
  },

  stepsGridItem: {
      width: config.stepsGridItemWidth,
      height: config.stepsGridItemHeight,
      display: 'flex',
      flexDirection: 'column',
      marginTop: {
        xs: '180px',
        sm: '180px',
        md: '180px',
        lg: '0'
      },
      alignItems: 'center',
      justifyContent: 'center',
      img: {
        marginBottom: config.stepsGridItemImgMarginBottom
      },
      h5: {
        fontWeight: 'bold',
        marginTop: config.stepsGridItemH5MarginTop,
        marginBottom: config.stepsGridItemH5MarginBottom,
      },
  },
  hideOnmobileStepsGridItem: {
      width: config.hideOnMobileStepsGridItemWidth,
      height: config.hideOnMobileStepsGridItemHeight,
      display: {
        xs: 'none',
        sm: 'none',
        md: 'none',
        lg: 'flex'
      },
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-end',
      img: {
        marginBottom: config.hideOnMobileStepsGridItemImgMarginBottom
      },
  },
} as const;
