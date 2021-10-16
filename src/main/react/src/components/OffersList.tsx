import { List, Grid } from "@mui/material";
import { IOffersInterface } from "../types/interfaces";
import { TeacherProfile } from "./TeacherProfile";
import OfferListItem from "./OfferListItem";

export const OffersList = ({ offers }: IOffersInterface) => {

  return (
    <Grid container direction="row">
      <Grid item xs={12} md={9}>
        <List>
          {
            offers.map((offer) => (
              <OfferListItem
                key={offer.offerId}
                offerId={offer.offerId}
                avatarUrl={offer.avatarUrl}
                avatarAlt={offer.avatarAlt}
                title={offer.title}
                subtitle={offer.subtitle}
                languageChip={offer.languageChip}
                cityChip={offer.cityChip}
                onlineChip={offer.onlineChip}
                price={offer.price}
                time={offer.time}
                rating={offer.rating}
              />
            ))
          }
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
