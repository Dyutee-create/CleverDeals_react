import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
//import { configureStore } from '@reduxjs/toolkit';
import promise from "redux-promise";
import rootReducer from "./Redux/index";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import * as serviceWorker from './serviceWorker';
import App from "./App"
import './index.css';


//middleware settings
// To resolve promise to store we use apply
const composePlugin = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const store = createStore(rootReducer, composePlugin(applyMiddleware(promise, thunk, logger)));
createStoreWithMiddleware(rootReducer);

// ReactDOM.render(<React.StrictMode><Provider store = {store}><App /></Provider> </React.StrictMode> , document.getElementById('root'));



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
   <Provider store = {store}><App /></Provider>
  </React.StrictMode>
)

serviceWorker.unregister();
