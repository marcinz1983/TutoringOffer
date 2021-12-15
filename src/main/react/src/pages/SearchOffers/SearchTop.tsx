import { SearchInput } from "../../components/SearchInput/SearchInput";
import { searchOffersStyles as styles } from "./search-offers-styles";
import { RateSlider } from "../../components/RateSlider/RateSlider";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { SEARCH_OFFER } from "../../utility/constants";
import { SortDialog } from "./SortDialog";
import { RateDialog } from "./RateDialog";
import { Box } from "@mui/system";
import {ISearchTopProps} from "../../typescript/interfaces";
import React from "react";
import {
  Button,
  Grid,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

export const SearchTop = (props: ISearchTopProps) => {

  const { rateValue, setRateValue, searchInputValue, setSearchInputValue, radioValue, setRadioValue, searchButtonClickAction } = props;

  const [openRate, setOpenRate] = React.useState(false);
  const [openSort, setOpenSort] = React.useState(false);

  const handleRateChange = (event: Event, newValue: number | number[]) => {
    setRateValue(newValue as number[])
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue((event.target as HTMLInputElement).value);
  };

  const handleSortModalDisplay = (value: boolean) => {
    setOpenSort(value)
  }

  const handleRateModalDisplay = (value: boolean) => {
    setOpenRate(value)
  }


  return (
    <>
      <Grid container sx={styles.mainContainer}>
        <Grid item xs={11} sx={styles.mainContainerGridItem}>
          <SearchInput
              searchInputValue={searchInputValue}
              setSearchInputValue={setSearchInputValue}
              minRateValue={rateValue[1]}
              maxRateValue={rateValue[0]}
              searchButtonClickAction={searchButtonClickAction}/>
        </Grid>

        {/* mobile */}
        <Grid item xs={10} sx={styles.mobileSearchOptionsGridItem}>
          <Button
            variant="outlined"
            onClick={() => handleRateModalDisplay(true)}
            sx={styles.searchOptionButton}
          >
            {SEARCH_OFFER.RATE_BUTTON}
          </Button>
          <Button
            variant="outlined"
            onClick={() => handleSortModalDisplay(true)}
            sx={styles.searchOptionButton}
          >
            {SEARCH_OFFER.SORT_BUTTON}
          </Button>
        </Grid>

        {/* desktop */}
        <Grid
          item
          xs={10}
          sm={8}
          md={10}
          lg={8}
          xl={4}
          sx={styles.desktopSearchOptionsGridItem}
        >
          <Box sx={styles.filterBox}>
            <Grid container columns={12} spacing={2}>
              <Grid item sm={12} md={6}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{SEARCH_OFFER.RATE_BUTTON}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: "transparent" }}>
                    <RateSlider
                      rateValue={rateValue}
                      handleRateChange={handleRateChange}
                      setRateValue={setRateValue}
                    />
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item sm={12} md={6}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>{SEARCH_OFFER.SORT_BUTTON}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <RadioGroup
                      aria-label="gender"
                      name="controlled-radio-buttons-group"
                      value={radioValue}
                      onChange={handleRadioChange}
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
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>

      <SortDialog
        open={openSort}
        onClose={handleSortModalDisplay}
        radioValue={radioValue}
        onRadioChange={handleRadioChange}
      />

      <RateDialog
        open={openRate}
        onClose={handleRateModalDisplay}
        rateValue={rateValue}
        setRateValue={setRateValue}
        handleRateChange={handleRateChange}
      />
    </>
  );
};
