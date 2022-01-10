import { Button, Grid, Typography } from "@mui/material";
import facebookIcon from "../../assets/facebook-icon.png";
import twitterIcon from "../../assets/twitter-icon.png";
import youtubeIcon from "../../assets/youtube-icon.png";
import phoneIcon from "../../assets/phone-icon.png";
import { footerStyles as styles } from "./footer-styles";
import {FOOTER} from "../../utility/constants";
import { FooterLinks } from "./FooterLinks";

export const Footer = () => {
  const socialIcons = [facebookIcon, twitterIcon, youtubeIcon, phoneIcon];

  return (

    <Grid container sx={styles.footerContainer}>
        <Grid item xs={11} lg={8} sx={styles.footerGridItem}>
          <Grid item sm={6} lg={5}>
            <Typography variant="h4" sx={styles.footerLogoTypography}>
              Logo
            </Typography>
            <Typography variant="body1">{FOOTER.LOGO_TEXT}</Typography>
            <ul style={styles.ul}>
              {socialIcons.map((icon) => (
                <li key={icon.toString()}>
                  <Button>
                    <img src={icon} alt={icon.toString()} />
                  </Button>
                </li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={10} sm={7} lg={5} sx={styles.footerRightContainer}>
            <Grid container sx={styles.footerRightContainer}>
              <Grid item xs={10} sm={7} md={6} lg={6} >
                <FooterLinks />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      <Grid container sx={styles.footerWhiteBar}>
        <Grid
          item
          xs={11}
          sm={11}
          md={11}
          lg={8}
          sx={styles.footerWhiteBarGridItem}
        >
          <Typography variant="body1">{FOOTER.COPYRIGHT_TEXT}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
