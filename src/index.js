import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./CSS/main.css";
import { todoReducer } from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = JSON.parse(localStorage.getItem("todos"));

const store = createStore(
  todoReducer,
  initialState ? initialState : [],
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
