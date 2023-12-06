import React from 'react';
import '../Services/Services.css';
import logo1 from '../assets/logo1.png';
import Transportation from '../assets/Transportation.jpeg';
import hostel from '../assets/hostel.jpg';
import fee from '../assets/fees.jpg';
import { Link } from 'react-router-dom';


export default function Services() {
  return (
    <>

      <div
        class="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white"
      >
        <h1 class="mb-3 h2">Have A Look for Services of Vidhyaghar</h1>
        <img src={logo1} width='300px' height='300px' class='img-fluid' id='img' alt='logo' />
        <h1 class="mb-3 h2">Services</h1>


      </div>

      <div class='container'>
        <p class="d-inline-flex gap-1">
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            <img src={Transportation} width='400px' height='300px' class='img-fluid' alt='Trp' /><br />
            Transportation
          </a>
          <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
            <img src={hostel} width='340px' height='300px' class='img-fluid' alt='hostels' /><br />

            Hostels
          </button>
          <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
            <img src={fee} width='250px' height='100px' class='img-fluid' alt='fee' /><br />

            Fees
          </button>

        </p>
        <div class="collapse" id="collapseExample">
          <div class="card card-body">
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item list-group-item-primary">BUS Route No.</li>
              <li class="list-group-item"> Location</li>
            </ul>
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item list-group-item-primary">1</li>
              <li class="list-group-item">HUDA SECTOR-1 PHASE-1</li>
            </ul>
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item list-group-item-primary">2</li>
              <li class="list-group-item">Kalayak PHASE-2</li>
            </ul>
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item list-group-item-primary">3</li>
              <li class="list-group-item">Sidhi Village </li>
            </ul>
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item list-group-item-primary">4</li>
              <li class="list-group-item">Radhe Rani Society</li>
            </ul>
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item list-group-item-primary">5</li>
              <li class="list-group-item">Krishna balram Palace</li>
            </ul>
          </div>
        </div>

        <div class="collapse" id="collapseExample1">
          <div class="card card-body">
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item list-group-item-primary">Type Of Rooms</li>
              <li class="list-group-item">Number Of Rooms</li>
            </ul>
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item list-group-item-primary">AC ROOM For Single -2 Lac/Year</li>
              <li class="list-group-item">10</li>
            </ul>
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item list-group-item-primary">AC ROOM For Double- 1.5 Lac/Year/Person</li>
              <li class="list-group-item">10</li>
            </ul>
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item list-group-item-primary">Non-AC ROOM for Single- 1 Lac/Year </li>
              <li class="list-group-item">6</li>
            </ul>
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item list-group-item-primary">Non-AC ROOM for Double - 75000/Year/Person</li>
              <li class="list-group-item">25</li>
            </ul>
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item list-group-item-primary">Non-AC ROOM for Three- 55000/Year/Person</li>
              <li class="list-group-item">15</li>
            </ul>
          </div>
        </div>
      </div>



      <div class="collapse" id="collapseExample2">
       
        <table class="table">
  <thead>
    <tr>
      <th scope="col" class="table-primary">Classes</th>
      <th scope="col">Academic Fees/year</th>
      <th scope="col">Ciricular Fees/year</th>
      <th scope="col">Hostel Fees/year</th>
      <th scope="col">Total</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" class="table-primary">Nur-2</th>
      <td>2000</td>
      <td>1000</td>
      <td>-</td>
      <td>3000</td>

      
    </tr>
    <tr>
      <th scope="row" class="table-primary">3-5</th>
      <td>10000</td>
      <td>1000</td>
      <td>-</td>
      <td>11000</td>
      
    </tr>
    <tr>
      <th scope="row" class="table-primary">6-8</th>
      <td>20000</td>
      <td>3000</td>
      <td>According to choice</td>
      <td>23000+ hostel Fees</td>


      
    </tr>

    <tr>
      <th scope="row" class="table-primary">9-10</th>
      <td>25000</td>
      <td>3000</td>
      <td>According to choice</td>
      <td>28000+ hostel Fees</td>


      
    </tr>

    <tr>
      <th scope="row" class="table-primary">11-12</th>
      <td>90000</td>
      <td>4000</td>
      <td>According to choice</td>
      <td>94000+ hostel Fees</td>


      
    </tr>
  </tbody>
</table>
</div>
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
