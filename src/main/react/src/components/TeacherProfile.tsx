import {
    Avatar,
    Grid,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Typography,
} from "@mui/material";

import {Link} from "react-router-dom";

import {OFFER} from "../utility/constants";

import ArchiveIcon from "@mui/icons-material/Archive";
import AddBoxIcon from "@mui/icons-material/AddBox";
import SmsIcon from "@mui/icons-material/Sms";

import {ITeacherProfile} from "../typescript/interfaces";

export const TeacherProfile = (props: ITeacherProfile) => {
    const {avatarAlt, username, accountType} = props;

    return (
        <Grid container spacing={2}>
            <Grid item sm={4}>
                <Avatar alt={avatarAlt} src={"#"} sx={{width: 80, height: 80}}>
                    {avatarAlt[0]}
                </Avatar>
            </Grid>
            <Grid item sm={8}>
                <Typography variant="h5">{username}</Typography>
                <Typography variant="body2">Typ konta: {accountType}</Typography>
            </Grid>
            <Grid item md={12}>
                <List
                    sx={{width: "100%", maxWidth: 360}}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Szybkie akcje
                        </ListSubheader>
                    }
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <ArchiveIcon/>
                        </ListItemIcon>
                        <ListItemText primary={OFFER.SIDE_MENU_STRING_1}/>
                    </ListItemButton>
                    <Link to="/add-offer">
                        <ListItemButton>
                            <ListItemIcon>
                                <AddBoxIcon/>
                            </ListItemIcon>
                            <ListItemText primary={OFFER.SIDE_MENU_STRING_2}/>
                        </ListItemButton>
                    </Link>
                    <ListItemButton>
                        <ListItemIcon>
                            <SmsIcon/>
                        </ListItemIcon>
                        <ListItemText primary={OFFER.SIDE_MENU_STRING_3}/>
                    </ListItemButton>
                </List>
            </Grid>
        </Grid>
    );
};
