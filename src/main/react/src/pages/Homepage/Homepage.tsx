import { HomepageHeroSearch } from "./HomepageHeroSearch";
import { Grid } from "@mui/material";
import { HomepageStepsSection } from "./HomepageStepsSection";
import { HomepageOffersTiles } from "./HomepageOffersTiles";
import { ClientsSaySection } from "./ClientsSaySection";
import homepageBottomImage from "../../assets/homepage-bottom-image.png";
import { HomepageStyles as styles } from "./homepage-styles";
import opinionsBackground from "../../assets/clients-say-background.png"

export const Homepage = () => {
  return (
    <>
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HomepageHeroSearch />
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HomepageStepsSection />
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HomepageOffersTiles />
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

          backgroundImage: `url(${opinionsBackground})`,
          backgroundSize: 'cover'
        }}
      >
        <ClientsSaySection />
      </Grid>
      <Grid item xs={12} sx={styles.bottomImgGridItem}>
        <img src={homepageBottomImage} alt={homepageBottomImage.toString()} />
      </Grid>
    </>
  );
};
