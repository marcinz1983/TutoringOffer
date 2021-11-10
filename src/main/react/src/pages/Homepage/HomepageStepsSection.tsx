import { Grid, Typography } from "@mui/material";
import { HomepageStyles as styles } from "./homepage-styles";
import findPersonIcon from "../../assets/find-person-icon.png";
import arrowBlue from "../../assets/arrow-blue.png";
import arrowYellow from "../../assets/arrow-yellow.png";
import callendarIcon from "../../assets/callendar-icon.png";
import contactIcon from "../../assets/contact-icon.png";
import {
  INFOICON_CARD_STRING_1,
  INFOICON_CARD_STRING_2,
  HOMEPAGE_STEPSECTION_TITLE_1,
  HOMEPAGE_STEPSECTION_TITLE_2,
  HOMEPAGE_STEPSECTION_TITLE_3,
} from "../../utility/constants";

export const HomepageStepsSection = () => {
  return (
    <Grid item xs={11} sm={11} md={11} gap={2} lg={8} xl={8} sx={styles.stepsSectionContainer}>
      <Grid item sx={styles.stepsGridItem}>
        <img src={findPersonIcon} alt="find-icon" />
        <Typography variant="h5">{HOMEPAGE_STEPSECTION_TITLE_1}</Typography>
        <Typography variant="body1">{INFOICON_CARD_STRING_1}</Typography>
      </Grid>
      <Grid item sx={styles.hideOnmobileStepsGridItem}>
        <img src={arrowBlue} alt="find-icon" style={{display:'flex', width: '10vw'}} />
      </Grid>
      <Grid item sx={styles.stepsGridItem}>
        <img src={contactIcon} alt="contact-icon" />
        <Typography variant="h5">{HOMEPAGE_STEPSECTION_TITLE_2}</Typography>
        <Typography variant="body1">{INFOICON_CARD_STRING_2}</Typography>
      </Grid>
      <Grid item sx={styles.hideOnmobileStepsGridItem}>
        <img src={arrowYellow} alt="find-icon" style={{display:'flex', width: '10vw'}} />
      </Grid>
      <Grid item sx={styles.stepsGridItem}>
        <img src={callendarIcon} alt="contact-icon" />
        <Typography variant="h5">{HOMEPAGE_STEPSECTION_TITLE_3}</Typography>
        <Typography variant="body1">{INFOICON_CARD_STRING_1}</Typography>
      </Grid>
    </Grid>
  );
};
