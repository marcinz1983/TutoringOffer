import {Grid, List} from "@mui/material";
import {TeacherProfile} from "./TeacherProfile";
import OfferListItem from "./OfferListItem";

import {IOffer} from "../typescript/interfaces";
import { getAllOffers } from "../services/offer.service";
import { useState, useEffect } from "react";



export const OffersList = () => {
    return (
        <Grid container direction="row">
            <Grid item xs={12} md={9}>
                <List>
                    {/* {
                        offers.map((offer: IOffer) => (
                        <OfferListItem
                        key={offer.uuid}
                        uuid={offer.uuid}
                        firstName={offer.firstName}
                        lastName={offer.lastName}
                        shortDescription={offer.shortDescription}
                        longDescription={offer.longDescription}
                        rateDescription={offer.rateDescription}
                        backgroundDescription={offer.backgroundDescription}
                        price={offer.price}
                        />
                    ))} */}
                </List>
            </Grid>
            <Grid item xs={12} md={3}>
                <TeacherProfile
                    avatarUrl={"userAvatar.jpg"}
                    avatarAlt={"Gary Oldman"}
                    username="Josh"
                    accountType="Teacher"
                />
            </Grid>
        </Grid>
    );
};
