import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import Axios from 'axios';
import Logout from './authenticate/Logout';
import JwtDecode from 'jwt-decode';



export default function AddPlan()
{

  const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useState(localStorage.getItem("token"));
  Axios.defaults.headers.common["Authorization"] = token;
  let decodedToken=JwtDecode( Axios.defaults.headers.common["Authorization"]);   // decoding the token
  const user=decodedToken.sub;


  let [plan, setplan] = useState({name: '',cost: '',description: '',image: '',serviceCenterRef:{email:user}})
  
  
    let handleChange = (e) => {
      
      let name = e.target.name;
      let value = e.target.value;
      plan[name] = value;
      setplan(plan);
      
    }
  
    let handleSubmit = (e)=>{
      e.preventDefault();
      const new_plan={...plan};
      console.log(new_plan);
  
     
    Axios.post('http://localhost:8080/plan/add',new_plan).then((response)=>{console.log(response)}).catch((error)=>{console.log(error)})
}

function GoBack(){
  navigate("/ServiceCenter",{
    state: {
       name: user
        }
      })
}
   
   
  return (
    <div>
<div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn btn-danger" type="button" onClick={Logout}>Logout</button>
        </div>


<form  class="was-validated" onSubmit={handleSubmit}>
  <div class="col-md-4">
    <label for="name" class="form-label">Enter Plan Name :</label>
    <input type="text" class="form-control" id="name" placeholder="Enter plan Name" name="name" onChange={handleChange} required/>
    <div class="valid-feedback">Valid.</div>
    <div class="invalid-feedback">Please fill out this field.</div>
  </div>
  <div class="col-md-4">
    <label for="cost" class="form-label">Enter Cost Of Plan :</label>
    <input type="number" class="form-control" id="cost" placeholder="Enter Cost of plan" name="cost" onChange={handleChange} required/>
    <div class="valid-feedback">Valid.</div>
    <div class="invalid-feedback">Please fill out this field.</div>
  </div>
  <div class="col-md-4">
    <label for="description" class="form-label">Enter description for plan:</label>
    <input type="text" class="form-control" id="description" placeholder="Enter description for plan" name="description" onChange={handleChange} required/>
    <div class="valid-feedback">Valid.</div>
    <div class="invalid-feedback">Please fill out this field.</div>
  </div>
  
  
  
  <button type="submit" class="btn btn-primary">Add Plan</button>
</form>



<div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn btn-danger" type="button" onClick={GoBack}>Back</button>
        </div>
        
    </div>
  )
}
