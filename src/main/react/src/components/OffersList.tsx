import { List, Divider } from "@mui/material";
import OfferListItem from "./OfferListItem";

export const OffersList = () => {
  return (
      <List>
        <OfferListItem
          avatarUrl={"avatar.jpg"}
          avatarAlt={"Whitney Houston"}
          title={"Javascript korepetycje"}
          subtitle={
            "Korepetycje z React.js + Typescript w trybie przyspieszonym"
          }
          languageChip={"Javascript"}
          cityChip={"Gdynia"}
          onlineChip={"Zdalnie"}
          price={120}
          time={60}
          rating={4}
        />
        <Divider />
        <OfferListItem
          avatarUrl={"avatar2.jpg"}
          avatarAlt={"Rocky Balboa"}
          title={"Szybki kurs RUST"}
          subtitle={"Rust dla początkujących"}
          languageChip={"Rust"}
          cityChip={"Katowice"}
          onlineChip={"Zdalnie"}
          price={70}
          time={90}
          rating={2}
        />
        <Divider />
        <OfferListItem
          avatarUrl={"avatar3.jpg"}
          avatarAlt={"Gandalf Szary"}
          title={"HTML & CSS - od zera do frontendowca"}
          subtitle={"Podstawy tworzenia stron www"}
          languageChip={"Html & Css"}
          cityChip={"Bydgoszcz"}
          onlineChip={"Zdalnie"}
          price={49}
          time={120}
          rating={5}
        />
      </List>
  );
};
