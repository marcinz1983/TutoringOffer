import React from 'react';
import {Grid, Typography} from "@mui/material";
import {privacyPolicyStyles as styles} from "./privacy-policy-styles";
import {PRIVACY_POLICY} from "../../utility/constants";

const PrivacyPolicy = () => {
    return (
        <Grid container sx={styles.policyMainContainer}>
            <Grid item xs={11} lg={8}>
                <Typography variant={"h4"} sx={styles.policyTitle}>{PRIVACY_POLICY.PRIVACY_POLICY}</Typography>
                <Typography variant={"subtitle2"} sx={styles.policySubtitle}>{PRIVACY_POLICY.SUBHEADER_1}</Typography>
                <Typography variant={"body2"}  sx={styles.policyArticle}>{PRIVACY_POLICY.TEXT_1}</Typography>
                <Typography variant={"subtitle2"} sx={styles.policySubtitle}>{PRIVACY_POLICY.SUBHEADER_2}</Typography>
                <Typography variant={"body2"} sx={styles.policyArticle}>{PRIVACY_POLICY.TEXT_2}</Typography>
                <Typography variant={"subtitle2"} sx={styles.policySubtitle}>{PRIVACY_POLICY.SUBHEADER_3}</Typography>
                <Typography variant={"body2"} sx={styles.policyArticle}>{PRIVACY_POLICY.TEXT_3}</Typography>
                <Typography variant={"subtitle2"} sx={styles.policySubtitle}>{PRIVACY_POLICY.SUBHEADER_4}</Typography>
                <Typography variant={"body2"} sx={styles.policyArticle}>{PRIVACY_POLICY.TEXT_4}</Typography>
            </Grid>
        </Grid>
    );
};

export default PrivacyPolicy;