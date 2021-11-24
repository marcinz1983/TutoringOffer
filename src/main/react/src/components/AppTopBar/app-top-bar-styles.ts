import { appTopBarConf as config } from "../../themes/component-styles.conf"

export const appTopBarStyles = {
  box: {
    flexGrow: 1,
    padding: 0,
    paddingTop: config.boxPaddingTop,
  },
  
  appBar: {
    background: "transparent",
    boxShadow: "none",
    maxWidth: config.appBarMaxWidth

  },

  toolbar: {
    justifyContent: "space-between"
  },
  
  menu: {
      display: 'flex',
    },
  
    menuPaper: {
      minHeight: config.menuPaperHeight,
      width: config.menuPaperWidth,
      background:
        "transparent linear-gradient(200deg, rgba(244, 222, 212, 0.9) 0%, rgba(240, 227, 221, 0.9) 100%) 0% 0% no-repeat padding-box",
      border: "3px solid rgba(255, 255, 255, 1)",
      borderRadius: config.menuPaperBorderRadius,
      backdropFilter: `blur(${config.menuPaperBackdropBlurFilter})`,
    },

    menuIconButton: {
      padding: "0"
    },

    
    menuRoundedIcon: {
      fontSize: config.menuRoundedIconFontSize,
    },
  
    menuItem: {
      fontSize: config.menuItemFontSize,
      fontWeight: "bold",
      paddingTop: config.menuItemPaddingTop,
      paddingBottom: config.menuItemPaddingBottom,
      '&:hover' : {
        backgroundColor: 'transparent',
        color: config.menuItemHoverColor
      }
    },
  
    iconButton: {
      marginLeft: config.iconButtonMarginLeft,
      padding: config.menuItemPadding
    },

    highlightOffOutlinedIcon: {
      fontSize: config.highlightOffOutlinedIconFontSize
    }
  
  };

  
  