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
        "transparent linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.05) 100%) 0% 0% no-repeat padding-box",
      border: "2px solid rgba(255, 255, 255, 0.6)",
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

  
  