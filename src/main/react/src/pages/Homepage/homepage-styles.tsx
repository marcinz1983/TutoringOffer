import { mainTheme } from "../../themes/mainTheme";
import { homepageConf as config } from "../../themes/component-styles.conf";

export const HomepageStyles = {
  //Hero Search
  homepageContainer: {
    display: "flex",
    justifyContent: 'space-between',
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
    paddingTop: config.homepageHeroSearchGridItemPaddingTop,
  },

  homepageHeroImgGridItem: {
    display: {
      xs: "none",
      sm: "none",
      md: "flex",
      lg: "flex",
    },
    alignItems: "center",
    justifyContent: "center",
    img: {
      width: '40vw',
      height: '40vw'
    },
  },

  inputContainer: {
    width: config.inputContainerWidth,
    display: "flex",
    justifyContent: {
      xs: "center",
      sm: "center",
      md: "left",
      lg: "left",
    },
  },

  homepageHeroMobileImgGridItem: {
    display: {
      xs: "flex",
      sm: "flex",
      md: "none",
      lg: "none",
    },
    alignItems: "center",
    justifyContent: "center",
  },

  heroHeader: {
    paddingBottom: config.heroHeaderPaddingBottom,
    whiteSpace: "pre-wrap",
    paddingLeft: {
      xs: '15px',
      sm: '15px',
      md: 'px',
      lg: '0'
    },
    h3: {
      fontSize: {
        xs: '2rem',
        sm: '3rem',
        md: '3rem',
        lg: '3rem',
      }
    },
    h4: {
      fontSize: {
        xs: '1.3rem',
        sm: '2rem',
        md: '2rem',
        lg: '2rem',
      }
    },
  },

  heroSubheader: {
    paddingTop: config.heroSubheaderPaddingTop,
  },

  heroSubheaderHighlight: {
    fontWeight: "bold",
    color: mainTheme.palette.secondary.main,
  },

  mobileImg: {
    paddingTop: config.mobileImgPaddingTop,
    width: config.mobileImgWidth,
  },

  // Steps Section
  stepsSectionContainer: {
    display: "flex",
    flexDirection: {
      xs: "column",
      sm: "column",
      md: "row",
      lg: "row",
    },
    marginTop: config.stepsSectionContainerMarginTop,
    marginBottom: config.stepsSectionContainerMarginBottom,
  },

  stepsGridItem: {
    width: config.stepsGridItemWidth,
    height: config.stepsGridItemHeight,
    display: "flex",
    flexDirection: "column",
    marginTop: {
      xs: config.stepsGridItemMarginTop.xs,
      sm: config.stepsGridItemMarginTop.sm,
      md: config.stepsGridItemMarginTop.md,
      lg: config.stepsGridItemMarginTop.lg,
    },
    alignItems: "center",
    justifyContent: "center",
    img: {
      marginBottom: config.stepsGridItemImgMarginBottom,
    },
    h5: {
      fontWeight: "bold",
      marginTop: config.stepsGridItemH5MarginTop,
      marginBottom: config.stepsGridItemH5MarginBottom,
    },
  },

  hideOnmobileStepsGridItem: {
    width: config.hideOnMobileStepsGridItemWidth,
    height: config.hideOnMobileStepsGridItemHeight,
    display: {
      xs: "none",
      sm: "none",
      md: "none",
      lg: "flex",
    },
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    img: {
      marginBottom: config.hideOnMobileStepsGridItemImgMarginBottom,
    },
  },

  //OffersTiles

  mainContainer: {
    justifyContent: 'center'
  },

  offerTilesTitle: {
    marginBottom: config.offerTilesTitleMarginBottom,
    fontWeight: "bold",
    fontSize: config.offerTilesFontSize,
    lineHeight: config.offerTilesLineHeight,
  },

  offerTilesContainer: {
    marginBottom: config.offerTilesContainerMarginBottom,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  offerGridItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: config.offerGridItemHeight,
    borderRadius: config.offerGridItemBorderRadius,
    fontSize: config.offerGridItemFontSize,
  },

  //ClientSaySection
  clientsSayMainContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  clientsSayContainer: {
    display: "flex",
    justifyContent: "space-between",
  },

  clientSayPaper: {
    minHeight: config.clientsSayPaperMinHeight,
    display: "flex",
    borderRadius: config.clientsSayBorderRadius,
    background:
      "transparent linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.05) 100%) 0% 0% no-repeat padding-box",
    border: "2px solid rgba(255, 255, 255, 0.6)",
    backdropFilter: `blur(40px)`,
  },

  clientsSayPaperContainer: {
    display: "flex",
  },

  clientsSayAvatarGridItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: " center",
  },

  clientsSayAvatar: {
    width: {
      xs: config.clientsSayAvatarWidth.xs,
      sm: config.clientsSayAvatarWidth.sm,
      md: config.clientsSayAvatarWidth.md,
      lg: config.clientsSayAvatarWidth.lg,
    },
    height: {
      xs: config.clientsSayAvatarHeight.xs,
      sm: config.clientsSayAvatarHeight.sm,
      md: config.clientsSayAvatarHeight.md,
      lg: config.clientsSayAvatarHeight.lg,
    },
    border: config.clientsSayAvatarBorder,
  },

  clientsSayName: {
    marginTop: config.clientsSayNameMarginTop,
  },

  clientSayPaginationGridItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: config.clientSayPaginationGridItemPadding,
    paddingBottom: config.clientSayPaginationGridItemPadding,
  },

  //Homepage bottom image
  bottomImgGridItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: config.bottomImgGridItemMarginTop,
    img: {
      width: {
        xs: config.bottomImgWidth.xs,
        sm: config.bottomImgWidth.sm,
        md: config.bottomImgWidth.md,
        lg: config.bottomImgWidth.lg,
      },
    },
  },
} as const;
