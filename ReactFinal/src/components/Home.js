import React from 'react'
import { Link, Outlet } from "react-router-dom"
import bike from '../images/bssb.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../CSS/car.css'
import '../CSS/footer.css'


export default function Home() {
  
  
  

  return (
    <div>
<img style={{width: "1500px", height:"300px"}} src={bike} alt="this is bike image"/>

    
{/*<nav class="navbar sticky-top navbar-light navbar-expand-lg"> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"> <span class="navbar-toggler-icon"></span> </button>
<div class="collapse navbar-collapse d-flex justify-content-center" id="collapsibleNavbar">
    <ul class="navbar-nav">
        <li class="nav-item active"><a class="nav-link" href="#"><Link to="/home" >Home</Link></a></li>
        <li class="nav-item"><a class="nav-link" href="#"><Link to="/aboutus" >About us</Link></a></li>
        <li class="nav-item"><a class="nav-link" href="#"><Link to="/login" >Login</Link></a></li>
        <li class="nav-item"><a class="nav-link" href="#"><Link to="/registration" >Registration</Link></a></li>
        <li class="nav-item"><a class="nav-link" href="#"><Link to="/review" >Review</Link></a></li>
    </ul>
</div>
  </nav>*/}


  <nav class="navbar navbar-expand-lg navbar-red navbar-dark">
        <div class="wrapper">
          
        </div>
   <div class="container-fluid all-show">
    <a class="navbar-brand" >BikeServiceSlotBooking<i class="fa fa-codepen"></i></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/home" >Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/aboutus" >About us</Link>
        </li>

        <li class="nav-item">
          <Link to="/login" >Login</Link>
        </li>

        <li class="nav-item">
          <Link to="/registration" >Registration</Link>
        </li>

        <li class="nav-item">
          <Link to="/review" >Review</Link>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fa fa-search"></i></a>
        </li>
        
        
      </ul>
      <div class="d-flex flex-column sim">

        <span>Book your slot today!!</span>
        <small class="text-primary">smile and ride</small>
        
      </div>
    </div>
  </div>
</nav>







{/*<div class="mt-4 p-5 rounded text-bg-dark">  </div>*/}
          <div className="item">
          <Outlet>
          
            </Outlet>  {/* the component will be rendered here*/}
            </div>


            <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row"><div class="col-md-3 item">
    <h3>Services</h3>
    <ul>
        <li><a href="#">Web design</a></li>
        <li><a href="#">Development</a></li>
        <li><a href="#">Hosting</a></li>
    </ul>
</div><div class="col-md-3 item">
    <h3>Services</h3>
    <ul>
        <li><a href="#">Service Centers</a></li>
        <li><a href="#">Bike Owners</a></li>
        <li><a href="#">Vehicles</a></li>
    </ul>
</div><div class="col-md-3 item">
    <h3>About</h3>
    <ul>
        <li><a href="#">Company</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Careers</a></li>
    </ul>
</div><div class="col-md-3 item text">
    <h3>BikeServiceSlotBooking.com</h3>
    <p>Smile and Ride</p>
</div>
                    <div class="col item social"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-youtube"></i></a><a href="#"><i class="fa fa-instagram"></i></a><a href="#"><i class="fa fa-google"></i></a></div>
                </div>
                <p class="copyright">BikeServiceSlotBooking.com &copy; 2020</p>
            </div>
        </footer>
    </div>
                
    </div>
  )
}
