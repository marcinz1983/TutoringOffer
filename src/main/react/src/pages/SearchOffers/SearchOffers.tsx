import {searchOffersStyles as styles} from './search-offers-styles'
import {SearchResults} from "./SearchResults";
import {SearchTop} from "./SearchTop";
import {Grid} from "@mui/material";
import {SEARCH_OFFER} from "../../utility/constants";
import React, {useEffect, useState} from "react";
import {getAllPublicOffers} from "../../services/offer.service";
import {IPublicOffer} from "../../typescript/offer.model";
import {useHistory} from "react-router";
import {useLocation} from "react-router-dom";
import { Location } from 'history';
import {ROUTER_CONSTANTS} from "../../utility/router-constants";

type LocationState = {
    from: Location
    state: string
}

export const SearchOffers = () => {

    const location = useLocation<LocationState>();

    const history = useHistory()
    const [foundOffers, setFoundOffers] = useState<Array<IPublicOffer>>()

    const minRateValue: number = SEARCH_OFFER.MIN_RATESLIDER_VALUE;
    const maxRateValue: number = SEARCH_OFFER.MAX_RATESLIDER_VALUE;

    const [rateValue, setRateValue] = useState<number[]>([minRateValue, maxRateValue]);
    const [searchInputValue, setSearchInputValue] = useState( location.state ? location.state.toString() : "" )
    const [radioValue, setRadioValue] = React.useState("HighestRate");

    useEffect(()=> {
        let locationString = "";
        if(location.state) {
            locationString = location.state.toString()
        }

        getAllPublicOffers(rateValue[1], rateValue[0], locationString).then(response => setFoundOffers(response))
    },[])

    const searchButtonClickAction = () => {
        history.push({
            pathname: ROUTER_CONSTANTS.SEARCH,
            search: searchInputValue,
            state: searchInputValue
        })
        getAllPublicOffers(rateValue[1], rateValue[0], searchInputValue).then(response => setFoundOffers(response))
    }

  return (
    <>
      <Grid
        item
        xs={12}
        sx={styles.primaryGridItem}>
            <SearchTop
                rateValue={rateValue}
                setRateValue={setRateValue}
                searchInputValue={searchInputValue}
                setSearchInputValue={setSearchInputValue}
                radioValue={radioValue}
                setRadioValue={setRadioValue}
                searchButtonClickAction={searchButtonClickAction}
                />
      </Grid>
      <Grid
        item
        xs={12}
        sx={styles.primaryGridItem}>
            <SearchResults foundOffers={foundOffers} />
      </Grid>
    </>
  );
};
