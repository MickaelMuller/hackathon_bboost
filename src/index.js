import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

ReactDOM.render(
  <BrowserRouter><ScrollToTop>
    <App />
  </ScrollToTop></BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
