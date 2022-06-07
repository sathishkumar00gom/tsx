import React,{useEffect} from "react";
import { Button,Card } from "react-bootstrap";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import {GrInstagram} from "react-icons/gr";
import {AiFillTwitterCircle} from "react-icons/ai" 
import {BsFacebook} from "react-icons/bs";
import "./homeimg.css";
import {useSelector,useDispatch} from "react-redux";
import {getusers,deleteusers} from "./../../Redux/Action/Action"
import { useNavigate } from "react-router-dom";

const Home=()=>{
    const dispatch:any= useDispatch()
  const navigate=useNavigate()

  const use:any = useSelector((state:any)=>state.allusers.users)


  const handleSubmit=(main:any)=>{
    dispatch(deleteusers(main))
  }
  const handleEdit=(use:any)=>{
    navigate(`/Edit/${use}`)
  }

  useEffect(() => {
    dispatch(getusers())
  }, [dispatch])
  return (
    <>
    <div style={{ backgroundColor: "blue", height: "500px", width: "100vw" }}>
      <div>
        <nav>
          <ul className="d-flex ms-5" style={{ color: "white" }}>
            <li className="p-4">Solutions </li>
            <li className="p-4">About us </li>
            <li className="p-4">Clients </li>
            <li className="p-4">News&Events </li>
            <li className="p-4">Contact us </li>

            <Button
              className="btn-light mt-3"
              style={{ height: "40px", width: "100px", marginLeft: "450px" }}
              type="submit"
            >
              Demo
            </Button>
            <span className="mt-4" style={{ marginLeft: "50px" }}>
              <IoIosArrowDropdownCircle />
              EN
            </span>
          </ul>
        </nav>{" "}
      </div>
      <div className="d-flex">
        {" "}
        <div className="" style={{ color: "white", marginLeft: "100px" }}>
          <p className="mt-5">What we do</p>
          <h1>Customer Details</h1>
          <Button
            className="btn-light mt-2"
            style={{ height: "50px", width: "200px" }}
            type="submit"
          >
            Learn More <BsFillArrowRightCircleFill />
          </Button>
          <div className="ms-3 mt-4 d-block" style={{width:"200px", height:"200px"}}
          >
            <div className="ms-2"> <BsFacebook/></div>  <div className="ms-2"> <AiFillTwitterCircle/></div><div className="ms-2"><GrInstagram/></div></div>
        </div>
        <div>
          <img
            className="homeimg"
            style={{ width: "400px", height: "400px", marginLeft: "300px" }}
            src="https://thumbs.dreamstime.com/b/basic-rgb-166573192.jpg"
            alt="users details"
          />
        </div>
      </div>
    </div>
    <div className="row carousels mt-5 ms-2 d-flex ">
      
      {/* <Carousel> */}
      { use?.map((main:any)=>{
     return(
       <>
     <Card className="ms-4 mt-5" style={{width:"300px", height:"400px", backgroundColor:"white", boxShadow:"10px 20px 50px grey", alignItems:"center"}}>
       <form style={{display:"block", paddingLeft:"30px"}}>
         <Button className="mt-5" style={{justifyContent:"center"}}>email</Button>
        <div className="mt-3"  >{main.email}</div> 
         {/* <Button className="mt-2" >password</Button>
         <div className="mt-2">{main.password}</div> */}
         <Button className="mt-2" >{main.id}</Button>
         </form>
         <Button className="mt-3 btn-warning" onClick={()=>handleEdit(main.id)}>Edit user</Button>
         <Button className="mt-3 btn-danger" onClick={()=>handleSubmit(main.id)}>Delete user</Button>
         </Card>
         
         </>
      )})
    }
    {/* </Carousel> */}
    </div>
    </>
  );
}
export default Home;
