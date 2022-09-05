import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.scss";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <CssBaseline />
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
