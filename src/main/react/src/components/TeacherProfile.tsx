import {
  Grid,
  Avatar,
  Typography,
  List,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import {
  SIDE_MENU_STRING_1,
  SIDE_MENU_STRING_2,
  SIDE_MENU_STRING_3,
} from "../utility/constants";

import ArchiveIcon from "@mui/icons-material/Archive";
import AddBoxIcon from "@mui/icons-material/AddBox";
import SmsIcon from "@mui/icons-material/Sms";

interface TeacherProfileProps {
  avatarAlt: string;
  avatarUrl: string;
  username: string;
  accountType: string;
}

export const TeacherProfile = (props: TeacherProfileProps) => {
  const { avatarAlt, avatarUrl, username, accountType } = props;

  return (
    <Grid container spacing={2}>
      <Grid item sm={4}>
        <Avatar alt={avatarAlt} src={avatarUrl} sx={{ width: 80, height: 80 }}>
          {avatarAlt[0]}
        </Avatar>
      </Grid>
      <Grid item sm={8}>
        <Typography variant="h5">{username}</Typography>
        <Typography variant="body2">Typ konta: {accountType}</Typography>
      </Grid>
      <Grid item md={12}>
        <List
          sx={{ width: "100%", maxWidth: 360 }}
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
              <ArchiveIcon />
            </ListItemIcon>
            <ListItemText primary={SIDE_MENU_STRING_1} />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <AddBoxIcon />
            </ListItemIcon>
            <ListItemText primary={SIDE_MENU_STRING_2} />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <SmsIcon />
            </ListItemIcon>
            <ListItemText primary={SIDE_MENU_STRING_3} />
          </ListItemButton>
        </List>
      </Grid>
    </Grid>
  );
};
