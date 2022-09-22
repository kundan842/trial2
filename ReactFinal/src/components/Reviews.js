import React from 'react'
import '../CSS/rev.css'

export default function Reviews() {
  return (
    <div>
{/*<div class="container-fluid px-3 px-sm-5 my-5 text-center">
    <h4 class="mb-5 font-weight-bold">What Our Customers Say</h4>
    <div class="owl-carousel owl-theme">
        <div class="item first prev">
            <div class="card border-0 py-3 px-4">
                <div class="row justify-content-center">
                    <img src="https://i.imgur.com/gazoShk.jpg" class="img-fluid profile-pic mb-4 mt-3" style={{width:`150px`,height:`150px`}}/>
                </div>
                <h6 class="mb-3 mt-2">Marielle Haag</h6>
                <p class="content mb-5 mx-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.</p>
            </div>
        </div>
        <div class="item show">
            <div class="card border-0 py-3 px-4">
                <div class="row justify-content-center">
                    <img src="https://i.imgur.com/oW8Wpwi.jpg" class="img-fluid profile-pic mb-4 mt-3" style={{width:`150px`,height:`150px`}}/>
                </div>
                <h6 class="mb-3 mt-2">Ximena Vegara</h6>
                <p class="content mb-5 mx-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.</p>
            </div>
        </div>
        <div class="item next">
            <div class="card border-0 py-3 px-4">
                <div class="row justify-content-center">
                    <img src="https://i.imgur.com/ndQx2Rg.jpg" class="img-fluid profile-pic mb-4 mt-3" style={{width:`150px`,height:`150px`}}/>
                </div>
                <h6 class="mb-3 mt-2">John Paul</h6>
                <p class="content mb-5 mx-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.</p>
            </div>
        </div>
        <div class="item last">
            <div class="card border-0 py-3 px-4">
                <div class="row justify-content-center">
                    <img src="https://i.imgur.com/T5aOhwh.jpg" class="img-fluid profile-pic mb-4 mt-3" style={{width:`150px`,height:`150px`}}/>
                </div>
                <h6 class="mb-3 mt-2">William Doe</h6>
                <p class="content mb-5 mx-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.</p>
            </div>
        </div>
    </div>
  </div>*/}
  <section class="home-testimonial">
    <div class="container-fluid">
        <div class="row d-flex justify-content-center testimonial-pos">
            <div class="col-md-12 pt-4 d-flex justify-content-center">
                <h3>Testimonials</h3>
            </div>
            <div class="col-md-12 d-flex justify-content-center">
                <h2>Explore the customers experience</h2>
            </div>
        </div>
        <section class="home-testimonial-bottom">
            <div class="container testimonial-inner">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-4 style-3">
                        <div class="tour-item ">
                            <div class="tour-desc bg-white">
                                <div class="tour-text color-grey-3 text-center">&ldquo;Great service really loved it.&rdquo;</div>
                                <div class="d-flex justify-content-center pt-2 pb-2"><img class="tm-people" src={require("../images/img_avatar-png-2.png")} alt=""/></div>
                                <div class="link-name d-flex justify-content-center">Katrina Kaif</div>
                                <div class="link-position d-flex justify-content-center">Customer</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 style-3">
                        <div class="tour-item ">
                            <div class="tour-desc bg-white">
                                <div class="tour-text color-grey-3 text-center">&ldquo;Mast applicaion hai.&rdquo;</div>
                                <div class="d-flex justify-content-center pt-2 pb-2"><img class="tm-people" src={require("../images/img_avatar-png-2.png")} alt=""/></div>
                                <div class="link-name d-flex justify-content-center">Priyanka Chopra</div>
                                <div class="link-position d-flex justify-content-center">Service Center Manager</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 style-3">
                        <div class="tour-item ">
                            <div class="tour-desc bg-white">
                                <div class="tour-text color-grey-3 text-center">&ldquo;Easy to book servicing.&rdquo;</div>
                                <div class="d-flex justify-content-center pt-2 pb-2"><img class="tm-people" src={require("../images/img_avatar-png-2.png")} alt=""/></div>
                                <div class="link-name d-flex justify-content-center">Kareena Kapoor</div>
                                <div class="link-position d-flex justify-content-center">Customer</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </section>
    </div>    
</section>

    </div>
  )
}
