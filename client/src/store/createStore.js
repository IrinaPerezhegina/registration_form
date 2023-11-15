/** @format */

import {
	createStore,
	combineReducers,
	applyMiddleware,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./user";

const rootReducer = combineReducers({
	user: userReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
