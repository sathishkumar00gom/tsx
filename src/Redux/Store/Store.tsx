import {applyMiddleware,createStore} from "redux";
import Combinereducer from "../Reducer/CombineReducer"
import  ThunkMiddleware  from "redux-thunk";

const middleware=[ThunkMiddleware];
const store=createStore(Combinereducer,(applyMiddleware(...middleware)));

export default store;