import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './redux/reducers/rootReducer';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore} from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB-nGCQ1ksvNdWhLYTd8O17otMNOxiOvNQ",
  authDomain: "resume-builder-d5998.firebaseapp.com",
  projectId: "resume-builder-d5998",
  storageBucket: "resume-builder-d5998.appspot.com",
  messagingSenderId: "155207849132",
  appId: "1:155207849132:web:cccc461fab8600a41efb09"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const reduxStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),reduxFirestore(firebase)))

ReactDOM.render(
  <Provider store={reduxStore}>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={firebaseConfig}
      dispatch={reduxStore.dispatch}
      createFirestoreInstance={createFirestoreInstance}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
