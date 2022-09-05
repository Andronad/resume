import { combineReducers } from "redux";
import { themeReducer } from "./themeReducer";
import todoReducer from "./todoReducer";
import xoReducer from "./xoReducer";

export const rootReducer = combineReducers({
    theme: themeReducer,
    todo: todoReducer,
    xo: xoReducer,
});
