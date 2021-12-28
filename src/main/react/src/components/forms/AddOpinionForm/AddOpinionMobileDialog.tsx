import React, {useState} from 'react';
import {AppBar, Box, Button, Dialog, Grid, IconButton, Rating, TextField, Toolbar, Typography} from "@mui/material";
import {searchOffersStyles as styles} from "../../../pages/SearchOffers/search-offers-styles";
import {OPINIONS} from "../../../utility/constants";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import {globalStyles} from "../../../themes/global-styles";
import {offerDetailsStyles as offerStyles} from "../../../pages/OfferDetails/offer-details-styles";
import {addOpinionDialogStyles as opinionStyles} from "./add-opinion-dialog-styles";
import {IOpinionData} from "../../../typescript/interfaces";

interface IAddOpinionDialogProps {
    onClose: () => void,
    open: boolean,
    currentTrainerName: string
}

const AddOpinionMobileDialog = (props: IAddOpinionDialogProps) => {

    const {open, onClose, currentTrainerName} = props

    const [opinionData, setOpinionData] = useState<IOpinionData>({
        desc: "",
        rating: null,
    })

    const handleFormSubmit = () => {
        //TODO: POST DATA TO BACKEND WHEN ENDPOINT WILL BE READY
        console.log("Opinion submited")
        onClose()
    }

    return (
        <Dialog
            fullScreen
            open={open}
            onClose={onClose}
            PaperProps={{style: styles.modalPaper}}
        >
            <AppBar sx={styles.modalAppBar}>
                <Toolbar>
                    <Typography sx={{ml: 2, flex: 1}} variant="h6" component="div">
                        {OPINIONS.ADD_OPINION}
                    </Typography>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={() => onClose()}
                        aria-label="close"
                    >
                        <HighlightOffIcon fontSize="large" color="primary"/>
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Grid
                container
                columns={12}
                sx={styles.sliderGridItem}>
                <Grid item xs={11}>
                    <Grid container>
                        <Grid item xs={12} sx={opinionStyles.trainerNameGridItem}>
                            <Typography
                                variant={"h4"}
                                color={"primary"}
                                sx={opinionStyles.trainerNameGridChildren}>
                                {currentTrainerName}
                            </Typography>
                            <Box sx={opinionStyles.ratingBox}>
                                <Typography
                                    variant={"h6"}>
                                    {OPINIONS.YOUR_RATE}
                                </Typography>
                                <Rating
                                    defaultValue={3}
                                    size={"large"}
                                    value={opinionData.rating} precision={0.5}
                                    onChange={(event, newValue) => setOpinionData({...opinionData, rating: newValue})}
                                    sx={offerStyles.opinionModalRating}/>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sx={offerStyles.gridRowItem}>
                            <TextField
                                sx={opinionStyles.mobileOpinionTextfield}
                                multiline
                                rows={12}
                                placeholder={OPINIONS.OPTIONAL_OPINION}
                                inputProps={{maxLength: 300}}
                                onChange={(e) => setOpinionData({...opinionData, desc: e.target.value})}/>
                        </Grid>

                        <Grid item xs={12} sx={opinionStyles.mobileTextfieldCounterGridItem}>
                            <Box>{opinionData.desc.length}/300</Box>
                        </Grid>
                    </Grid>

                    <Button
                        fullWidth
                        disabled={!opinionData.rating}
                        variant="contained"
                        onClick={handleFormSubmit}
                        sx={globalStyles.primaryButton}
                    >
                        {OPINIONS.ADD_OPINION}
                    </Button>

                </Grid>
            </Grid>
        </Dialog>
    );
};

export default AddOpinionMobileDialog;