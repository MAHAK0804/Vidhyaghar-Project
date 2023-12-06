import React from 'react';
import '../About/About.css';
import about from '../assets/educatio.png';
import about1 from '../assets/educatio1.png';
import owner from '../assets/mahak.jpeg';
import about2 from '../assets/educatio3.png';
import { Link } from 'react-router-dom';



export default function About() {
  return (
    <>
      <div class='container-fluid'>

        <div className='about'>
          <img src={about} class="img-fluid" alt="about" />
        </div>
      </div>
      <br />
      <br />

      <div class='container'>
        <div class="row">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <div class="card">
              <div class="card-body">
                <br />

                <h5 class="card-title">Welcome to Vidhyaghar</h5>
                <br />
                <p class="card-text">Vidyaghar is a novel idea for a single teacher school that aims to provide
                  free education to all children and get them ready for secondary school by putting them in formal
                  education settings. .
                  As a result, young, innocent children who may grow up to be engineers, physicians, warriors, or technicians
                  begin to lose interest in learning.</p>

              </div>
            </div>
          </div>
          <div class="col-sm-6">

            <img src={about1} width='540px' height='300px' class="img-fluid" alt="about1" />

          </div>
        </div>
      </div>
    
      <br />
      <br />
      <hr />
      <br />
      <br />
     
     
<h1>OWNER</h1>
<br />
      <br />
      <br />
      <div class='container'>
        <div class="row">
        <div class="col-sm-4">

<img src={owner}  class="img-fluid" alt="OWNER" />

</div>
          <div class="col-sm-8 mb-3 mb-sm-0">

          <div class="card">
              <div class="card-body">
                <br />

                <h5 class="card-title">MAHAK</h5>
                <br />
                <p class="card-text"> inspired by her teacher , has conceived and 
                initiated projects in the field of basic and vocational education that are now ready with strong wings to
                 take forward and build additional landmarks over the next decade in order to be able to not 
                 only meet the future challenges but also shape the course of the destiny of the people and the region where
                  these are operating in. She believes true empowerment is achieved only through education.
All these education endeavours in India are leading convergence of beauty
 and innocence of the village life and brains with modern urban knowledge.</p>

              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr />
      <br />
      <br />
      <h1>OUR VISION</h1>

<br />
<br />
      <br />
<div class='container'>
        <div class="row">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <div class="card">
              <div class="card-body">
                <br />

                <h5 class="card-title">Vision of Vidhyaghar</h5>
                <br />
                <p class="card-text">Currently, Vidyaghar is successfully
                 running 50 such single-teacher schools, each having student enrolment of
                  about 25 in tiny tribal villages/hamlets; each settlement having about 30-50 houses.
                  Over the next 10-15 years, the number of beneficiary students is likely to grow much bigger as Vidyaghar covers 100 tribal villages in India region to 
                  prepare toddlers for formal school learning and make a meaningful difference in
                   their life to become good students with bright future so that when they grow the entire region grows. </p>

              </div>
            </div>
          </div>
          <div class="col-sm-6">

            <img src={about2} width='540px' height='300px' class="img-fluid" alt="about2" />

          </div>
        </div>
      </div>
    
      <br />
      <br />
      <br />


    {/* <!-- Footer --> */}
    <footer class="bg-body-tertiary text-center">
        {/* <!-- Grid container --> */}
        <div className='footer'>
          <div class="container-fluid p-4">

            {/* <!-- Section: Social media --> */}
            <section class="mb-4">
              {/* <!-- Facebook --> */}
              <Link data-mdb-ripple-init class="btn btn-outline btn-floating m-1" to="www.google.com" role="button"
              ><i class="fa fa-facebook-f"></i></Link>

              {/* <!-- Twitter --> */}
              <Link data-mdb-ripple-init class="btn btn-outline btn-floating m-1" to="https://twitter.com/MahakGa" role="button"
              ><i class="fa fa-twitter"></i></Link>

              {/* <!-- Google --> */}
              <Link data-mdb-ripple-init class="btn btn-outline btn-floating m-1" to="mailto:2021pietcsmahak100@poornima.org" role="button"
              ><i class="fa fa-google"></i
              ></Link>

              {/* <!-- Instagram --> */}
              <Link data-mdb-ripple-init class="btn btn-outline btn-floating m-1" to="https://instagram.com/mahakgarg_3001?igshid=ZDdkNTZiNTM=" role="button"
              ><i class="fa fa-instagram"></i
              ></Link>

              {/* <!-- Linkedin --> */}
              <Link data-mdb-ripple-init class="btn btn-outline btn-floating m-1" to="https://www.linkedin.com/in/mahak-garg-09197523b" role="button"
              ><i class="fa fa-linkedin"></i
              ></Link>

              {/* <!-- Github --> */}
              <Link data-mdb-ripple-init class="btn btn-outline btn-floating m-1" to="https://github.com/MAHAK0804" role="button"
              ><i class="fa fa-github"></i></Link>
            </section>
            {/* <!-- Section: Social media --> */}



            <div class='container'>

              {/* <!-- Section: Links --> */}
              <section class="">
                {/* <!--Grid row--> */}
                <div class="row">

                  {/* <!--Grid column--> */}
                  <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">About</h5>
                    <section class="mb-4">

                      <p>
                        Vidyaghar is a novel idea for a single teacher school that aims to provide free education to all children and get
                        them ready for secondary school by putting them in formal education settings. As a result, young, innocent children who may grow up to be engineers, physicians,
                        warriors, or technicians begin to lose interest in learning.

                      </p>

                    </section>
                  </div>
                  {/* <!--Grid column--> */}

                  {/* <!--Grid column--> */}
                  <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Contact US</h5>

                    <ul class="list-unstyled mb-0">
                      <br />

                      <li>
                      <Link class="text-body" to="#"><i class="fa fa-home">   302, Kumar Plaza, Kalina Kurla raod Santacruz East HRY-400054</i></Link>
                      </li>
                      <br />
                      <li>
                        <Link class="text-body" to="mailto:mahak191713@gmail.com"><i class="fa fa-envelope"> info@vidhyaghar.in</i></Link>
                      </li>
                      <br />
                      <li>
                        <Link class="text-body" to="tel:+918607483001"><i class="fa fa-phone">  +91-8607483001</i></Link>
                      </li>

                    </ul>

                  </div>
                  {/* <!--Grid column--> */}


                  <div class="col-lg-6 col-md-6 mb-4 mb-md-0">

                    <section class="container-fluid mb-4">
                      <br />
                      <br />

                      <button class='btn' >Watch now <i class='fa fa-youtube-play'></i></button>
                    </section>
                  </div>
                  {/* <!--Grid column--> */}


                </div>
                {/* <!--Grid row--> */}
              </section>
            </div>
            {/* <!-- Section: Links --> */}
          </div>
          {/* <!-- Grid container --> */}
        </div>
        {/* <!-- Copyright --> */}
        <div class='copyright'>
          <div class="text-center p-3">
            © 2020 Copyright:
            <Link class="text-reset fw-bold" to="#">vidhyaghar.com</Link>
          </div>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}

    </>
  )
}
