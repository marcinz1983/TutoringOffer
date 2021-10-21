import {
  Grid,
  Typography,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

type TLocationState = {
  from: {
    path: string;
  };
  props: {
    backgroundDescription: string;
    firstName: string;
    lastName: string;
    longDescription: string;
    price: number;
    rateDescription: string;
    shortDescription: string;
  };
};
export const OfferDetails = (props: object) => {
  //data is passed from OfferlistItem by Router <Link as RouterLink>
  const location = useLocation<TLocationState>();

  const {
    firstName,
    lastName,
    shortDescription,
    longDescription,
    rateDescription,
    backgroundDescription,
    price,
  } = location.state.props;

  const offerProps = location.state.props;

  console.log(offerProps)

  return (
    <>
      <Grid container>
        <Grid item xs={12} sx={{ paddingTop: 4 }}>
          <Typography variant="body2">Szczegóły oferty</Typography>
          <Divider />
        </Grid>
        <Grid item xs={12} md={9} sx={{ paddingTop: 5 }}>
          <Typography variant="h4">{shortDescription}</Typography>
          <Typography variant="subtitle1">
            Poziom: {backgroundDescription}
          </Typography>
          <Typography color="inherit" variant="h5" gutterBottom>
            {price} zł / {rateDescription}
          </Typography>
          <Typography variant="body2">
            {firstName} {lastName}
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <List disablePadding>
            <Grid item xs={6} md={12}>
            <Link to={{ pathname: "/edit-offer", state: { offerProps } }} style={{textDecoration: 'none', color: 'inherit'}}>
              <ListItem divider disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <EditIcon />
                    </ListItemIcon>
                    <ListItemText primary="Edytuj ogłoszenie"/>
                  </ListItemButton>
              </ListItem>
              </Link>
            </Grid>
            <Grid item xs={6} md={12}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <DeleteForeverIcon />
                  </ListItemIcon>
                  <ListItemText primary="Usuń ogłoszenie" />{" "}
                  {/* TODO: REMOVE OFFER BY UUID JIRA EL-39 */}
                </ListItemButton>
              </ListItem>
            </Grid>
          </List>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={2} square sx={{ marginTop: 5 }}>
            <Typography variant="h6" sx={{ padding: 3 }}>
              {longDescription}
            </Typography>
            {/* REMOVE LOREM IPSUM AFTER TEXT WILL BE GIVEN BY API */}
            <Typography variant="body2" sx={{ padding: 3, paddingTop: 0 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum dignissim odio enim, vel eleifend dolor auctor eget.
              Fusce et neque eget sem scelerisque laoreet. Quisque malesuada,
              nisi et blandit consectetur, tellus eros vehicula velit, a rhoncus
              lectus ipsum at lacus. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia curae; Nunc a sodales
              arcu. Donec sit amet egestas arcu, vehicula dapibus metus.
              Vestibulum accumsan luctus elit at eleifend. Fusce vitae mauris
              maximus, fermentum dui eget, sollicitudin sem. Aliquam tincidunt
              nibh sit amet urna fringilla rutrum. Proin enim nisl, lacinia eu
              augue eu, ultrices pretium est.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sx={{ paddingTop: 3 }}>
          <Link style={{ textDecoration: "none" }} to="/">
            <Button variant="outlined" fullWidth>
              Wróć do listy
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};
