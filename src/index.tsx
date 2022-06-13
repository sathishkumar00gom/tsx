import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux"
import reportWebVitals from './reportWebVitals';
import store from "./Redux/Store/Store";


import axios from "axios";
import TokenService from "../src/Component/Tokenservice/TokenServices";
axios.create({
  baseURL: "https://localhost:3007",
  headers: {
    "Content-Type": "application/json",
  },
})
axios.interceptors.request.use((request:any) => {
        console.log("req",request)
  const token = TokenService.getAccessToken()
  request.headers = { "x-access-token": token, "Content-Type": "application/json" }
  return request
})

axios.interceptors.response.use(
  (res) => {
    console.log("hai", res)
    return res;
  },
  async (err:any) => {
    console.log("error", err)
    const originalConfig = err.config;
    if (err.response.status === 401) {
      console.log("error happended after 1 minutes camed ")
      if (err.response.data.message === "Unauthorized! Access Token was expired!") {
        try {
          console.log("okay", err.response.data.message)
          let refresh = TokenService.getRefreshToken()
          console.log("1 hour refresh", refresh)
          const res = await axios.post("http://localhost:3007/refresh", {
            "x-access-token": refresh,
            'content-type': 'application/json'
          });
          console.log("response===>", res?.data?.data?.token)
          TokenService.UpdateAccessToken(res?.data?.data?.token)
          axios.defaults.headers.common["x-access-token"] = res?.data?.data?.token;
          return axios(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(err);
  }
);



ReactDOM.render(
 <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
