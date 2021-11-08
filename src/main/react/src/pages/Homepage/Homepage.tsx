import { HomepageHeroSearch } from "./HomepageHeroSearch";
import { Grid } from "@mui/material";
import { HomepageStepsSection } from "./HomepageStepsSection";
import { HomepageOffersTiles } from "./HomepageOffersTiles";
import { ClientsSaySection } from "./ClientsSaySection";
import { Footer } from "../../components/Footer/Footer";
import homepageBottomImage from "../../assets/homepage-bottom-image.png";
import { HomepageStyles as styles } from "./homepage-styles";

export const Homepage = () => {
  return (
    <>
      <Grid item xs={12} md={12} sx={{ justifyContent: "center" }}>
        <HomepageHeroSearch />
        <HomepageStepsSection />
        <HomepageOffersTiles />
        <ClientsSaySection />
        <Grid item xs={12} sx={styles.bottomImgGridItem}>
          <img src={homepageBottomImage} alt={homepageBottomImage.toString()} />
        </Grid>

        <Footer />
      </Grid>
    </>
  );
};
