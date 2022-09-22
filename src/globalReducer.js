import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

// screens
import { reducers as home } from "./screens/Home";
import { reducers as login } from "./screens/Login";
import { reducers as router } from "./Router";

const combine = combineReducers({
    router, home, login,
})

const store = createStore(
    combine,
    applyMiddleware(thunk, logger)
);

export default store;