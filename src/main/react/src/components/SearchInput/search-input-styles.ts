import { searchInputConf as config } from "../../themes/component-styles.conf"

export const searchInputStyles = {
    paper: {
        width: config.paperWidth,
        height: config.paperHeight,
        borderRadius: config.paperBorderRadius,
        display: 'flex',
        justifyContent: 'space-between',
        alignItens: 'center',
        boxShadow: 'inset 0px 0px 0px 1px #f28705',
        zIndex: config.paperZIndex,
    },

    listBoxProps: {
        height: config.listBoxPropsHeight
    },

    autocompletePaper: {
        width: config.autocompletePaperWidth,
        height: config.autocompletePaperHeight,
        boxShadow: 'inset 0px 0px 0px 1px #f28705',
        // overflow: 'hidden',
        borderRadius: config.autocompletePaperBorderRadius,
        marginTop: config.autocompletePaperMarginTop,
        padding: config.autocompletePaperPadding,
        marginLeft: config.autocompletePaperMarginLeft,
    },

    iconButton: {
        backgroundColor: config.iconButtonBackgroundColor,
        width: config.iconButtonWidth,
        borderRadius: config.iconButtonBorderRadius,
        zIndex: config.iconButtonzIndex,
        overflow: 'vissible',
        '&:hover': {
            backgroundColor: config.iconButtonHoverBackgroundColor
        }
    },

    searchIcon: {
        fontSize: config.searchIconFontSize,
        color: config.searchIconColor
    },

    autocompleteInput: {
       width: config.autocompleteInputWidth,
       paddingLeft: config.autocompletePaddingleft,
       display: 'flex',
    },

    optionAvatarSize: '30px',

    homepageSearchSpanOption: {
        marginLeft: '20px'
    }
}