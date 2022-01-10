import React from 'react';
import {Grid, Typography} from "@mui/material";
import {privacyPolicyStyles as styles} from "../PrivacyPolicy/privacy-policy-styles";
import {TERMS_OF_SERVICE} from "../../utility/constants";

const TermsOfService = () => {
    return (
        <Grid container sx={styles.policyMainContainer}>
            <Grid item xs={11} lg={8}>
                <Typography variant={"h4"} sx={styles.policyTitle}>{TERMS_OF_SERVICE.TERMS_OF_SERVICE}</Typography>
                <Typography variant={"subtitle2"} sx={styles.policySubtitle}>{TERMS_OF_SERVICE.SUBHEADER_1}</Typography>
                <Typography variant={"body2"}  sx={styles.policyArticle}>{TERMS_OF_SERVICE.TEXT_1}</Typography>
                <Typography variant={"subtitle2"} sx={styles.policySubtitle}>{TERMS_OF_SERVICE.SUBHEADER_2}</Typography>
                <Typography variant={"body2"}  sx={styles.policyArticle}>{TERMS_OF_SERVICE.TEXT_2}</Typography>
            </Grid>
        </Grid>
    );
};

export default TermsOfService;