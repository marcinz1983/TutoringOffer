import { FooterConf as config } from "../../themes/component-styles.conf"

export const footerStyles = {
    footerContainer: {
        marginTop: config.footerContainerMarginTop,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'space-between'
    },
    ul: {
        marginTop: config.ulMarginTop,
        listStyle: 'none',
        padding: 0,
        display: 'flex',
        marginBottom: config.ulMarginBottom
    },
    footerRightContainer: {
        display: 'flex'
    },
    footerLogoTypography: {
        paddingBottom: config.logoTypographyPaddingBottom,
        fontWeight: 'bold'
    },
    footerRightUl: {
        listStyle: 'none',
        padding: config.rightUlPadding,
    },
    footerRightLi: {
        padding: config.rightLiPadding,
    },
    footerRightLiLink: {
        textDecoration: 'none',
        color: 'black'
    },
    footerWhiteBar: {
        backgroundColor: 'white',
        width: config.whiteBarWidth,
        paddingLeft: config.whiteBarPaddingRightLeft,
        paddingRight: config.whiteBarPaddingRightLeft,
        height: config.whiteBarHeight,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        span: {
            width: config.spanWidth,
            justifyContent: 'space-between',
            display: {
                xs: 'none',
                sm: 'none',
                md: 'flex',
                lg: 'flex'
            }
        }
    }
} as const