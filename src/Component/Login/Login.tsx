import React,{useEffect, useState} from 'react';
import { Container,Form,Button } from 'react-bootstrap';
import {  useFormik } from 'formik';
import "./Login.css";
import { postloginusers} from '../../Redux/Action/Action';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';



export default function Login() {

  const [postChecker,setPostChecker]=useState({
    email:"",
    password:""
  })
  const navigate=useNavigate()
  const dispatch:any=useDispatch()

  const postValue:any = useSelector((state:any)=>state.allusers.postUser)
  
 


  

  const formik = useFormik({
    initialValues:{
    
      email: '',
      password:"",
      
     
    },
    validationSchema: Yup.object({
    
      email: Yup.string().email('Invalid email address').required('Required'),
      password:Yup.string().required('Required'),
      
    }),
    onSubmit:(values:any) => {
     console.log("testingSubmit")
      console.log("vale",values)
      dispatch(postloginusers(values))
      navigate("/Home")
      //        )
      // console.log("vales",getData)
       
      // function isChecking(data:any) {
      //   return data.email === values.email
      // }
      
      // let verifydata = getData.find(isChecking)
      // if(verifydata){
      //        
      // }
        
      }
    })

  


  return (
    <>
    
      <div className='d-flex mt-5 ms-5 mb-5 me-5' style={{width:"1200px", height:"500px", backgroundColor:"white", boxShadow:"10px 20px 50px grey", borderRadius:"50px"}}>
      <div className='col-sm-6'>
<img className='img' style={{width:"500px",height:"500px"}} src='https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000' alt='login'/>

      </div>
      <div className="col-sm-6 " style={{padding:"50px" , backgroundColor:"blue"}}>
        <div className='mt-5' style={{backgroundColor:"white", width:"500px", height:"300px", borderRadius:"50px", boxShadow:"10px 20px 50px grey"}}>      <Form onSubmit={formik.handleSubmit}>
         
 <Form.Label className='mt-5 ms-5'>Email Address</Form.Label>
          <Form.Control className='inputs'
            onChange={formik.handleChange}
            name="email"
            type="email"
            placeholder="jane@formik.com"
            value={formik.values.email}
          />
        {formik.touched.email && formik.errors.email ?(<div className='email'>{formik.errors.email}</div>):null}
           <Form.Label className=' ms-5'>Password</Form.Label>
          <Form.Control className='inputs'
            onChange={formik.handleChange}
            name="password"
            type="password"
            placeholder="password"
            value={formik.values.password}
          />{formik.touched.password && formik.errors.password?(<div className='password'>{formik.errors.password}</div>):null}
           
         


        

          <Button className='mt-3' style={{marginLeft:"200px"}} 
           type="submit">Submit</Button>
        </Form>
      
        </div>

      </div>
      </div>

  
    </>
  )
}
function isChecking() {
 
}

