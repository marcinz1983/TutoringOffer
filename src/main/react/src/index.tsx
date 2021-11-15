import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {FirebaseService} from "./services/firebase.service";

FirebaseService.initializeApp();
handleRedirectUrl();

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


function handleRedirectUrl() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  if (params.redirect) {
    (window as any).history.pushState("", "", params.redirect);
  }
}