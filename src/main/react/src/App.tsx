import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container, CssBaseline, Grid } from "@mui/material";

import { AppTopBar } from "./components/AppTopBar";
import { OffersList } from "./components/OffersList";
import { OfferDetails } from "./components/OfferDetails";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { IOffersInterface } from "./types/interfaces";
import axios from "axios";

function App() {

  //remove this table when api will return data
  const fakeOffersData = [
    {
      offerId: 0,
      avatarUrl: "avatar2.jpg",
      avatarAlt: "Whitney Houston",
      title: "Javascript korepetycje",
      subtitle: "Korepetycje z React.js + Typescript w trybie przyspieszonym",
      languageChip: "Javascript",
      cityChip: "Gdynia",
      onlineChip: "Zdalnie",
      price: 120,
      time: 60,
      rating: 4,
    },
    {
      offerId: 1,
      avatarUrl: "avatar2.jpg",
      avatarAlt: "Rocky Balboa",
      title: "Szybki kurs RUST",
      subtitle: "Rust dla początkujących",
      languageChip: "Rust",
      cityChip: "Katowice",
      onlineChip: "Zdalnie",
      price: 70,
      time: 90,
      rating: 2,
    },
    {
      offerId: 2,
      avatarUrl: "avatar3.jpg",
      avatarAlt: "Gandalf Szary",
      title: "HTML & CSS - od zera do frontendowca",
      subtitle: "Podstawy tworzenia stron www",
      languageChip: "Html & Css",
      cityChip: "Bydgoszcz",
      onlineChip: "Stacjonarnie",
      price: 49,
      time: 120,
      rating: 5,
    },
  ];
  //remove this state when api will return data
  const [offers, setOffers] =
    useState<IOffersInterface["offers"]>(fakeOffersData);

    const [offersData, setOffersData] = useState({})

  useEffect(() => {
    axios.get("/api/offer/get")
        .then(response=>{
          setOffersData(response.data)
        })
        .catch( function (error) {
            console.log(`${error}`)
        })
  }, []);

  return (
    <div className="App">
      <Container>
        <CssBaseline />
        <Grid container spacing={2} direction={"row"}>
          <Grid item xs={12} md={12}>
            <AppTopBar />
          </Grid>
          <Grid item xs={12} md={12} direction={"row"}>
            <Router>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => <OffersList {...props} offers={offers} />}
                />
                <Route path="/offer-details" component={OfferDetails} />
              </Switch>
            </Router>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
