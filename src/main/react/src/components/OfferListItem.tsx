import {Avatar, Box, Button, Chip, Grid, ListItem, Stack, Typography,} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import {Link as RouterLink} from "react-router-dom";

import {IOffer} from "../typescript/interfaces";

const OfferListItem = (props: IOffer) => {
    const {
        firstName,
        lastName,
        shortDescription,
        longDescription,
        rateDescription,
        backgroundDescription,
        price,
    } = props;

    return (
        <>
            <ListItem sx={{margin: 2}}>
                <Grid container>
                    <Grid item sm={2}>
                        <Avatar
                            alt={`${firstName} ${lastName}`}
                            src={"#"}
                            sx={{width: 80, height: 80}}
                        >
                            {firstName[0]}
                        </Avatar>
                    </Grid>
                    <Grid item sm={8}>
                        <Typography variant="h5">
                            <RouterLink to={{pathname: "/offer-details", state: {props}}}>
                                {shortDescription}
                            </RouterLink>
                            <Typography variant="body2">{longDescription}</Typography>
                            <Stack direction="row" spacing={3} sx={{paddingTop: 2}}>
                                <Chip
                                    label={backgroundDescription}
                                    icon={<CodeIcon/>}
                                    size="small"
                                    color="info"
                                />
                            </Stack>
                        </Typography>
                    </Grid>
                    <Grid item sm={2}>
                        <Typography variant="body1">{`${lastName} ${firstName}`}</Typography>
                        <Stack direction="column" spacing={0.5}>
                            <Box component="span" sx={{display: "flex"}}>
                                <Typography variant="h5">
                                    {price} zł
                                    <Typography variant="body2">{rateDescription}</Typography>
                                </Typography>
                            </Box>
                            <Button variant="text" startIcon={<MailOutlineIcon/>}>
                                Kontakt
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>
            </ListItem>
        </>
    );
};

export default OfferListItem;
