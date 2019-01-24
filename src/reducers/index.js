import { combineReducers } from "redux";
import movies from "./movies_reducer";
import employees from "./employees_reducer";

export const rootReducer = combineReducers({
    movies: movies,
    employees: employees
});

