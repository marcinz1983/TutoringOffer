import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container, CssBaseline, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AppTopBar } from "./components/AppTopBar/AppTopBar";
import { EditOffer } from "./components/EditOffer";
import { OfferDetails } from "./components/OfferDetails";
// import { OffersList } from "./components/OffersList";
import { CreateOfferForm } from "./components/Trainer/CreateOfferForm";
import { FirebaseInitService } from "./services/firebase-init.service";
import { getAllOffers } from "./services/offer.service";
import { Homepage } from "./pages/Homepage/Homepage";
import {RegisterForm} from "./components/User/RegisterForm";
import { IOffer, ILocationDefaultObject} from "./typescript/interfaces"
import { mainTheme } from './themes/mainTheme'

FirebaseInitService.initializeApp();

function App() {
  const [offersData, setOffersData] = useState<Array<IOffer>>([]);

  const location = useLocation<ILocationDefaultObject>();

  useEffect(() => {
    // Example of execute register request
    // const res = RegistrationService.registerUserToFirebase({ email: 'testowy@test.com', password: 'tsssdsssss' })
    // .then((userInfo: User) => {
    // Handle positive response
    // })
    // .catch((e: RegistrationError) => {
    // Handle negative response
    // });
  });
  
  useEffect(() => {
    async function getOffersData() {
      // let getOffersData = await getAllOffers();
      // setOffersData(getOffersData);
      await signInWithEmailAndPassword(getAuth(), 'adye47@hotmail.com', 'adye47@hotmail.com')
    .then(res => res.user.getIdToken()
    .then(data => getAllOffers(data).then(data => setOffersData(data))));
    }
    getOffersData();
  }, [location]);
  const login = async () => {
    await signInWithEmailAndPassword(getAuth(), 'adye47@hotmail.com', 'adye47@hotmail.com')
    .then(res => res.user.getIdToken()
    .then(data => getAllOffers(data)));
  }


  
  console.log(offersData)
  return (
    <ThemeProvider theme={mainTheme}>
      <div className="App">
        <Container maxWidth="xl">
          <CssBaseline />
          <Grid container direction={"row"}>
            <Grid item xs={12} md={12}>
              <AppTopBar />
            </Grid>
            <Grid item container xs={12} md={12} direction={"row"}>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Homepage />
                    // <OffersList {...props} offers={offersData} />
                  )}
                />
                <Route path="/edit-offer" component={EditOffer} />
                <Route path="/offer-details" component={OfferDetails} />
                <Route path="/add-offer" component={CreateOfferForm} />
                <Route path="/register" component={RegisterForm} />
              </Switch>
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
