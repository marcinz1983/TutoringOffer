import { Grid, Typography, Box } from "@mui/material";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { HomepageStyles as styles } from "./homepage-styles";
import headerImage from "../../assets/main-graphic.png";
import headerMobileImage from "../../assets/main-graphic-mobile.png";
import {
  HOMEPAGE_HERO_TITLE,
  HOMEPAGE_HERO_SUBTITLE_1,
  HOMEPAGE_HERO_SUBTITLE_2,
  HOMEPAGE_HERO_SUBTITLE_HIGHLIGHT,
} from "../../utility/constants";

export const HomepageHeroSearch = () => {
  return (
    <Grid container item xs={11} md={11} lg={8} sx={styles.homepageContainer}>
      <Grid item xs={12} md={6} lg={5} sx={styles.homepageHeroSearchGridItem}>
        <Grid item xs={12}>
          <Box sx={styles.heroHeader}>
            <Typography variant="h3">{HOMEPAGE_HERO_TITLE}</Typography>
            <Box sx={styles.heroSubheader}>
              <Typography variant="h4">{HOMEPAGE_HERO_SUBTITLE_1}</Typography>
              <Typography variant="h4">
                <span style={styles.heroSubheaderHighlight}>
                  {HOMEPAGE_HERO_SUBTITLE_HIGHLIGHT}
                </span>{" "}
                {HOMEPAGE_HERO_SUBTITLE_2}
              </Typography>
            </Box>
          </Box>
          <Grid item xs={12} sx={styles.inputContainer}>
            <SearchInput/>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} lg={7} sx={styles.homepageHeroImgGridItem}>
        <img src={headerImage} alt="header-img"/>
      </Grid>
      <Grid item xs={12} sx={styles.homepageHeroMobileImgGridItem}>
        <img src={headerMobileImage} alt="mobileHeader-img" style={styles.mobileImg} />
      </Grid>
    </Grid>
  );
};
