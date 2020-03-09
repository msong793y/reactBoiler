import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import mainReducer from "./root_reducer";

const configureStore = (preloadedState = {}) =>(
  createStore(
    mainReducer, 
    preloadedState, 
    applyMiddleware(thunk,logger)));

export default configureStore;
