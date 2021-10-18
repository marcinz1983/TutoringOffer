import { List, Grid } from "@mui/material";
// import { TOffersInterface } from "../types/interfaces";
import { TeacherProfile } from "./TeacherProfile";
import OfferListItem from "./OfferListItem";

type TOffersInterface = {
  offers: {
    backgroundDescription: string;
    firstName: string;
    lastName: string;
    longDescription: string;
    price: number;
    rateDescription: string;
    shortDescription: string;
  }[];
};

export const OffersList = ({ offers }: TOffersInterface) => {
  return (
    <Grid container direction="row">
      <Grid item xs={12} md={9}>
        <List>
          {offers.map((offer) => (
            <OfferListItem
              firstName={offer.firstName}
              lastName={offer.lastName}
              shortDescription={offer.shortDescription}
              longDescription={offer.longDescription}
              rateDescription={offer.rateDescription}
              backgroundDescription={offer.backgroundDescription}
              price={offer.price}
            />
          ))}
        </List>
      </Grid>
      <Grid item xs={12} md={3}>
        <TeacherProfile
          avatarUrl={"userAvatar.jpg"}
          avatarAlt={"Gary Oldman"}
          username="Josh"
          accountType="Teacher"
        />
      </Grid>
    </Grid>
  );
};
