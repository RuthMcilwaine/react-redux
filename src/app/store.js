import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { todos } from "../components/reducers.js";

const reducers = {
  todos: todos,
};

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers(reducers);
const perisitedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: perisitedReducer,
});

export default store;

//To ensure that the state of our app is kept through a browser refresh, we'll be using a package called redux persist.
//wrap our rootReducer using the persistReducer
//'persistConfig' is an object that tells Redux Persist how to save and where to store our app's data
//imported 'storage' defaults to local storage on the web
//'stateReconciler' property that we set to auto merge to level two. The autoMergeLevel2 tells Redux Persist how to reconcile(*consistent) the initial and stored states of our app as in how deep should it go when doing so.
