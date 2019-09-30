import React from "react";
import ReactDOM from "react-dom";

import 'semantic-ui-css/semantic.min.css'
import "./index.css";

import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import allReducers from './reducers';
import App from "./components/App";

const enhancer = compose(applyMiddleware(thunk, logger));

const store = createStore(allReducers, enhancer);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById("root"));
