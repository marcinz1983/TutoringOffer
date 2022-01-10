import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {CssBaseline, Grid} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {AppTopBar} from "./components/AppTopBar/AppTopBar";
import {EditOfferForm} from "./components/forms/EditOfferForm/EditOfferForm";
import OfferDetails from './pages/OfferDetails/OfferDetails';
import {CreateOfferForm} from "./components/forms/CreateOfferForm/CreateOfferForm";
import {Homepage} from "./pages/Homepage/Homepage";
import {RegisterForm} from "./components/forms/RegisterForm/RegisterForm";
import {mainTheme} from "./themes/mainTheme";
import {Footer} from "./components/Footer/Footer";
import {AuthContextProvider} from "./context/AuthContext";
import {SearchOffers} from "./pages/SearchOffers/SearchOffers";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import React from "react";
import {ROUTER_CONSTANTS} from "./utility/router-constants";
import TermsOfService from "./pages/TermsOfService/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";

function App() {

  return (
    <AuthContextProvider>
      <ThemeProvider theme={mainTheme}>
        <Router>
          <div className="App">
            <CssBaseline/>

            <Grid container style={{minWidth: '99vw', justifyContent: 'center'}}>
              <Grid item xs={11} md={11} lg={8}>
                <AppTopBar/>
                <Breadcrumbs />
              </Grid>
            </Grid>

            <Grid item container xs={12} direction={"row"}>
              <Switch>
                <Route exact path="/" render={(props) => (<Homepage/>)}/>
                <Route path={ROUTER_CONSTANTS.EDIT_OFFER} component={EditOfferForm}/>
                <Route path={ROUTER_CONSTANTS.SEARCH_OFFER_ID} component={OfferDetails}/>
                <Route path={ROUTER_CONSTANTS.CREATE_OFFER} component={CreateOfferForm}/>
                <Route path={ROUTER_CONSTANTS.REGISTER} component={RegisterForm}/>
                <Route exact path={ROUTER_CONSTANTS.SEARCH} component={SearchOffers}/>
                <Route path={ROUTER_CONSTANTS.TERMS_OF_SERVICE} component={TermsOfService}/>
                <Route path={ROUTER_CONSTANTS.PRIVACY_POLICY} component={PrivacyPolicy} />
                <Route path={"*"} component={PageNotFound} />
              </Switch>
              <Footer/>
            </Grid>
          </div>
        </Router>
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default App;