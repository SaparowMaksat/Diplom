import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { createStore } from "./app/store/createStore";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

const store = createStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
