import {Button, Grid, Paper, TextField, Typography,} from "@mui/material";
import {Link} from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React, {FormEvent, useState} from "react";
import {addOffer} from "../../../services/offer.service";
import {IOffer} from "../../../typescript/interfaces";
import OfferDynamicSection from "../../OfferDynamicSection/OfferDynamicSection";
import {CREATE_OFFER_FORM} from "../../../utility/constants";
import {createOfferFormStyles as styles} from "./create-offer-form-styles";
import {
    addDetailedOfferChip,
    addDetailedOfferChipOnKeyPress,
    addDetailedOfferChipTitle,
    AddDetailedOfferSection,
    addDetailedOfferSectionTitle,
    AddDetailedPriceOfferSection,
    addDetailedPriceOfferSectionCurrency,
    addDetailedPriceOfferSectionPrice,
    addDetailedPriceOfferSectionTime,
    DetailedPriceOfferChangeMainPrice,
    removeDetailedOfferChip,
    RemoveDetailedOfferSection,
    RemoveDetailedPriceOfferSection
} from "../../../utility/offer-utils";
import OfferDynamicPriceSection from "../../OfferDynamicPriceSection/OfferDynamicPriceSection";

export const CreateOfferForm = () => {

    const [offerDetails, setOfferDetails] = useState<IOffer>({
        firstName: "",
        lastName: "",
        shortDescription: "",
        longDescription: "",
        rateDescription: "",
        backgroundDescription: "",
        prices: [
            {
                currency: "",
                description: "",
                mainPrice: true,
                price: 0,
            },
        ],
        sections: [],
    });

    const handleSubmit = (e: FormEvent): void => {
        e.preventDefault();

        addOffer(offerDetails);
    };

    return (
        <Grid container sx={styles.gridContainer}>
            <Grid item xs={8}>
                <form
                    style={styles.form}
                    onSubmit={handleSubmit}
                >

                    <Typography variant="h2">{CREATE_OFFER_FORM.FORM_TITLE}</Typography>

                    <Paper elevation={5} sx={styles.paperTextfields}>
                        <TextField
                            margin="normal"
                            id="filled-basic-first-name"
                            label={CREATE_OFFER_FORM.FORM_INPUT_NAME}
                            variant="filled"
                            value={offerDetails.firstName}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
                                setOfferDetails({...offerDetails, firstName: e.target.value})
                            }
                            autoFocus
                            required
                        />
                        <TextField
                            margin="normal"
                            id="filled-basic-last-name"
                            label={CREATE_OFFER_FORM.FORM_INPUT_SURNAME}
                            variant="filled"
                            value={offerDetails.lastName}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
                                setOfferDetails({...offerDetails, lastName: e.target.value})
                            }
                            required
                        />
                        <TextField
                            margin="normal"
                            id="filled-multiline-flexible-short-desc"
                            label={CREATE_OFFER_FORM.FORM_INPUT_SHORTHAND_DESC}
                            rows={3}
                            inputProps={{maxLength: 150}}
                            variant="filled"
                            value={offerDetails.shortDescription}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
                                setOfferDetails({
                                    ...offerDetails,
                                    shortDescription: e.target.value,
                                })
                            }
                            multiline
                            required
                        />
                        <TextField
                            margin="normal"
                            id="filled-multiline-flexible-long-desc"
                            label={CREATE_OFFER_FORM.FORM_INPUT_LONG_DESC}
                            rows={12}
                            inputProps={{maxLength: 500}}
                            variant="filled"
                            value={offerDetails.longDescription}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
                                setOfferDetails({
                                    ...offerDetails,
                                    longDescription: e.target.value,
                                })
                            }
                            multiline
                            required
                        />
                        <TextField
                            margin="normal"
                            id="filled-multiline-background-desc"
                            label={CREATE_OFFER_FORM.FORM_INPUT_RATE_ADDITIONAL_DESC}
                            rows={4}
                            inputProps={{maxLength: 500}}
                            variant="filled"
                            value={offerDetails.backgroundDescription}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
                                setOfferDetails({...offerDetails, backgroundDescription: e.target.value})}
                            multiline
                            required
                        />
                    </Paper>

                    <Paper sx={styles.paperDynamicSections} elevation={5}>
                        <Typography variant={"h5"}>{CREATE_OFFER_FORM.HEADING_ADD_YOUR_PRICING}</Typography>

                        <OfferDynamicPriceSection
                            prices={offerDetails.prices}
                            addDetailedPriceOfferSectionPrice={addDetailedPriceOfferSectionPrice}
                            offerDetails={offerDetails}
                            setOfferDetails={setOfferDetails}
                            addDetailedPriceOfferSectionCurrency={addDetailedPriceOfferSectionCurrency}
                            addDetailedPriceOfferSectionTime={addDetailedPriceOfferSectionTime}
                            RemoveDetailedPriceOfferSection={RemoveDetailedPriceOfferSection}
                            DetailedPriceOfferChangeMainPrice={DetailedPriceOfferChangeMainPrice}
                        />

                        <Button
                            fullWidth
                            variant={"outlined"}
                            color={"secondary"}
                            sx={{margin: '10px 0'}}
                            onClick={() => AddDetailedPriceOfferSection(offerDetails, setOfferDetails)}>
                            {CREATE_OFFER_FORM.BUTTON_ADD_ANOTHER_PRICE}
                        </Button>
                    </Paper>

                    <Paper sx={styles.paperDynamicSections} elevation={5}>
                        <Typography variant={"h5"}>{CREATE_OFFER_FORM.HEADING_ADD_DETAILED_INFO}</Typography>
                        <OfferDynamicSection
                            options={offerDetails.sections}
                            removeSection={RemoveDetailedOfferSection}
                            addSectionTitle={addDetailedOfferSectionTitle}
                            addChipTitle={addDetailedOfferChipTitle}
                            keyPressAddChip={addDetailedOfferChipOnKeyPress}
                            addChip={addDetailedOfferChip}
                            removeChip={removeDetailedOfferChip}
                            offerDetails={offerDetails}
                            setOfferDetails={setOfferDetails}
                        />

                        <Button
                            fullWidth
                            color={"secondary"}
                            variant={"outlined"}
                            sx={{margin: '10px 0'}}
                            onClick={() => AddDetailedOfferSection(offerDetails, setOfferDetails)}>{offerDetails.sections.length ?
                            CREATE_OFFER_FORM.BUTTON_ADD_ANOTHER_OFFER
                            :
                            CREATE_OFFER_FORM.BUTTON_ADD_OFFER}
                        </Button>
                    </Paper>

                    <Button
                        variant="contained"
                        type="submit"
                        sx={{margin: '10px 0'}}>
                        {CREATE_OFFER_FORM.BUTTON_SUBMIT}
                    </Button>
                    <Link to="/">
                        <Button
                            variant="outlined"
                            fullWidth startIcon={<ArrowBackIosIcon/>}
                            sx={{margin: '10px 0'}}>
                            {CREATE_OFFER_FORM.BUTTON_RETURN}
                        </Button>
                    </Link>
                </form>
            </Grid>
        </Grid>
    );
};
