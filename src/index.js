import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {UserContextProvider} from "./userContext";

import './styles.css'

ReactDOM.render(
  <UserContextProvider >
    <App />
  </UserContextProvider>,
  document.getElementById("root")
);
