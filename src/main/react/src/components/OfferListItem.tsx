import {
  Avatar,
  ListItem,
  Grid,
  Typography,
  Link,
  Stack,
  Chip,
  Box,
  Rating,
  Button,
  Paper,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import PlaceIcon from "@mui/icons-material/Place";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import { Link as RouterLink } from "react-router-dom";

interface IOfferListItem {
  backgroundDescription: string;
  firstName: string;
  lastName: string;
  longDescription: string;
  price: number;
  rateDescription: string;
  shortDescription: string;
}

const OfferListItem = (props: IOfferListItem) => {
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
      <ListItem sx={{ margin: 2 }}>
        <Grid container>
          <Grid item sm={2}>
            <Avatar
              alt={`${firstName} ${lastName}`}
              src={`${lastName}.jpg`}
              sx={{ width: 80, height: 80 }}
            >
              {firstName[0]}
            </Avatar>
          </Grid>
          <Grid item sm={8}>
            <Typography variant="h5">
              <Link underline="hover">
                <RouterLink
                  to={{ pathname: "/offer-details", state: { props } }}
                >
                  {shortDescription}
                </RouterLink>
              </Link>
              <Typography variant="body2">{longDescription}</Typography>
              <Stack direction="row" spacing={3} sx={{ paddingTop: 2 }}>
                <Chip
                  label={backgroundDescription}
                  icon={<CodeIcon />}
                  size="small"
                  color="info"
                />
              </Stack>
            </Typography>
          </Grid>
          <Grid item sm={2}>
            <Typography variant="body1">{`${lastName} ${firstName}`}</Typography>
            <Stack direction="column" spacing={0.5}>
              <Box component="span" sx={{ display: "flex" }}>
                <Typography variant="h5">
                  {price} zł
                  <Typography variant="body2">{rateDescription}</Typography>
                </Typography>
              </Box>
              <Button variant="text" startIcon={<MailOutlineIcon />}>
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
