import React from 'react';
import {useLocation} from "react-router-dom";
import TrainerDetails from "./TrainerDetails";
import { Grid } from "@mui/material";
import {globalStyles} from "../../themes/global-styles";

const OfferDetails = () => {

    const location = useLocation();

    return (
        <>
            <Grid container sx={globalStyles.centerGridItem}>
                <Grid item xs={8}>
                    <TrainerDetails trainerDetails={location.state}/>
                </Grid>

            </Grid>
        </>
    );
};

export default OfferDetails;