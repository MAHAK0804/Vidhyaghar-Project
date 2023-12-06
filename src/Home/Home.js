import React from 'react';
import firstimg from '../assets/slide1.jpg';
import secondimg from '../assets/slide2.jpg';
import thirdimg from '../assets/slide3.png';
import '../Home/Home.css';
import logo from '../assets/logo.png';
import review from '../assets/review.jpg';
import review1 from '../assets/review.1jpg.avif';
import review2 from '../assets/review2.jpg';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={firstimg} width='300px' height='450px' class="d-block w-100" alt="img" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Education</h5>
              <p>Education is the ability to listen to almost anything without losing your temper or your self-confidence.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={secondimg} width='300px' height='450px' class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Knowledge</h5>
              <p>The knowledge of the world is only to be acquired in the world, and not in a closet.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={thirdimg} width='300px' height='450px' class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Vidhyaghar</h5>
              <p>People learn something every day, and a lot of times it’s that what they learned the day before was wrong</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>


      <div class="container ">
        <div class="row align-items-start">

          <div class="col">
            <img src={logo} width='370px' height='400px' alt='logo' />

          </div>
          <div class="col">
            <br />
            <br />
            <h3><u>About</u></h3>
            <br />
            <p className='para'>Water creates an ocean, drop by drop. Few people are aware that every drop contains an ocean. Every person
              has the capacity to change their own life, which will then enable them to have a positive and long-lasting influence on their
              family, community, country, and the world at large. </p>
          </div>
        </div>
      </div>
      <br />

      <div class="container">
        <h2 className='review'>REVIEWS</h2>
      </div>
      <div class="card-group">
        <div class="card">
          <img src={review} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">John Deo</h5>
            <p class="card-text">This is the best platform for learning. Having completed the course at this institute,
              I can confidently recommend this to aspiring career enthusiasts. The faculty here is an expert in the subject and the concepts are taught in real-time.</p>
          </div>
        </div>
        <div class="card">
          <img src={review1} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Wafer smith</h5>
            <p class="card-text">All teachers are good well behaved faculties good session all day practical also goods thank you jetking for giving me best place</p>
          </div>
        </div>
        <div class="card">
          <img src={review2} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Priyanka thakur</h5>
            <p class="card-text">Very good school..the management and staff are very supportive and mould the students very well.The school has given cent percent result from last three decades in
              CBSE board exams of 10th and 12th grade.The school gives equal importance to both co curricular and extracurricular activities.Overall an excellent school.</p>
          </div>
        </div>
      </div>


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
