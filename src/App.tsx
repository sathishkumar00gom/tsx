import React, { useEffect } from 'react';
import './App.css';
import Registration from "./Component/Registration/Registration";
import Login from "./Component/Login/Login";
import Home from "./Component/Home/Home";
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";
import Edit from "./Component/Home/Edit";
import { getusers, postusers } from './Redux/Action/Action';
import { useDispatch, useSelector } from 'react-redux';


// export function PrivateRoute(children:any)  {

  
  
  
//   return (
//     <>
//       { 
//         ? {children}
//         : <Navigate to="/login" />}
//     </>
//   );
// }

function App() {
  return (
    
      <Router><Routes><Route path='/' element={<Registration/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path="/Edit/:id" element={<Edit/>}/></Routes></Router>
     

  );
}

export default App;
