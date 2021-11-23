import { searchOffersStyles as styles } from "./search-offers-styles";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { IDialogProps } from "../../typescript/interfaces";
import { globalStyles } from "../../themes/global-styles";
import { SEARCH_OFFER } from "../../utility/constants";
import {
  Button,
  Grid,
  Dialog,
  ListItem,
  List,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  FormGroup,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";


export const SortDialog = (props: IDialogProps) => {
  const { open, onClose, radioValue, onRadioChange } = props;

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
            {SEARCH_OFFER.SORT_BUTTON}
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => onClose(false)}
            aria-label="close"
          >
            <HighlightOffIcon fontSize="large" color="primary"/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid
        container
        columns={12}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Grid item xs={10}>
          <List sx={styles.list}>
            <ListItem>
              <FormGroup>
                <RadioGroup
                  aria-label="gender"
                  name="controlled-radio-buttons-group"
                  value={radioValue}
                  onChange={onRadioChange}
                >
                  <FormControlLabel
                    control={<Radio />}
                    label={SEARCH_OFFER.HIGHEST_RATED_LABEL}
                    value="HighestRate"
                                      />
                  <FormControlLabel
                    control={<Radio />}
                    label={SEARCH_OFFER.LOWEST_RATED_LABEL}
                    value="LowestRate"
                  />
                  <FormControlLabel
                    control={<Radio />}
                    label={SEARCH_OFFER.PRICE_GROWING}
                    value="PriceLow"
                  />
                  <FormControlLabel
                    control={<Radio />}
                    label={SEARCH_OFFER.PRICE_DESCENDING}
                    value="PriceHigh"
                  />
                </RadioGroup>
              </FormGroup>
            </ListItem>
            <Button fullWidth variant="contained" onClick={() => onClose(false)} sx={globalStyles.primaryButton}>
              {SEARCH_OFFER.SAVE_BUTTON}
            </Button>
          </List>
        </Grid>
      </Grid>
    </Dialog>
  );
};
