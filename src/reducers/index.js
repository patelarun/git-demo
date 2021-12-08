import { combineReducers } from "redux";
import authentication from "./authentication";
import records from "./records";

export default combineReducers({
    authentication,
    records,
});
