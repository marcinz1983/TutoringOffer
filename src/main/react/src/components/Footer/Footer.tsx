import { Button, Grid, Typography } from "@mui/material";
import facebookIcon from "../../assets/facebook-icon.png";
import twitterIcon from "../../assets/twitter-icon.png";
import youtubeIcon from "../../assets/youtube-icon.png";
import phoneIcon from "../../assets/phone-icon.png";
import { footerStyles as styles } from "./footer-styles";
import { FOOTER_LOGO_TEXT, FOOTER_COPYRIGHT_TEXT, FOOTER_WHITEBAR_PRIVACY, FOOTER_WHITEBAR_TERMS_OF_SERVICE } from "../../utility/constants";
import { FooterLinks } from "./FooterLinks";

export const Footer = () => {
  const socialIcons = [facebookIcon, twitterIcon, youtubeIcon, phoneIcon];

  return (
    <Grid container sx={styles.footerContainer}>
      <Grid item sm={12} lg={5}>
        <Typography variant="h4" sx={styles.footerLogoTypography}>
          Logo
        </Typography>
        <Typography variant="body1">{FOOTER_LOGO_TEXT}</Typography>
        <ul style={styles.ul}>
          {socialIcons.map((icon) => (
            <li>
              <Button>
                <img src={icon} alt={icon.toString()} />
              </Button>
            </li>
          ))}
        </ul>
      </Grid>
      <Grid item xs={12} sm={12} lg={6} sx={styles.footerRightContainer}>
        <Grid container>
          <Grid item xs={6} sm={6} lg={4}>
            <FooterLinks />
          </Grid>
          <Grid item xs={6} sm={6} lg={4}>
            <FooterLinks />
          </Grid>
          <Grid item xs={6} sm={6} lg={4}>
            <FooterLinks />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={styles.footerWhiteBar}>
        <Typography variant="body1">{FOOTER_COPYRIGHT_TEXT}</Typography>
        <span>
          <Typography variant="h6">{FOOTER_WHITEBAR_PRIVACY}</Typography>
          <Typography variant="h6">{FOOTER_WHITEBAR_TERMS_OF_SERVICE}</Typography>
        </span>
      </Grid>
    </Grid>
  );
};
