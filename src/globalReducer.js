import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

// screens
import { reducers as home } from "./screens/Home";
import { reducers as login } from "./screens/Login";

const combine = combineReducers({
    home, login,
})

const store = createStore(
    combine,
    applyMiddleware(thunk, logger)
);

export default store;