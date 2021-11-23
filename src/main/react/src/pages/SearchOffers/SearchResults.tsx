import { OfferItem } from "../../components/OfferItem/OfferItem";
import { globalStyles } from "../../themes/global-styles";
import { IOfferItem } from "../../typescript/interfaces";
import { Button, Grid, Typography } from "@mui/material";
import { SEARCH_OFFER } from "../../utility/constants";
import { searchOffersStyles as styles } from './search-offers-styles'

interface IOfferItemArray {
  offers: Array<IOfferItem>;
}

export const SearchResults = () => {
  //TODO: Remove mocks when EL-133 will be done, and add backend data
  const mockOfferData: IOfferItemArray = require("../../mockups/SearchOfferMockups.json");

  return (
    <>
      <Grid
        container
        sx={styles.resultsGridItem}
      >
        <Grid item xs={11} sm={11} lg={8}>
          <Grid container columns={12}>

            <Grid item xs={12}>
            <Typography variant="h4" sx={styles.headingFindTrainer}>{SEARCH_OFFER.HEADING_FIND_TRAINER}</Typography>
            </Grid>

            {mockOfferData.offers.slice(0, 18).map((offer: IOfferItem) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={offer.trainer.image}
                sx={globalStyles.centerGridItem}
              >
                <OfferItem offer={offer} />
              </Grid>
            ))}
          </Grid>

          <Grid container columns={12} sx={globalStyles.centerGridItem}>
            <Grid item xs={3}>
              <Button
                variant="contained"
                sx={globalStyles.primaryButton}
                color="primary"
                fullWidth
              >
                {SEARCH_OFFER.LOAD_MORE_BUTTON}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
