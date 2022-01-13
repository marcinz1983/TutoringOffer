import {Grid, Typography} from "@mui/material";
import {HomepageStyles as styles} from "./homepage-styles";
import {HOMEPAGE, HOMEPAGE_TILES_LANGUAGES} from "../../utility/constants";
import OfferTile from "./OfferTile";

export const HomepageOffersTiles = () => {

  return (
    <>
      <Grid container sx={styles.mainContainer}>
        <Grid item xs={11} lg={8}>
        <Typography variant="h3" sx={styles.offerTilesTitle}>
          {HOMEPAGE.OFFERSTILES_TITLE}
        </Typography>
      </Grid>
      <Grid container columns={{sm: 12, md: 11}} spacing={2} sx={styles.offerTilesContainer}>

        {HOMEPAGE_TILES_LANGUAGES.map((item, index) => (
          <OfferTile key={index} item={item}/>
        ))}

        </Grid>
      </Grid>
      </>
  );
};
