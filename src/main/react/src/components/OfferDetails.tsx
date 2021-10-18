import {
  Avatar,
  Grid,
  Chip,
  Typography,
  Stack,
  Box,
  Rating,
  Button,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import CodeIcon from "@mui/icons-material/Code";
import PlaceIcon from "@mui/icons-material/Place";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

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

  return (
    <>
      <Grid container sx={{ paddingTop: 10 }}>
        <Grid item sm={2}>
          <Avatar
            alt={`${firstName} ${lastName}`}
            src={`${lastName}.jpg`}
            sx={{ width: 120, height: 120 }}
          >
            {firstName[0]}
          </Avatar>
        </Grid>
        <Grid item sm={8}>
          <Typography variant="h5">
            <Typography variant="h4">{shortDescription}</Typography>
            <Typography variant="h5">{longDescription}</Typography>
            <Stack direction="row" spacing={3} sx={{ paddingTop: 2 }}>
              <Chip
                label={backgroundDescription}
                icon={<CodeIcon />}
                color="info"
              />
              <Chip label={firstName} icon={<PlaceIcon />} color="info" />
              <Chip
                label={lastName}
                icon={<DesktopWindowsIcon />}
                color="info"
              />
            </Stack>
          </Typography>
        </Grid>
        <Grid item sm={2}>
          <Stack direction="column" spacing={0.5}>
            <Box component="span" sx={{ display: "flex" }}>
              <Typography variant="h5">
                {price} zł
                <Typography variant="body2">{rateDescription} min.</Typography>
              </Typography>
            </Box>
            <Button variant="text" startIcon={<MailOutlineIcon />}>
              Kontakt
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <Grid md={12} sx={{ paddingTop: 8 }}>
        <Link to="/">
          <Button variant="outlined" fullWidth startIcon={<ArrowBackIosIcon />}>
            Powrót
          </Button>
        </Link>
      </Grid>
    </>
  );
};
