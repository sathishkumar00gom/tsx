import { ActionTypes } from "./Actiontype";
import axios from "axios";
import TokenService from "../../Component/Tokenservice/TokenServices"
 

export const getusers=()=>{
    return async(dispatch:any)=>{
        await
    axios.get("http://localhost:3008/login")
        .then((res:any)=>{console.log("res",res.data)
        dispatch({type:ActionTypes.GET_USERS, payload:res.data})
        console.log("d", res.data.accessToken)
        TokenService.setAccessToken(res.data.accessToken)
        TokenService.setRefreshToken(res.data.refreshToken)
        
    })
        .catch((err:any)=> {console.log("res",err.msg)})
    }
}

export const postusers=(values:any)=>{
    console.log("val",values)
    return async(dispatch:any)=>{
        await
    axios.post("http://localhost:3008/signup",values)
        .then((res:any)=>{console.log("resta",res)
        dispatch({type:ActionTypes.POST_USERS, payload:values})
        
    })
        .catch((err:any)=> {console.log("res",err.msg)})
    }
}

export const deleteusers=(main:any)=>{
   
    return async(dispatch:any)=>{
        await
    axios.delete(`http://localhost:3008/Users/${main}`)
        .then((deleteuser:any)=>{console.log("resded",deleteuser)
        
    })
        .catch((err:any)=> {console.log("rester",err.msg)})
    }
}

export const editusers = (use:any) => {

    return async (dispatch:any) => {
        await axios
            .put(`http://localhost:3008/Users/${use.id}`)

            .then(editData => {
                console.log("sama", editData)


            })
            .catch(err => {
                console.log("nan", err)
            })
    }
}



