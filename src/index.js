import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './redux/reducers/rootReducer';

const reduxStore = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
