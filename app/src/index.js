import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import adamite, {
  AuthPlugin,
  DatabasePlugin,
  FunctionsPlugin,
} from "@adamite/sdk";

adamite()
  .use(AuthPlugin)
  .use(DatabasePlugin)
  .use(FunctionsPlugin)
  .initializeApp({
    url: process.env.REACT_APP_API_URL,
    apiKey: process.env.REACT_APP_API_KEY,
  });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
