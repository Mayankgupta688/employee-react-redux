import { combineReducers } from "redux";
import movies from "./movies_reducer";

export const rootReducer = combineReducers({
    movies: movies
});

