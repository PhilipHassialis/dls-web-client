import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./store/reducer";
import thunk from "redux-thunk";

const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(reducer, allStoreEnhancers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
