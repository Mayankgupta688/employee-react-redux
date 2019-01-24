import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from "./reducers";
import thunk from "redux-thunk";

import { loadEmployeeData, loadMoviesData} from "./actions/index";

import App from "./components/app";

var createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
var store = createStoreWithMiddleware(rootReducer);

store.dispatch(loadEmployeeData());
store.dispatch(loadMoviesData());

ReactDOM.render((
        <Provider store={store}>
            <App />
        </Provider>
    ), 
    document.getElementById("root")
);