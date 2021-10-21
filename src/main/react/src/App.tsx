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
import { TOffers } from "./types/interfaces";
import axios from "axios";
import { EditOffer } from "./components/EditOffer";

function App() {
  const [offersData, setOffersData] = useState<TOffers>([]);

  //TODO: MOVE CONST TO .ENV FILE
  const API_URL: string = "https://init-dev.herokuapp.com";

  useEffect(() => {
    axios
      .get(`${API_URL}/api/offer/get`)
      .then((response) => {
        setOffersData(response.data);
      })
      .catch(function (error) {
        //TODO: ADD SOME ERROR DISPLAY FOR USER
        console.log(`Something went wrong. ${error}`);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Container>
          <CssBaseline />
          <Grid container spacing={2} direction={"row"}>
            <Grid item xs={12} md={12}>
              <AppTopBar />
            </Grid>
            <Grid item container xs={12} md={12} direction={"row"}>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <OffersList {...props} offers={offersData} />
                  )}
                />
                <Route path="/edit-offer" component={EditOffer} />
                <Route path="/offer-details" component={OfferDetails} />
              </Switch>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Router>
  );
}

export default App;