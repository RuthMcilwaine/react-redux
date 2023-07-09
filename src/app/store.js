import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  todos: todosReducer,
});

const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const customMiddleware = getDefaultMiddleware().concat(...middleware);
    return customMiddleware;
  },
});

export default store;

//the state of the app is stored after a browser refresh, use redux persist.
//wrap the rootReducer using the persistReducer
//'persistConfig' is an object that tells Redux Persist how to save and where to store our app's data
//imported 'storage' defaults to local storage on the web
//'stateReconciler' property that we set to auto merge to level two. The autoMergeLevel2 tells Redux Persist how to reconcile(*consistent) the initial and stored states of our app as in how deep should it go when doing so.
