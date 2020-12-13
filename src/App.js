import React from "react";
import MainNavigation from "navigation/MainNavigation";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import allReducers from "reducers";
import logger from "redux-logger";

const store = createStore(allReducers, applyMiddleware(logger, thunk));

const App = () => {
    return (
        <Provider store={store}>
            <MainNavigation/>
        </Provider>
    );
};


export default App;
