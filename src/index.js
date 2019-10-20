import React from "react";
import ReactDOM from "react-dom";
import { Waypoint } from "react-waypoint";

//Bootstrap CSS JS & JQ
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

import "./navigation/navbarstyle";

//firebase
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";

//Store
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

// Components
import App from "./app/app";

const firebaseConfig = {
  apiKey: "AIzaSyA3T0Ko0IqEo1UYAL1AgBpkEGOkALzZVZ4",
  authDomain: "ardaburakekmekci.firebaseapp.com",
  databaseURL: "https://ardaburakekmekci.firebaseio.com",
  projectId: "ardaburakekmekci",
  storageBucket: "ardaburakekmekci.appspot.com",
  messagingSenderId: "102264938202",
  appId: "1:102264938202:web:1596e2b276fb87a4abcfe3",
  measurementId: "G-8348CB7KRP"
};

const rrfConfig = {
  userProfile: "users"
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

firebase.initializeApp(firebaseConfig);
firebase.firestore(); // <- needed if using firestore

const initialState = window.initialReduxState;
const store = configureStore(initialState); //initiate store here

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <div>
        <App />
      </div>
    </ReactReduxFirebaseProvider>
  </Provider>,
  rootElement
);
