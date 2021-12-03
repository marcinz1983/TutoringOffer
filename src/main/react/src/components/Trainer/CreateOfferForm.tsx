import {Box, Button, FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography,} from "@mui/material";
import {Link} from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React, {FormEvent, useState} from "react";
import {addOffer} from "../../services/offer.service";
import {IOffer} from "../../typescript/interfaces";
import OfferDynamicSection from "../OfferDynamicSection/OfferDynamicSection";
import {CREATE_OFFER_FORM} from "../../utility/constants";
import {
    addDetailedOfferChip,
    addDetailedOfferChipOnKeyPress,
    addDetailedOfferChipTitle,
    AddDetailedOfferSection,
    addDetailedOfferSectionTitle,
    removeDetailedOfferChip,
    RemoveDetailedOfferSection
} from "../../utility/offer-utils";

export const CreateOfferForm = () => {

    const [offerDetails, setOfferDetails] = useState<IOffer>({
        firstName: "",
        lastName: "",
        shortDescription: "",
        longDescription: "",
        rateDescription: "",
        backgroundDescription: "",
        price: 0,
        sections: [],
    });

    const handleSubmit = (e: FormEvent): void => {
        e.preventDefault();

        addOffer(offerDetails);
    };

    return (
        <Box>
            <form
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
                onSubmit={handleSubmit}
            >

                <Typography variant="h2">{CREATE_OFFER_FORM.FORM_TITLE}</Typography>
                <TextField
                    margin="normal"
                    id="filled-basic-first-name"
                    label={CREATE_OFFER_FORM.FORM_INPUT_NAME}
                    variant="filled"
                    value={offerDetails.firstName}
                    onChange={(e:  React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
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
                    onChange={(e:  React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
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
                    onChange={(e:  React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
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
                    onChange={(e:  React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
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
                    id="filled-basic-price"
                    label={CREATE_OFFER_FORM.FORM_INPUT_PRICE}
                    type="number"
                    value={offerDetails.price}
                    onChange={(e:  React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
                        setOfferDetails({
                            ...offerDetails,
                            price: parseFloat(e.target.value),
                        })
                    }
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">{CREATE_OFFER_FORM.FORM_INPUT_CURRENCY}</InputAdornment>
                        ),
                    }}
                    variant="filled"
                    required
                />
                <FormControl>
                    <InputLabel id="filled-select-label">{CREATE_OFFER_FORM.FORM_INPUT_RATE_DESC}</InputLabel>
                    <Select
                        labelId="filled-select-label"
                        id="filled-select-rate-desc"
                        variant="filled"
                        value={offerDetails.rateDescription}
                        label="rate description"
                        onChange={(e) =>
                            setOfferDetails({
                                ...offerDetails,
                                rateDescription: e.target.value,
                            })
                        }
                    >
                        <MenuItem value={"Stawka za 1h"}>Stawka za 1h</MenuItem>
                        <MenuItem value={"Stawka za zlecenie"}>Stawka za zlecenie</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    margin="normal"
                    id="filled-multiline-background-desc"
                    label={CREATE_OFFER_FORM.FORM_INPUT_RATE_ADDITIONAL_DESC}
                    rows={4}
                    inputProps={{maxLength: 500}}
                    variant="filled"
                    value={offerDetails.backgroundDescription}
                    onChange={(e:  React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
                        setOfferDetails({...offerDetails, backgroundDescription: e.target.value})}
                    multiline
                    required
                />

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
                    onClick={() => AddDetailedOfferSection(offerDetails, setOfferDetails)}>{offerDetails.sections.length ?
                    CREATE_OFFER_FORM.BUTTON_ADD_ANOTHER_OFFER
                    :
                    CREATE_OFFER_FORM.BUTTON_ADD_OFFER}
                </Button>

                <Button variant="contained" type="submit">
                    {CREATE_OFFER_FORM.BUTTON_SUBMIT}
                </Button>
                <Link to="/">
                    <Button variant="outlined" fullWidth startIcon={<ArrowBackIosIcon/>}>
                        {CREATE_OFFER_FORM.BUTTON_RETURN}
                    </Button>
                </Link>
            </form>
        </Box>
    );
};
