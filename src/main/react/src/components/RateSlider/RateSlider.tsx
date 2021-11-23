//TODO: Add task to get max rate value from server

import { TextField, InputAdornment, Slider } from "@mui/material";
import { rateSliderStyles as styles } from "./rate-slider-styles";
import { SEARCH_OFFER } from "../../utility/constants";
import { Box } from "@mui/system";
import React from "react";

const minRateValue: number = SEARCH_OFFER.MIN_RATESLIDER_VALUE;
const maxRateValue: number = SEARCH_OFFER.MAX_RATESLIDER_VALUE;

interface IRateSlider {
  rateValue: number[];
  handleRateChange: ((event: Event, newValue: number | number[]) => void) | undefined;
  setRateValue: (rateValue: number[]) => void;
}

export const RateSlider = (props: IRateSlider) => {
  const { rateValue, handleRateChange, setRateValue } = props;

  const onMinInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newArr = [...rateValue];
    let newNumber: number = parseInt(e.target.value);
    newArr[0] = (isNaN(newNumber) ? minRateValue : newNumber);
    setRateValue(newArr);
  };

  const onMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newArr = [...rateValue];
    let newNumber: number = parseInt(e.target.value);

    newArr[1] = (isNaN(newNumber) ? minRateValue : newNumber);
    setRateValue(newArr);
  };

  const handleBlur = () : void => {
    if (rateValue[0] < minRateValue || rateValue[0] > maxRateValue) {
      const newArr = [...rateValue];
      newArr[0] = minRateValue;
      setRateValue(newArr);
    } 

    if (rateValue[1] < minRateValue || rateValue[1] > maxRateValue) {
      const newArr = [...rateValue];
      newArr[1] = maxRateValue;
      setRateValue(newArr);
    } 

  };

  return (
    <Box>
      <Box sx={styles.inputBox}>
        <TextField
          sx={styles.inputField}
          type="number"
          value={rateValue[0]}
          onChange={onMinInputChange}
          onBlur={handleBlur}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {SEARCH_OFFER.CURRENCY}
              </InputAdornment>
            ),
          }}
        />
        <TextField
          sx={styles.inputField}
          type="number"
          value={rateValue[1]}
          onChange={onMaxInputChange}
          onBlur={handleBlur}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {SEARCH_OFFER.CURRENCY}
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Slider
        getAriaLabel={() => "Value"}
        value={rateValue}
        onChange={handleRateChange}
        valueLabelDisplay="auto"
        min={minRateValue}
        max={maxRateValue}
        step={1}
      />
    </Box> 
  );
};
