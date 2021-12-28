import React, {useContext, useState} from 'react';
import {Button, Grid, Typography} from "@mui/material";
import {offerDetailsStyles as styles} from "./offer-details-styles";
import {globalStyles} from "../../themes/global-styles";
import AddIcon from "@mui/icons-material/Add";
import {opinionMockups} from "../../mockups/opinionMockups";
import Opinion from "../../components/Opinion/Opinion";
import AuthContext from "../../context/AuthContext";
import {LoginFormDialog} from "../../components/forms/LoginFormDialog/LoginFormDialog";
import AddOpinionDialog from "../../components/forms/AddOpinionForm/AddOpinionDialog";
import {OPINIONS, SEARCH_OFFER} from "../../utility/constants";
import AddOpinionMobileDialog from "../../components/forms/AddOpinionForm/AddOpinionMobileDialog";

interface IOpinionsSection {
    opinions: {}[],
    currentTrainerName: string,
}

export const OpinionsSection = (props: IOpinionsSection) => {

    const {currentTrainerName} = props

    const isUserLoggedIn = useContext(AuthContext)


    //logic for login modal
    const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);

    const handleLoginModalClickOpen = () => {
        setOpenLoginModal(true);
    };

    const handleLoginModalClose = (): void => {
        setOpenLoginModal(false);
    };

    //logic for opinion modal
    const [openAddOpinionModal, setOpenAddOpinionModal] = useState<boolean>(false);
    const handleAddOpinionModalClickOpen = () => {
        setOpenAddOpinionModal(true);
    };

    const handleAddOpinionModalClose = (): void => {
        setOpenAddOpinionModal(false);
    };

    //logic for mobile opinion modal
    const [openMobileAddOpinionModal, setOpenMobileAddOpinionModal] = useState<boolean>(false);
    const handleMobileAddOpinionModalClickOpen = () => {
        setOpenMobileAddOpinionModal(true);
    };

    const handleMobileAddOpinionModalClose = (): void => {
        setOpenMobileAddOpinionModal(false);
    };

    return (
        <>
            <Grid item xs={11} md={11} lg={8} sx={styles.opinionSectionParentGridItem}>
                <Grid item xs={12} md={7} lg={7} sx={styles.opinionSectionGridItemSpaceBetween}>
                    <Typography variant={"h5"} sx={styles.detailsHeading}>{OPINIONS.OPINIONS}</Typography>
                    <Button
                        sx={globalStyles.primaryButton}
                        variant={"contained"}
                        startIcon={<AddIcon/>}
                        onClick={isUserLoggedIn.user ? (
                            window.innerWidth > 700 ? handleAddOpinionModalClickOpen : handleMobileAddOpinionModalClickOpen
                        ) : (
                            handleLoginModalClickOpen)}
                    >
                        {OPINIONS.ADD_OPINION}
                    </Button>
                </Grid>
                <Grid item xs={12} md={7} lg={7}>
                    {opinionMockups.map((item, index) => (
                        <Opinion key={index} opinionData={item}/>
                    ))}

                </Grid>
                <Grid item xs={12} md={7} lg={7} sx={styles.gridRowItem}>
                    <Button sx={styles.addOpinionButton} variant={"contained"}>
                        {SEARCH_OFFER.LOAD_MORE_BUTTON}
                    </Button>
                </Grid>
            </Grid>

            <LoginFormDialog
                onClose={handleLoginModalClose}
                open={openLoginModal}/>
            <AddOpinionDialog
                onClose={handleAddOpinionModalClose}
                open={openAddOpinionModal}
                currentTrainerName={currentTrainerName}/>
            <AddOpinionMobileDialog
                onClose={handleMobileAddOpinionModalClose}
                open={openMobileAddOpinionModal}
                currentTrainerName={currentTrainerName}/>
        </>
    );
};