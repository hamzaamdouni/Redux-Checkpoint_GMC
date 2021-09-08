import { combineReducers } from "redux";
import todoReducer from "./todo";

// creation root
const rootReducer = combineReducers({todoReducer});

export default rootReducer;