import React from 'react';
import {useLocation} from "react-router-dom";
import TrainerDetails from "./TrainerDetails";
import {Accordion, AccordionDetails, AccordionSummary, Box, Divider, Grid, Paper, Typography} from "@mui/material";
import {globalStyles} from "../../themes/global-styles";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {IPublicOffer} from "../../typescript/offer.model";
import {offerDetailsStyles as styles} from "./offer-details-styles";
import ContentCarousel from "../../components/ContentCarousel/ContentCarousel";
import {otherTrainersMockups} from "../../mockups/otherTrainersMockups";
import {OpinionsSection} from './OpinionsSection'
import {OFFER} from "../../utility/constants";
import {mainTheme} from "../../themes/mainTheme";

interface IOfferLocationState {
    from: { pathname: string },
    offer: IPublicOffer
}

const OfferDetails = () => {

    const location = useLocation<IOfferLocationState>();
    const {longDescription, price, sections} = location.state.offer;

    return (
        <>
            <Grid container sx={globalStyles.centerGridItem}>
                <Grid item xs={11} sm={11} lg={8}>
                    <TrainerDetails trainerDetails={location.state}/>
                </Grid>
                <Grid item md={11} lg={8} sx={styles.hideOnMobile}>
                    <Typography
                        variant={"h5"}
                        sx={styles.detailsHeading}>
                        {OFFER.ABOUT_ME}
                    </Typography>
                </Grid>
                <Grid item xs={11} sx={styles.hideOnDesktop}>
                    <Box sx={{marginTop: '20px'}}>
                        <Accordion sx={styles.mobileAccordion}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel1a-content"
                                id="panel-header"
                            >
                                <Typography>{OFFER.ABOUT_ME}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {longDescription}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Grid>
                <Grid item xs={11} lg={8} sx={styles.desktopPropGridItem}>
                    <Grid item xs={11} md={7} sx={styles.hideOnMobile}>
                        <Paper
                            elevation={3}
                            sx={styles.detailsPaper}>
                            {longDescription}
                        </Paper>
                        <Typography
                            variant={"h5"}
                            sx={styles.detailsHeading}>
                            {OFFER.HASHTAGS}
                        </Typography>
                        <Paper sx={styles.hashtagPaper} elevation={3}>
                            #java #javascript #stacjonarnie #zdalnie
                            #c++ #trenerlodz #programowanielodz #python
                            #angular #trenerkobieta #poziompodstawowy
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Paper elevation={3} sx={styles.paramsDetailsPaper}>

                            {sections.map((item, index) => (
                                <div key={index}>
                                    <Typography
                                        variant={"h6"}
                                        color={"secondary"}>
                                        {item.title}
                                    </Typography>
                                    {item.properties.map((propItem, propIndex) => (
                                        <Typography
                                            variant={"body1"}
                                            sx={styles.propTypography}
                                            key={propIndex}>
                                            {propItem}
                                        </Typography>
                                    ))}
                                </div>
                            ))}
                            <Divider color={"secondary"} sx={styles.divider}/>
                            <Typography
                                variant={"h6"}
                                color={"secondary"}>
                                {OFFER.PRICES}
                            </Typography>
                            {price.map((item, index) => (
                                <Typography
                                    key={index}
                                    sx={styles.propTypography}
                                    variant={"body1"}
                                    color={item.mainPrice ? "secondary" : mainTheme.palette.text.primary}>
                                    {item.price} {item.currency} - {item.description}
                                </Typography>
                            ))}
                        </Paper>
                    </Grid>
                </Grid>

                <Grid item xs={11} sx={styles.hideOnDesktop}>
                    <Typography variant={"h5"} sx={styles.detailsHeading}>{OFFER.HASHTAGS}</Typography>
                    <Paper sx={{...styles.detailsPaper, marginTop: '30px'}} elevation={3}>
                        {/* //TODO: ADD PROPER DISPLAY HASHTAGS FROM BACKEND DATA */}
                        #java #javascript #stacjonarnie #zdalnie
                        #c++ #trenerlodz #programowanielodz #python
                        #angular #trenerkobieta #poziompodstawowy
                    </Paper>
                </Grid>

                {/* //TODO: ADD PROPER OPINIONS DATA FROM BACKEND */}
                <OpinionsSection currentTrainerName={location.state.offer.trainer.name} opinions={[{}, {}, {}]}/>

                <Grid item xs={10} md={11} lg={8} sx={styles.otherTrainersGridItem}>
                    <Typography
                        variant={"h5"}
                        sx={styles.otherTrainersHeading}>
                        {OFFER.OTHER_TRAINERS_FROM_CATEGORY}
                    </Typography>
                    <ContentCarousel data={otherTrainersMockups}/>
                </Grid>
            </Grid>
        </>
    );
};

export default OfferDetails;