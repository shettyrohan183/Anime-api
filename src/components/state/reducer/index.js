import { combineReducers } from "redux";
import urlreducer from "./urlreducer";

const reducers = combineReducers({
    urls : urlreducer
})
export default reducers;