import { combineReducers } from "redux";
import { Reducer } from "./Reducer";


const combineReducer=combineReducers({
    allusers:Reducer
})

export default combineReducer;