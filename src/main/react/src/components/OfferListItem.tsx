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
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import PlaceIcon from "@mui/icons-material/Place";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import { Link as RouterLink } from "react-router-dom";

interface IOfferListItem {
  offerId: number;
  avatarUrl: string;
  avatarAlt: string;
  title: string;
  subtitle: string;
  languageChip: string;
  cityChip: string;
  onlineChip: string;
  price: number;
  time: number;
  rating: number;
}

const OfferListItem = (props: IOfferListItem) => {
  const {
    offerId,
    avatarUrl,
    avatarAlt,
    title,
    subtitle,
    languageChip,
    cityChip,
    onlineChip,
    price,
    time,
    rating,
  } = props;

  return (
    <>
      <ListItem>
        <Grid container>
          <Grid item sm={2}>
            <Avatar
              alt={avatarAlt}
              src={avatarUrl}
              sx={{ width: 80, height: 80 }}
            >
              {avatarAlt[0]}
            </Avatar>
          </Grid>
          <Grid item sm={8}>
            <Typography variant="h5">
              <Link underline="hover">
                <RouterLink
                  to={{ pathname: "/offer-details", state: { props } }}
                >
                  {title}
                </RouterLink>
              </Link>
              <Typography variant="body2">{subtitle}</Typography>
              <Stack direction="row" spacing={3} sx={{ paddingTop: 2 }}>
                <Chip
                  label={languageChip}
                  icon={<CodeIcon />}
                  size="small"
                  color="info"
                />
                <Chip
                  label={cityChip}
                  icon={<PlaceIcon />}
                  size="small"
                  color="info"
                />
                <Chip
                  label={onlineChip}
                  icon={<DesktopWindowsIcon />}
                  size="small"
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
                  <Typography variant="body2">{time} min.</Typography>
                </Typography>
              </Box>
              <Rating
                name="size-small"
                defaultValue={rating}
                size="small"
                readOnly
              />
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
