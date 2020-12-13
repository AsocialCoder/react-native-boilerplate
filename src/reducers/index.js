
import {combineReducers} from "redux";
import imageReducer from "./imageReducer";

const allReducers = combineReducers({
    images: imageReducer,
});

export default allReducers;