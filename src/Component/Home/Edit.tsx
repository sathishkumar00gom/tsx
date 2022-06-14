import React, { useState,useEffect } from "react"
import {useFormik} from "formik";
import {useNavigate,useParams} from "react-router-dom"
import {useDispatch} from "react-redux"
import * as Yup from "yup";
import {Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import {getusers} from "../../Redux/Action/Action"


export interface Isstate{
    id:number;
    email:string;
    password:string;
}

const Edit = () => {
    const navigate=useNavigate()
    const dispatch:any=useDispatch()

    const [state,setState]=useState({
        id:"",
        email:"",
        password:""
    })

    const [formik,setFormik] = useState({
      
        id:state.id,
        email: state.email,
        password:state.password
    })
      

    
  


    let { id } = useParams()


    useEffect(()=>{
        axios.get(`http://localhost:3007/getusers/${id}`)
        .then((res)=>{console.log("me",res.data)
        setState(res.data)})
        .catch((err)=>err)
    },[])

    useEffect(() => {
        if (state) {
            setFormik(state)
        }
        console.log("erre=>", state)

    }, [state])


    const handleChange=(e:any)=>{
        setFormik({...formik,
        [e.target.name]:e.target.value})
    }


    const handleSubmit = () => {
        axios.put(`http://localhost:3008/users/${id}`, formik)
            .then(updates => {

                console.log("update", updates)})
                  
                    .catch((err: any) => {
                        console.log("err", err)

                    })

                    navigate("/home")
            }
          


    
    
 
     
  
    return (
      <>
        <h1 className="h1">Edit Form</h1>
  
        <div className="container">
          <Container>
          
            <Form >
           
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                className="input"
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="jane@formik.com"
                value={formik.email}
              />
             
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="input"
                onChange={handleChange}
                name="password"
                type="password"
                placeholder="password"
                value={formik.password}
              />
            
  
       
              <Button 
              className="mt-3"
               type="submit"
              
              onClick={handleSubmit}
               >
                Update
              </Button>
            </Form>
          </Container>
        </div>
      </>
    );
  };
  export default Edit;


