import { Grid, Typography, Box } from "@mui/material";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { HomepageStyles as styles } from "./homepage-styles";
import headerImage from "../../assets/main-graphic.png";
import headerMobileImage from "../../assets/main-graphic-mobile.png";
import {HOMEPAGE} from "../../utility/constants";
import {useHistory} from "react-router";
import {useState} from "react";
import {ROUTER_CONSTANTS} from "../../utility/router-constants";

export const HomepageHeroSearch = () => {

    const history = useHistory();
    const [searchInputValue, setSearchInputValue] = useState("");

    const searchButtonClickAction = () => {
        history.push({
            pathname: ROUTER_CONSTANTS.SEARCH,
            search: searchInputValue,
            state: searchInputValue
        })
    }

  return (
    <Grid container item xs={11} md={11} lg={8} sx={styles.homepageContainer}>
      <Grid item xs={12} md={6} lg={5} sx={styles.homepageHeroSearchGridItem}>
        <Grid item xs={12}>
          <Box sx={styles.heroHeader}>
            <Typography variant="h3">{HOMEPAGE.HERO_TITLE}</Typography>
            <Box sx={styles.heroSubheader}>
              <Typography variant="h4">{HOMEPAGE.HERO_SUBTITLE_1}</Typography>
              <Typography variant="h4">
                <span style={styles.heroSubheaderHighlight}>
                  {HOMEPAGE.HERO_SUBTITLE_HIGHLIGHT}
                </span>{" "}
                {HOMEPAGE.HERO_SUBTITLE_2}
              </Typography>
            </Box>
          </Box>
          <Grid item xs={12} sx={styles.inputContainer}>
            <SearchInput searchInputValue={searchInputValue} setSearchInputValue={setSearchInputValue} searchButtonClickAction={searchButtonClickAction}/>
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
