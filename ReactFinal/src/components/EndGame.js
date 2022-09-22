import React, { useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from "react-router-dom";
import Logout from './authenticate/Logout'
import '../CSS/invoice.css'
import JwtDecode from 'jwt-decode'


export default function EndGame() {
    const navigate = useNavigate();
    const location = useLocation();
    const [obj,setObj]=useState(location.state.finalObj);
    const [onSuccess,setOnSuccess]=useState("");
    const [isBooked,setIsBooked]=useState(false);
    const [bookingId,setBookingId]=useState('');
    const [isReview,setIsReview]=useState(false);

    const [token, setToken] = useState(localStorage.getItem("token"));
  axios.defaults.headers.common["Authorization"] = token;
  let decodedToken=JwtDecode( axios.defaults.headers.common["Authorization"]);   // decoding the token
  const user=decodedToken.sub;
    

        function book(){
                console.log(obj);
                axios.post(`http://localhost:8080/booking/newbooking`,obj).then((response)=>{console.log(response)
                if(response.status==200)
                {
                    setIsReview(true);
                    setOnSuccess("Congrats Slot Booked")
                }
                }).catch((error)=>{console.log(error)})

        }

        function getbookingid(){

            axios.get(`http://localhost:8080/booking/getBookingId/${user}`).then((response)=>{console.log(response)
                if(response.data>0)
                {
                    setIsBooked(true);
                    setBookingId(response.data);
                }
                }).catch((error)=>{console.log(error)})

        }


  return (
    <div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn btn-danger" type="button" onClick={Logout}>Logout</button>
        </div>
       
        <div class="container">

<div class="page-header">
    <h1></h1>
</div>
<div class="container">
    <div class="row">
        <div class="col-md-6 col-md-offset-3 body-main">
            <div class="col-md-12">
               <div class="row">
                    <div class="col-md-4" >
                        <img class="img" style={{width:`150px`,height:`140px`}} alt="Invoce Template" src={require("../images/invoice.jpg")} />
                    </div>
                    <div class="col-md-8 text-right">
                        <h4 style={{color: `#F81D2D`}}><strong> {location.state.finalObj.customer.email}</strong></h4>
                        <p>221 ,Baker Street</p>
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h2>INVOICE</h2>
                        <h5>04854654101</h5>
                    </div>
                </div>
                <br />
                <div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th><h5>Description</h5></th>
                                <th><h5>#####</h5></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="col-md-9">vehicleRegNo:</td>
                                <td class="col-md-3"><i class="fas fa-rupee-sign" area-hidden="true"></i> {location.state.finalObj.vehicleRegNo} </td>
                            </tr>
                            <tr>
                                <td class="col-md-9"> modelNo:</td>
                                <td class="col-md-3"><i class="fas fa-rupee-sign" area-hidden="true"></i>{location.state.finalObj.modelNo} </td>
                            </tr>
                            <tr>
                                <td class="col-md-9">totalCost:</td>
                                <td class="col-md-3"><i class="fas fa-rupee-sign" area-hidden="true"></i> {location.state.finalObj.totalCost} </td>
                            </tr>
                            <tr>
                                <td class="col-md-9"> planName</td>
                                <td class="col-md-3"><i class="fas fa-rupee-sign" area-hidden="true"></i> {location.state.finalObj.planName} </td>
                            </tr>
                            <tr>
                                <td class="col-md-9"> serviceCenterref</td>
                                <td class="col-md-3"><i class="fas fa-rupee-sign" area-hidden="true"></i> {location.state.finalObj.serviceCenterref.regNo} </td>
                            </tr>
                            <tr>
                                <td class="col-md-9"> bookingDatef</td>
                                <td class="col-md-3"><i class="fas fa-rupee-sign" area-hidden="true"></i> {location.state.finalObj.bookingDate} </td>
                            </tr>
                            <tr style={{color: `#F81D2D`}}>
                                <td class="text-right"><h4><strong>Total:</strong></h4></td>
                                <td class="text-left"><h4><strong><i class="fas fa-rupee-sign" area-hidden="true"></i>{location.state.finalObj.totalCost} </strong></h4></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <div class="col-md-12">
                        <p><b>Date :</b>{location.state.finalObj.bookingDate}</p>
                        <br />
                        <p><b>Signature</b></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

      <div class="d-grid gap-2 col-6 mx-auto">
  <button type="button" class="btn btn-info"  onClick={book}>Book Slot</button>
</div>

        <h1>{onSuccess}</h1>
        {isBooked && <div class="d-grid gap-2 col-6 mx-auto">

            
 {} <button type="button" class="btn btn-info" onClick={getbookingid}>Add Service Center</button>
</div>}

{isReview && <AddReview bookingid={bookingId}></AddReview>}


</div>
  )
}


export function AddReview(props){

    return(
        <div>
            ADd review
        </div>
    )
}
