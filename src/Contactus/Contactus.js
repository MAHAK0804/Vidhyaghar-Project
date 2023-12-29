import React,{ useState } from 'react';
import '../Contactus/Contact.css';
import Contact from '../assets/contact.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";



export default function Contactus() {
  const [input, setInput] = useState({
    name:'',
    email:'',
    subject:'',
    message:''
  });
 

  function handleChange(event){
    const {name,value}= event.target;
    setInput(prevInput=>{
      return{
        ...prevInput,
        [name]:value
      }
    })
  }
  const navigate = useNavigate();


  function handleClick(event){
    // event.preventDefalut();
    const details= {
      name:input.name,
      email:input.email,
      subject:input.subject,
      message:input.message,

    }
    axios.post('/Contact',details)
    navigate("/");

  }
 
  return (
    <>
   
     <div
        class="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white"
      >
        <h1 class="mb-3 h2">Feel FREE For Contact US</h1>
        <img src={Contact} width='500px' height='500px' class='img-fluid' id='img' alt='logo' />
        <h1 class="mb-3 h2">Contact US</h1>
        </div>
        <div class='container-fluid'>

        <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h1>Get In Touch</h1>
        <br /><br />
      <ul class="list-group">
        
  <li class="list-group-item"> <h5>Location:</h5>
          <p> 302, Kumar Plaza, Kalina Kurla raod Santacruz East HRY-400054</p></li>
  <li class="list-group-item">  <h5>Open Hours:</h5>
          <p>Monday-Saturday:<br />
           8:00 AM - 3:00 PM</p></li>
  <li class="list-group-item"> <h5>Email:</h5>
          <p>info@vidhyaghar.com</p></li>
  <li class="list-group-item"><h5>Call:</h5>
          <p>+1 1234 55488 55</p></li>
</ul>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <br />
        <div class='container'>

      <form class="row g-3 needs-validation"  method='post' validate action='http://localhost:3000/Contact'>
  <div class="col-md-6">
    <label for="validationCustom01" class="form-label">Name</label>
    <input type="text" class="form-control" id="validationCustom01" placeholder="Enter Your Name" name="name" value={input.name}  onChange={handleChange} required />
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom02" class="form-label">Email ID</label>
    <input type="email" class="form-control" id="validationCustom02" placeholder="Enter Your Email" name="email" value={input.email} onChange={handleChange} required />
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  
  <div class="col-md-12">
    <label for="validationCustom03" class="form-label">Subject</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="subject"  value={input.subject} onChange={handleChange} ></textarea>
    <div class="invalid-feedback">
      Please provide a valid Subject.
    </div>
  </div>

  <div class="col-md-12">
    <label for="validationCustom03" class="form-label">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" name="message" value={input.message}  onChange={handleChange}></textarea>
    <div class="invalid-feedback">
      Please provide Message.
    </div>
  </div>
 
 
  <div class="col-12">
    <button class="btn btn-primary" type="submit" value='submit' onClick={handleClick}><i class="fa fa-send"></i>Send Message</button>
  </div>
</form>
</div>
      </div>
    </div>
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
