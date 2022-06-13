import { ActionTypes } from "./Actiontype";
import axios from "axios";
import TokenService from "../../Component/Tokenservice/TokenServices"
 

export const getusers=()=>{
    return async(dispatch:any)=>{
        await
    axios.get("http://localhost:3007/home",{ headers: { "x-access-token": TokenService.getAccessToken() } })
        .then((res:any)=>{console.log("res",res.data)
        dispatch({type:ActionTypes.GET_USERS, payload:res.data})
    })
        .catch((err:any)=> {console.log("rest",err.msg)})
    }
}


export const postusers=(values:any)=>{
    console.log("val",values)
    return async(dispatch:any)=>{
        await
    axios.post("http://localhost:3007/signup",values)
        .then((res:any)=>{console.log("resta",res)
        dispatch({type:ActionTypes.POST_USERS, payload:res.data})
        
        
    })
        .catch((err:any)=> {console.log("res",err.msg)})
    }
}

export const postloginusers=(values:any)=>{
    console.log("val",values)
    return async(dispatch:any)=>{
        await
    axios.post("http://localhost:3007/Login",values)
        .then((res:any)=>{console.log("restad",res.data)
        dispatch({type:ActionTypes.POST_LOGINUSERS, payload:res.data})
        TokenService.setAccessToken(res.data.accessToken)
        TokenService.setRefreshToken(res.data.refreshToken)
        
    })
        .catch((err:any)=> {console.log("res",err.msg)})
    }
}


export const deleteusers=(main:any)=>{
    console.log(main,"main")
    return async(dispatch:any)=>{
        await
    axios.delete(`http://localhost:3007/deleteuser/${main}`)
        .then((res:any)=>{console.log("resded",res.data)
        dispatch({type:ActionTypes.REMOVE_SELECTED_USERS,payload:res.data})
    })
        .catch((err:any)=> {console.log("rester",err.msg)})
    }
}

export const editusers = (use:any) => {

    return async (dispatch:any) => {
        await axios
            .put(`http://localhost:3007/sample/${use.id}`)

            .then(editData => {
                console.log("sama", editData)


            })
            .catch(err => {
                console.log("nan", err)
            })
    }
}



