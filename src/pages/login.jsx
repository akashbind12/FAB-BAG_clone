import "../css/login.css"

import { FaFacebookF,FaGoogle } from 'react-icons/fa';
import {useDispatch, useSelector} from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";

export const Login=()=>{


  const [userID,setUserId]=useState("");
  const [EMail,setEmail]=useState("");
    const [form,setform]=useState({
        email:"",
        password:""
  
      });

      function handleChange(e){
        const {id,value}=e.target;
        setform({
           ...form,
           [id]:value
       })
      if(e.target.id=="email"){
          setEmail(e.target.value);
      }
       }
   
   
   
      async function handleSubmit(e){
      e.preventDefault();
    const data= await fetch("https://cryptic-ocean-94076.herokuapp.com/login",{
       method:"POST",
       headers:{
           "content-type":"application/json"
       },
       body:JSON.stringify(form)
   }).then(d=>d.json());
console.log(data.login._id);

   
   
   if(!data.token){
   alert("Wrong Email or Password");
   }else{
       alert("Login Successful");
       navigate("/",{replace:true});
   }

   dispatch(addEmail(EMail));
   dispatch(addUserId(data.login._id));
       } 


return (<div>
    <div className="Logincontainer">
  <p className="loginhead">Sign In</p>
        <form onSubmit={handleSubmit}>
                <div className="facebook" >
                    <span className="NM">Sign in with Facebook</span>
                    <span className="Sbl1"><FaFacebookF style={{
                        width:"100%",
                        fontSize:"30px",
                    }}></FaFacebookF></span> 
                </div>
                <div className="google" id="hower">
                    <span className="NM">Sign in with Google </span>
                    <span className="Sbl2"><FaGoogle style={{
                        width:"100%",
                        fontSize:"30px",
                    }}></FaGoogle></span> 
                </div>
                <div className="NMBlock">
                    <div>Your Email Address</div>
                    <div>*</div>
                </div>
                <input id="email" className="RegisterEmail"  onChange={handleChange} type="email" placeholder="Enter Email" required/>
                <div className="NMBlock">
                    <div>Your Password</div>
                    <div>*</div>
                </div>
                <input className="LoginPassword" onChange={handleChange} id="password" type="password" placeholder="Password" required/>
                <div className="RnF">
                    <div className="R">* Required Fields</div>
                    <div>Forgot your password?</div>
                </div> 
                <div className="SU" >
                    <input className="submitsignin" type="submit" value="Sign in"/>
                </div>
                <hr/>
            </form>
           
            <div className="SI" >
              <Link to="/signup"> <button  className="submitsignup" > Create an Account</button> </Link>
            </div>
            </div>
</div>)
}