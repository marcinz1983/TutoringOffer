import React, {useState} from 'react';
import {Box, Button, Dialog, Grid, IconButton, Paper, Rating, TextField, Typography} from "@mui/material";
import {loginFormDialogStyles as styles} from "../LoginFormDialog/login-form-dialog-styles";
import CloseIcon from "@mui/icons-material/Close";
import {offerDetailsStyles as offerStyles} from "../../../pages/OfferDetails/offer-details-styles";
import {OPINIONS} from "../../../utility/constants";
import {IOpinionData} from "../../../typescript/interfaces";

interface IAddOpinionDialogProps {
    onClose: () => void,
    open: boolean,
    currentTrainerName: string
}

const AddOpinionDialog = (props: IAddOpinionDialogProps) => {

    const {onClose, open, currentTrainerName} = props;

    const [opinionData, setOpinionData] = useState<IOpinionData>({
        desc: "",
        rating: null,
    })

    const handleFormSubmit = () => {
        //TODO: POST DATA TO BACKEND WHEN ENDPOINT WILL BE READY
        console.log("Opinion submited")
    }

    return (
        <Dialog
            onClose={onClose}
            open={open}
            PaperProps={{
                style: {
                    backgroundColor: "transparent",
                    boxShadow: "none",
                }
            }}>
            <Paper component="form" onSubmit={handleFormSubmit} sx={offerStyles.dialogPaper}>
                <Grid item xs={12} sx={styles.iconButton}>
                    <IconButton aria-label="close-modal" onClick={onClose}>
                        <CloseIcon/>
                    </IconButton>
                </Grid>

                <Grid container sx={styles.formContainer}>
                    <Grid item xs={12} sx={offerStyles.gridColumnItem}>
                        <Typography
                            variant={"h5"}
                            sx={offerStyles.gridColumnChildren}>
                            {OPINIONS.RATE_TRAINER}
                        </Typography>
                        <Typography
                            variant={"h4"}
                            sx={offerStyles.gridColumnChildren}
                            color={"primary"}>
                            {currentTrainerName}
                        </Typography>
                        <Box sx={offerStyles.gridColumnChildren}>
                            <Typography
                                variant={"h6"}>
                                {OPINIONS.YOUR_RATE}
                            </Typography>
                            <Rating
                                defaultValue={3}
                                size={"large"}
                                value={opinionData.rating} precision={0.5}
                                onChange={(event, newValue) => setOpinionData({...opinionData, rating: newValue})}
                                sx={offerStyles.opinionModalRating}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} sx={offerStyles.gridRowItem}>
                        <TextField
                            sx={offerStyles.opinionTextField}
                            multiline
                            rows={7}
                            placeholder={OPINIONS.OPTIONAL_OPINION}
                            inputProps={{maxLength: 300}}
                            onChange={(e) => setOpinionData({...opinionData, desc: e.target.value})}/>
                    </Grid>

                    <Grid item xs={12} sx={offerStyles.opinionTextFieldCounter}>
                        <Box>{opinionData.desc.length}/300</Box>
                    </Grid>
                    <Button
                        variant={"contained"}
                        sx={offerStyles.addOpinionButton}
                        disabled={!opinionData.rating}
                        onClick={handleFormSubmit}
                    >
                        {OPINIONS.ADD_OPINION}
                    </Button>
                </Grid>
            </Paper>
        </Dialog>
    );
};

export default AddOpinionDialog;