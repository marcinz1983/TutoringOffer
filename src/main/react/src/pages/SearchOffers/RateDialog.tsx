import { searchOffersStyles as styles } from "./search-offers-styles";
import { RateSlider } from "../../components/RateSlider/RateSlider";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { IDialogProps } from "../../typescript/interfaces";
import { globalStyles } from "../../themes/global-styles";
import {SEARCH_OFFER} from "../../utility/constants"
import {
  Button,
  Grid,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";

export const RateDialog = (props: IDialogProps) => {
  const { open, onClose, rateValue, setRateValue, handleRateChange } = props;

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={() => onClose(false)}
      PaperProps={{ style: styles.modalPaper }}
    >
      <AppBar sx={styles.modalAppBar}>
        <Toolbar>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {SEARCH_OFFER.RATE_BUTTON}
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => onClose(false)}
            aria-label="close"
          >
            <HighlightOffIcon fontSize="large" color="primary" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid
        container
        columns={12}
        sx={styles.sliderGridItem}
      >
        <Grid item xs={8} sx={styles.ratePriceInputsGridItem}>
          
          <RateSlider rateValue={rateValue} handleRateChange={handleRateChange} setRateValue={setRateValue} />

          <Button
            fullWidth
            variant="contained"
            onClick={() => onClose(false)}
            sx={globalStyles.primaryButton}
          >
            {SEARCH_OFFER.SAVE_BUTTON}
          </Button>

        </Grid>
      </Grid>
    </Dialog>
  );
};