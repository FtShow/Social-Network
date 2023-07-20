import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";


import {store} from "./Redux/Redux-Store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";


export let rerenderEntreTree = () => {

    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    );
}

rerenderEntreTree()
