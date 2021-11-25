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
      background:"white",
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

  
  