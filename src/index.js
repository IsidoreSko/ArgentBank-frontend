import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Redux:
import store from "./Redux/Store";
import { Provider } from "react-redux";

// import { createStore } from "redux";
// import userReducer from "./userReducer";
// const store = createStore(userReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
