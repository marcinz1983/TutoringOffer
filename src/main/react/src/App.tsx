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
import { TOffersInterface } from "./types/interfaces";
import axios from "axios";

function App() {
  const [offersData, setOffersData] = useState<TOffersInterface>([]);

  useEffect(() => {
    axios
      .get("/api/offer/get")
      .then((response) => {
        setOffersData(response.data);
      })
      .catch(function (error) {
        //TODO: add some error display for user
        console.log(`Something went wrong. ${error}`);
      });
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
                  render={(props) => (
                    <OffersList {...props} offers={offersData} />
                  )}
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
