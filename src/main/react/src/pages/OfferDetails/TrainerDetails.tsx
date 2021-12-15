import React from 'react';
import {IPublicOffer} from "../../typescript/offer.model";
import {Grid, Paper, Typography} from "@mui/material";

const TrainerDetails = (props: any) => {

    const { trainerDetails: { offer } } = props;

    console.log(offer.firstName)

    return (
        <Grid container>
            <Grid item xs={12}>
                <Paper>
                    <Typography variant={"h4"}>Szczegóły oferty {offer.firstName} {offer.lastName} </Typography>
                </Paper>
            </Grid>
        </Grid>

    );
};

export default TrainerDetails;