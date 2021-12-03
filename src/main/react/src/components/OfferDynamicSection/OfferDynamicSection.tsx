import React from 'react';
import {Alert, Button, Chip, Grid, Paper, TextField} from "@mui/material";
import {IOfferDynamicSection} from "../../typescript/interfaces";
import {OFFER_DYNAMIC_SECTION} from "../../utility/constants";

const OfferDynamicSection = (props: IOfferDynamicSection) => {

    const {options, addSectionTitle, addChipTitle, keyPressAddChip, addChip, removeChip, offerDetails, setOfferDetails} = props;

    return (
        <div>
            {options?.map((option: any, index: number) => (
                <Paper sx={{margin: "30px"}} key={index}>
                    <Button onClick={() => props.removeSection(offerDetails, setOfferDetails, index)}> X </Button>
                    <TextField
                        label={OFFER_DYNAMIC_SECTION.INPUT_SECTION_TITLE}
                        value={option.title}
                        onChange={(e) => addSectionTitle(offerDetails, setOfferDetails, index, e)}
                        autoFocus
                    />
                    <TextField
                        label={OFFER_DYNAMIC_SECTION.INPUT_SECTION_EL}
                        value={option.inputValue}
                        onChange={(e) => addChipTitle(offerDetails, setOfferDetails, index, e)}
                        onKeyPress={(e) => keyPressAddChip(offerDetails, setOfferDetails, index, option.inputValue!, e)}
                    />
                    <Button onClick={() => addChip(offerDetails, setOfferDetails, index, option.inputValue!)}>
                        {OFFER_DYNAMIC_SECTION.BUTTON_ADD_SECTOIN_EL}
                    </Button>
                    {option.chipError ? (
                        <Alert severity="error">{OFFER_DYNAMIC_SECTION.ALERT_CHIP_ERROR}</Alert>
                    ) : null}
                    <Paper>
                        <Grid container sx={{display: "flex"}}>

                            {option.properities.map((properity: string, chipIndex: number) => (
                                <Grid item key={chipIndex}>
                                    <Chip
                                        label={properity}
                                        onDelete={() => removeChip(offerDetails, setOfferDetails, index, properity)}
                                        sx={{margin: "10px"}}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Paper>

                </Paper>
            ))}
        </div>
    );
};

export default OfferDynamicSection;