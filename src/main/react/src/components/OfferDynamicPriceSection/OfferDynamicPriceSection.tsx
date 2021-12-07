import React from 'react';
import {IconButton, Paper, Radio, TextField} from "@mui/material";
import {IOfferDynamicPriceSection} from "../../typescript/interfaces";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const OfferDynamicPriceSection = (props: IOfferDynamicPriceSection) => {

    const {
        prices,
        addDetailedPriceOfferSectionPrice,
        offerDetails,
        setOfferDetails,
        addDetailedPriceOfferSectionCurrency,
        addDetailedPriceOfferSectionTime,
        RemoveDetailedPriceOfferSection,
        DetailedPriceOfferChangeMainPrice
    } = props

    return (
        <div>
            {prices.map((price: any, index: number) => (
                <Paper sx={{margin: "30px"}} key={index}>
                    <Radio
                        checked={price.mainPrice}
                        value={"a"}
                        name={"radio-button"}
                        onClick={() => DetailedPriceOfferChangeMainPrice(offerDetails, setOfferDetails, index)}
                    />
                    <TextField
                        label="Cena"
                        value={price.price}
                        type="number"
                        onChange={e => addDetailedPriceOfferSectionPrice(offerDetails, setOfferDetails, index, e)}
                    />
                    <TextField
                        label="Waluta"
                        value={price.currency}
                        onChange={e => addDetailedPriceOfferSectionCurrency(offerDetails, setOfferDetails, index, e)}/>
                    <TextField
                        label="Czas usługi"
                        value={price.description}
                        onChange={e => addDetailedPriceOfferSectionTime(offerDetails, setOfferDetails, index, e)}/>
                    <IconButton aria-label={"delete"} onClick={() => RemoveDetailedPriceOfferSection(offerDetails, setOfferDetails, index)}>
                        <HighlightOffIcon/>
                    </IconButton>
                </Paper>
            ))}
        </div>
    );
};

export default OfferDynamicPriceSection;