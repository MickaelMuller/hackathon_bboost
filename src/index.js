import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import 'bootstrap/dist/css/bootstrap.min.css';
/* import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers';

const store = createStore(allReducers); */

ReactDOM.render(
 
    <App />,
  
  document.getElementById("root")
);

serviceWorker.unregister();
