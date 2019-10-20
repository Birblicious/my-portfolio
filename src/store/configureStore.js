import { combineReducers, createStore, compose, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import firebaseReducer from "react-redux-firebase";
import { createFirestoreInstance, firestoreReducer } from "redux-firestore";

import * as Experience from "./experienceStore";

export default function configureStore(history, initialState) {
  const reducers = {
    Experience: Experience.reducer,
    Firebase: firebaseReducer,
    Firestore: firestoreReducer
  };

  const middleware = [thunk];

  const rootReducer = combineReducers({
    ...reducers
  });

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
  );
}
