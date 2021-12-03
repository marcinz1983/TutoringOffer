import {Button, Divider, Grid, TextField, Typography} from "@mui/material";
import React, {FormEvent, useState} from "react";
import {useHistory} from "react-router";
import {Link} from "react-router-dom";
import {editOffer} from "../services/offer.service";
import {CREATE_OFFER_FORM, OFFER} from "../utility/constants";
import {
    addDetailedOfferChip,
    addDetailedOfferChipOnKeyPress,
    addDetailedOfferChipTitle,
    AddDetailedOfferSection,
    addDetailedOfferSectionTitle,
    removeDetailedOfferChip,
    RemoveDetailedOfferSection
} from "../utility/offer-utils";
import OfferDynamicSection from "./OfferDynamicSection/OfferDynamicSection";
import {IOffer} from "../typescript/interfaces";

export const EditOffer = () => {
    // const location = useLocation<TLocationState>(); - variable will be used again when fakeOffer gone
    const history = useHistory();

    const fakeOffer: IOffer = {
        uuid: "123",
        backgroundDescription: "BackgroundDescription",
        firstName: "John",
        lastName: "Lenon",
        longDescription: "Long Description",
        price: 50,
        rateDescription: "rateDescription",
        shortDescription: "shortDescription",
        sections: []
    }

    const {
        uuid,
        backgroundDescription,
        firstName,
        lastName,
        longDescription,
        price,
        rateDescription,
        shortDescription,
    } = fakeOffer; // when fakeOffer will be removed, set to location.state.offerProps;


    const [offerDetails, setOfferDetails] = useState<IOffer>({
        uuid: uuid,
        firstName: firstName,
        lastName: lastName,
        shortDescription: shortDescription,
        longDescription: longDescription,
        rateDescription: rateDescription,
        backgroundDescription: backgroundDescription,
        price: price,
        sections: [
            {
                title: "Frameworks",
                inputValue: "",
                chipError: false,
                properities: ["REACT", "ANGULAR", "EXTJS"]
            },
            {
                title: "Languages",
                inputValue: "",
                chipError: false,
                properities: ["JAVASCRIPT", "PYTHON", "JAVA", "C++"]
            }
        ]
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        //history.push for edditOffer, that will redirect to main page if sucess
        editOffer(offerDetails, (): void => {
            history.push({
                pathname: '/',
                //TODO: add message display based on editSucess in App.tsx
                state: {displayMessage: OFFER.EDIT_OFFER_SUCCESS_MESSAGE}
            })
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={12} sx={{paddingTop: 4}}>
                    <Typography variant="body2">{OFFER.EDIT_TITLE}</Typography>
                    <Divider/>
                </Grid>
                <Grid item xs={12} md={12} sx={{paddingTop: 5}}>
                    <Typography variant="h4">{OFFER.EDIT_OFFER}</Typography>
                    <Grid container sx={{paddingTop: 4}} spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="subtitle2">{OFFER.EDIT_TITLE}</Typography>
                            <TextField
                                id="short-description"
                                variant="outlined"
                                value={offerDetails.shortDescription}
                                fullWidth
                                onChange={(e:  React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
                                    setOfferDetails({
                                        ...offerDetails,
                                        shortDescription: e.target.value,
                                    })
                                }
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="subtitle2">{CREATE_OFFER_FORM.FORM_INPUT_PRICE}</Typography>
                            <TextField
                                id="user-profile-price"
                                variant="outlined"
                                value={offerDetails.price}
                                type="number"
                                fullWidth
                                onChange={(e:  React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
                                    setOfferDetails({
                                        ...offerDetails,
                                        price: parseInt(e.target.value),
                                    })
                                }
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="subtitle2">{OFFER.EDIT_TIME}</Typography>
                            <TextField
                                id="rate-description"
                                variant="outlined"
                                value={offerDetails.rateDescription}
                                fullWidth
                                onChange={(e:  React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
                                    setOfferDetails({
                                        ...offerDetails,
                                        rateDescription: e.target.value,
                                    })
                                }
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="subtitle2">{OFFER.EDIT_LEVEL}</Typography>
                            <TextField
                                id="background-description"
                                variant="outlined"
                                value={offerDetails.backgroundDescription}
                                fullWidth
                                onChange={(e:  React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
                                    setOfferDetails({
                                        ...offerDetails,
                                        backgroundDescription: e.target.value,
                                    })
                                }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle2">{CREATE_OFFER_FORM.FORM_INPUT_LONG_DESC}</Typography>
                            <TextField
                                id="long-description"
                                variant="outlined"
                                value={offerDetails.longDescription}
                                multiline
                                rows={8}
                                fullWidth
                                onChange={(e:  React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
                                    setOfferDetails({
                                        ...offerDetails,
                                        longDescription: e.target.value,
                                    })
                                }
                            />
                        </Grid>
                    </Grid>

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

                    <Grid container spacing={2} sx={{paddingTop: 3}}>
                        <Grid item xs={12} md={6}>
                            <Link to="/" style={{textDecoration: "none"}}>
                                <Button variant="outlined" fullWidth>
                                    {OFFER.EDIT_CANCEL}
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Button type="submit" variant="contained" color="info" fullWidth>
                                {OFFER.EDIT_SUBMIT}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    );
};
