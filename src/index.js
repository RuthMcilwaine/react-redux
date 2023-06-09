//import { increment, incrementAsync, incrementIfOdd } from "./components/thunks";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./app/store";
import App from "./App.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

// store.dispatch(increment());
// store.dispatch(incrementAsync());
// store.dispatch(incrementIfOdd());
