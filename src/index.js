import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./styles/setting.css";
import "./styles/base.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorkerRegistration.register();
