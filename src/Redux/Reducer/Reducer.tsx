import { ActionTypes } from "../Action/Actiontype";


const initialState={
users:[]
}

export const Reducer = (state = initialState,action:{type:string,payload:any},) => {

    console.log("state",state)
    switch (action.type) {
        case ActionTypes.GET_USERS:
            console.log( action.payload.users.Data,"action.payload")

            let modern =  {...state, users: action.payload.users.Data}   
            console.log(modern,"modern")
            
        return modern;
       
            case ActionTypes.POST_USERS:
                return{...state, postUser:action.payload};
          
            default:
            return state;
    }

}