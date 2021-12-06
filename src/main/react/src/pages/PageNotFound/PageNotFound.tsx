import React from 'react';
import {Button, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {PageNotFoundStyles as styles} from "./page-not-found-styles";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {PAGE_NOT_FOUND} from "../../utility/constants";

const PageNotFound = () => {
    return (
        <Grid container sx={styles.gridContainer}>
            <Grid item xs={8} sx={styles.mainGridItem}>
                <ErrorOutlineIcon sx={styles.errorOutlineIcon} color={"primary"}/>
                <Typography variant={"h2"}>{PAGE_NOT_FOUND.HEADING_PAGE_NOT_FOUND}</Typography>
                <Link style={styles.link} to={"/"}>
                    <Button
                        sx={styles.backButton}
                        color={"secondary"}
                        variant={"contained"}>
                        {PAGE_NOT_FOUND.BUTTON_RETURN_TO_HOMEPAGE}</Button>
                </Link>
            </Grid>
        </Grid>
    );
};

export default PageNotFound;