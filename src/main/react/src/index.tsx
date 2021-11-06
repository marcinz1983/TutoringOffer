import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter as Router} from "react-router-dom";

console.log(process.env.REACT_APP_TEST)

handleRedirectUrl();

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


function handleRedirectUrl(){
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    if(params.redirect){
        (window as any).history.pushState("", "", params.redirect);
    }
}