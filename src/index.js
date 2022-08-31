import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./mod.css"
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "@auth0/auth0-react";
import history from "./utils/history";

import { FpjsProvider } from '@fingerprintjs/fingerprintjs-pro-react';
const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

// Please see https://auth0.github.io/auth0-react/interfaces/Auth0ProviderOptions.html
// for a full list of the available properties on the provider

// const fpPromise = import('https://fpcdn.io/v3/eJCjdtCIXZVuVZlawI6Z')
// .then(FingerprintJS => FingerprintJS.load())
// // Get the visitor identifier when you need it.
// const fingerPrint = fpPromise
// .then(fp => fp.get())
// .then(result => {
//   // This is the visitor identifier:
//   const visitorId = result.visitorId
//   console.log(visitorId + ' first call')
//   return visitorId
// })


// const getFingerprint = async() => {
// const id = await fingerPrint;
// console.log(id + ' second call')
// return id
// }
// const config = getConfig();

const providerConfig = {
  domain: 'hunter-demo.auth0.com',
  clientId: 'vNLbkyDc70Hv9Cs86VnQe442ACOknnaN',
  // ...(config.audience ? { audience: config.audience } : null),
  audience: 'https://travel0.com/api',
  // fingerprint: getFingerprint(),
  redirectUri: window.location.origin,
  onRedirectCallback,
};

ReactDOM.render(
  <FpjsProvider
    loadOptions={{
      apiKey: 'eJCjdtCIXZVuVZlawI6Z'
    }}
  >
    <Auth0Provider {...providerConfig}>
      <App />
    </Auth0Provider>
  </FpjsProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
