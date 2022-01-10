import {FooterConf as config} from "../../themes/component-styles.conf"

export const footerStyles = {
    footerContainer: {
        marginTop: config.footerContainerMarginTop,
        display: 'flex',
        justifyContent: 'center',
    },
    ul: {
        marginTop: config.ulMarginTop,
        listStyle: 'none',
        padding: 0,
        display: 'flex',
        marginBottom: config.ulMarginBottom
    },
    footerRightContainer: {
        justifyContent: 'right',
        display: {
            xs: 'none',
            sm: 'flex'
        },
    },

    footerGridItem: {
        display: 'flex',
        flexDirection: {
            xs: 'column',
            sm: 'row'
        },
        justifyContent: 'space-between'
    },

    footerLogoTypography: {
        paddingBottom: config.logoTypographyPaddingBottom,
        fontWeight: 'bold'
    },
    footerRightUl: {
        listStyle: 'none',
        justifyContent: 'right',
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
        backgroundColor: '#FFF7F5',
        height: config.whiteBarHeight,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    footerWhiteBarGridItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        span: {
            display: {
                xs: 'none',
                md: 'flex'
            },
            flexDirection: 'row',
            width: '330px',
            justifyContent: 'space-between',
        }
    },
} as const
