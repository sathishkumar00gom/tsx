import React from "react";
import { ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import {Form, Button, Container } from "react-bootstrap";
import "./Registration.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postusers } from "../../Redux/Action/Action";

const Registration = () => {
  const navigate=useNavigate()
  const dispatch:any=useDispatch()


  
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password:Yup.string().required('Required'),
      confirmpassword:Yup.string().required('Required')

    }),
    onSubmit: (values: any) => {
   
      console.log("testing forvalues",values)
      dispatch( postusers(values))
      navigate("/login")
    

    },
  });

  return (
    <>
      <h1 className="h1">Registration Form</h1>

      <div className="container">
        <Container>
        
          <Form onSubmit={formik.handleSubmit}>
            <Form.Label className="mt-5">First Name</Form.Label>
            <Form.Control
              className="input"
              onChange={formik.handleChange}
              name="firstName"
              type="text"
              placeholder="Jane"
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="firstname">{formik.errors.firstName}</div>
            ) : null}
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              className="input"
              onChange={formik.handleChange}
              name="lastName"
              type="text"
              placeholder="Doe"
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="lastname">{formik.errors.lastName}</div>
            ) : null}
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              className="input"
              onChange={formik.handleChange}
              name="email"
              type="email"
              placeholder="jane@formik.com"
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="email">{formik.errors.email}</div>
            ) : null}
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="input"
              onChange={formik.handleChange}
              name="password"
              type="password"
              placeholder="password"
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="password">{formik.errors.password}</div>
            ) : null}

            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              className="input"
              onChange={formik.handleChange}
              name="confirmpassword"
              type="password"
              placeholder="confirmpassword"
              value={formik.values.confirmpassword}
            />
            {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
              <div className="confirmpassword ">
                {formik.errors.confirmpassword}
              </div>
            ) : null}

            <Button 
            className="mt-3"
             type="submit"
            
            
             >
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    </>
  );
};
export default Registration;
