import { searchOffersStyles as styles} from './search-offers-styles'
import { SearchResults } from "./SearchResults";
import { SearchTop } from "./SearchTop";
import { Grid } from "@mui/material";


export const SearchOffers = () => {
  return (
    <>
      <Grid
        item
        xs={12}
        sx={styles.primaryGridItem}>
            <SearchTop />
      </Grid>
      <Grid
        item
        xs={12}
        sx={styles.primaryGridItem}>
            <SearchResults />
      </Grid>
    </>
  );
};
