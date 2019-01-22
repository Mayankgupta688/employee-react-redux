import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from "./reducers";

import App from "./components/app";

var createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render((
        <Provider store={createStoreWithMiddleware(rootReducer)}>
            <App />
        </Provider>
    ), 
    document.getElementById("root")
);