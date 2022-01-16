import {Grid, Typography,} from "@mui/material";
import {HomepageStyles as styles} from "./homepage-styles";
import {HOMEPAGE} from "../../utility/constants";
import {opinionMockups} from "../../mockups/opinionMockups";
import OpinionCarousel from "../../components/ContentCarousel/OpinionCarousel";

export const ClientsSaySection = () => {
    return (
        <Grid container sx={styles.clientsSayMainContainer}>
            <Grid item xs={11} sm={11} lg={8}>
                <Typography variant="h3" sx={styles.offerTilesTitle}>
                    {HOMEPAGE.CLIENTSSAY_TITLE}
                </Typography>
                <Grid container spacing={2} sx={styles.clientsSayContainer}>

                    <Grid item xs={12}>
                        <OpinionCarousel data={opinionMockups}/>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    );
};
