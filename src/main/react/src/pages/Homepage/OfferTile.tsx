import React from 'react';
import {Grid, Paper} from "@mui/material";
import {HomepageStyles as styles} from "./homepage-styles";
import {alpha} from "@mui/system";
import {useHistory} from "react-router";
import {ROUTER_CONSTANTS} from "../../utility/router-constants";
import { IOfferTileProps} from "../../typescript/interfaces";

const OfferTile = (props: IOfferTileProps) => {

    const {name, color, url} = props.item
    const history = useHistory();

    const handleClick = () => {
        history.push({
            pathname: ROUTER_CONSTANTS.SEARCH,
            search: name,
            state: name
        })
    }

    return (
        <Grid item lg={2} md={4} sm={6} xs={6}>
            <Paper sx={{
                ...styles.offerGridItem,
                '&:hover': {
                    background: alpha(color, 0.3),
                    cursor: 'pointer',

                }
            }}
                   elevation={5}
                onClick={handleClick}
            >
                <img src={url} alt={name} style={{height: '55%'}}/>
            </Paper>
        </Grid>
    );
};

export default OfferTile;