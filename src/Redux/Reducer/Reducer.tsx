import { ActionTypes } from "../Action/Actiontype";


const initialState={
    users:[]
}

export const Reducer = (state = initialState,action:{type:string,payload:any},) => {

    console.log("state",state)
    switch (action?.type) {
        case ActionTypes.GET_USERS:
            
            return { ...state, users: action.payload };
            case ActionTypes.POST_USERS:
                return{...state, postUser:action.payload};
          
            default:
            return state;
    }

}