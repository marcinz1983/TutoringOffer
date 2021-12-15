import {OfferItem} from "../../components/OfferItem/OfferItem";
import {IPublicOffer} from "../../typescript/offer.model";
import {globalStyles} from "../../themes/global-styles";
import {Button, Grid, Typography} from "@mui/material";
import {SEARCH_OFFER} from "../../utility/constants";
import {searchOffersStyles as styles} from './search-offers-styles'

interface IPublicOfferArray {
  foundOffers: Array<IPublicOffer> | undefined;
}

export const SearchResults = ( props: IPublicOfferArray) => {

  const { foundOffers } = props;

  return (
    <>
      {foundOffers !== undefined && foundOffers.length > 0 ?
          <Grid
              container
              sx={styles.resultsGridItem}
          >
            <Grid item xs={11} sm={11} lg={8}>
              <Grid container columns={12}>

                <Grid item xs={12}>
                  <Typography variant="h4" sx={styles.headingFindTrainer}>{SEARCH_OFFER.HEADING_FIND_TRAINER}</Typography>
                </Grid>

                {foundOffers? (
                    foundOffers.map((offer: IPublicOffer, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index} sx={globalStyles.centerGridItem}>
                          <OfferItem offer={offer} />
                        </Grid>
                    ))
                ) : null}

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
          :
          <Grid
              container
              sx={styles.resultsGridItem}
          >
            <Grid item sx={styles.noResultsGridItem}>
            <Typography variant={"h3"}>{SEARCH_OFFER.HEADING_NO_RESULTS_BIG}</Typography>
            <Typography variant={"h5"}>{SEARCH_OFFER.HEADING_NO_RESULTS_SMALL}</Typography>
            </Grid>
          </Grid>
      }

    </>
  );
};
