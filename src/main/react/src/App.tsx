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
import { EditOffer } from "./components/EditOffer";

import { IOffer } from "./typescript/interfaces";
import { getAllOffers } from "./services/offer.service";
import { env } from "process";

//FIREBASE SHIZ
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

//END OF FIREBASE SHIZ


function App() {
  const [offersData, setOffersData] = useState<Array<IOffer>>([])

  
  useEffect(() => {
     async function getOffersData () {
      let getOffersData = await getAllOffers();
      setOffersData(getOffersData)
    }

    getOffersData();
  })

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
