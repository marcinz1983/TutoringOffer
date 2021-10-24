import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container, CssBaseline, Grid } from "@mui/material";


import { AppTopBar } from "./components/AppTopBar";
import { OffersList } from "./components/OffersList";
import { OfferDetails } from "./components/OfferDetails";
import { CreateOfferForm } from "./components/Trainer/CreateOfferForm";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { EditOffer } from "./components/EditOffer";

import { IOffer } from "./typescript/interfaces";

function App() {
  const [offersData, setOffersData] = useState<Array<IOffer>>([]);

  useEffect(() => {
    axios
      .get(`/api/offer/get`)
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
                <Route path="/add-offer" component={CreateOfferForm} />
              </Switch>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Router>
  );
}

export default App;
