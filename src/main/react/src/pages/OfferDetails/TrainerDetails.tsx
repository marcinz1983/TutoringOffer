import React from 'react';
import {Avatar, Box, Button, Grid, IconButton, Paper, Rating, Typography} from "@mui/material";
import {IPublicOffer} from "../../typescript/offer.model";
import {offerDetailsStyles as styles} from "./offer-details-styles";
import photoPlaceholderMan from '../../assets/photo-placeholder-man.png'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import PhoneDisplayer from "../../components/PhoneDisplayer/PhoneDisplayer";
import {HOMEPAGE, SEARCH_OFFER} from "../../utility/constants";
import {globalStyles} from "../../themes/global-styles";
import MailOutlineIcon from '@mui/icons-material/MailOutline';


interface ITrainerDetailsProps {
    trainerDetails: {
        offer: IPublicOffer
    }
}

const TrainerDetails = (props: ITrainerDetailsProps) => {

    const {trainerDetails: {offer}} = props;
    const {trainer, price, firstName} = offer

    return (
        <>
            {/*mobile*/}
            <Paper sx={styles.offerDetailsMobilePaper}>
                <Grid container>
                    <Grid item xs={12} sx={styles.trainerAvatarGridItem}>
                        <Avatar
                            alt={trainer.name}
                            src={trainer.image ? trainer.image : photoPlaceholderMan}
                            sx={styles.trainerAvatar}
                        />
                    </Grid>
                    <Grid item xs={7}>
                        <Typography
                            variant={"h5"}
                            color={"primary"}
                            sx={styles.trainerName}>
                            {firstName}
                        </Typography>
                    </Grid>
                    <Grid item xs={5} sx={styles.favAndShareIconsGridItem}>
                        <IconButton>
                            <FavoriteBorderIcon
                                fontSize={"large"}
                                color={"secondary"}/>
                        </IconButton>
                        <IconButton>
                            <ShareOutlinedIcon
                                fontSize={"large"}
                                color={"secondary"}/>
                        </IconButton>
                    </Grid>
                    <Grid item xs={12} sx={styles.ratingGridItem}>
                        {/* TODO: CHANGE NUMBER OF RATES TO BACKEND DATA */}
                        <Rating
                            value={trainer.rating}
                            precision={0.5}
                            size={"large"}
                            readOnly/>
                        <span>
                            (5 ocen)
                        </span>
                    </Grid>
                    <Grid item xs={12} sx={styles.backgroundDescriptionGridItem}>
                        {offer.backgroundDescription}
                    </Grid>
                    <Grid item xs={5}>
                        <Typography color={"secondary"}
                                    sx={styles.priceTypography}>
                            {SEARCH_OFFER.FROM} {price[0].price} {price[0].currency}
                        </Typography>
                        <Typography
                            variant={"body2"}
                            color={"secondary"}>
                            {price[0].description}
                        </Typography>
                    </Grid>
                    <Grid item xs={7} sx={styles.phoneGridItem}>
                        <PhoneDisplayer userPhoneNumber={trainer.phone}/>
                    </Grid>
                </Grid>
                <Button
                    sx={globalStyles.primaryButton}
                    variant={"contained"}
                    startIcon={<MailOutlineIcon/>}
                    fullWidth>
                    {HOMEPAGE.STEPSECTION_TITLE_2}
                </Button>
            </Paper>

            {/*desktop*/}
            <Paper sx={styles.offerDetailsDesktopPaper}>
                <Grid container sx={styles.desktopGridContainerMain}>
                    <Grid item xs={3} md={4} lg={4} xl={3} sx={styles.desktopAvatarGridItem}>
                        <Avatar alt={trainer.name}
                                src={trainer.image ? trainer.image : photoPlaceholderMan}
                                sx={styles.trainerAvatar}/>
                    </Grid>
                    <Grid item sm={8} lg={8} xl={9} sx={styles.desktopDetailsGridItem}>
                        <Grid container>
                            <Grid item sm={8} sx={styles.desktopNameGridItem}>
                                <Grid container>
                                    <Grid item sm={12} sx={styles.desktopNameGridItem}>
                                        <Typography variant={"h5"}
                                                    color={"primary"}
                                                    sx={styles.trainerName}>
                                            {firstName}
                                        </Typography>
                                        <span>
                                            <IconButton>
                                                <FavoriteBorderIcon
                                                    fontSize={"medium"}
                                                    color={"secondary"}/>
                                            </IconButton>
                                            <IconButton>
                                                <ShareOutlinedIcon
                                                    fontSize={"medium"}
                                                    color={"secondary"}/>
                                                </IconButton>
                                        </span>
                                    </Grid>
                                    <Grid item sm={12}>
                                        {/* TODO: Change city display to data from backend*/}
                                        <Typography variant={"body2"}>Łódź</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sm={4} sx={styles.desktopPriceGridItem}>
                                <Typography color={"secondary"}
                                            sx={styles.priceTypography}>
                                    {SEARCH_OFFER.FROM} {price[0].price} {price[0].currency}
                                </Typography>
                                <Typography
                                    variant={"body2"}
                                    color={"secondary"}>
                                    {price[0].description}
                                </Typography>
                            </Grid>
                            <Grid item sm={8}>
                                <Typography
                                    variant={"body1"}>
                                    {offer.backgroundDescription}
                                </Typography>
                            </Grid>
                            <Grid item sm={12} sx={styles.desktopRatingGridItem}>
                                <Typography>{SEARCH_OFFER.RATE}:</Typography>

                                <Box>
                                    <Rating
                                        value={trainer.rating}
                                        precision={0.5}
                                        size={"large"}
                                        readOnly/>
                                </Box>
                                {/*TODO: Change rate number display to data from backend*/}
                                <span id={"rate-count"}>(5 ocen)</span>
                            </Grid>
                            <Grid item sm={4}>
                                <Button
                                    sx={globalStyles.primaryButton}
                                    variant={"contained"}
                                    startIcon={<MailOutlineIcon/>}
                                    fullWidth>
                                    {HOMEPAGE.STEPSECTION_TITLE_2}
                                </Button>
                            </Grid>
                            <Grid item sm={8} sx={styles.desktopPhoneGridItem}>
                                <PhoneDisplayer userPhoneNumber={trainer.phone}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
};

export default TrainerDetails;