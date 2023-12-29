import React, { useState }  from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


export default function Signup() {
    const [input, setInput] = useState({
        Username: '',
        password: '',
        confirmpassword:'',
        mail:''
    });


    function handleChange(event) {
        const { name, value } = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }
  const navigate = useNavigate();

    function handleClick(event) {
        // event.preventDefalut();
        const details = {
            Username: input.Username,
            password: input.password,
            confirmpassword: input.confirmpassword,
            mail: input.mail

        }
        axios.post('/Signup', details);
        navigate("/Adminlogin");

    };

    return (
        <div>
            <section class="vh-100 gradient-custom">
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div class="card bg-dark text-white" >
                                <div class="card-body p-5 text-center">

                                    <div class="mb-md-5 mt-md-4 pb-5">

                                        <h2 class="fw-bold mb-2 text-uppercase">Signup</h2>
                                        <p class="text-white-50 mb-5">Please enter your details</p>
                                        <form method='post' action='http://localhost:3000/Signup'>
                                            <div class="form-outline form-white mb-4">
                                                <label class="form-label" for="typeEmailX">Admin Username</label>

                                                <input type="text" name="Username" value={input.Username} class="form-control form-control-lg" onChange={handleChange} required />
                                            </div>

                                            <div class="form-outline form-white mb-4">
                                                <label class="form-label" for="typePasswordX">Password</label>

                                                <input type="password" name="password" value={input.password} class="form-control form-control-lg" onChange={handleChange} required />
                                            </div>

                                            <div class="form-outline form-white mb-4">
                                                <label class="form-label" for="typePasswordX">Confirm Password</label>

                                                <input type="password" name="confirmpassword" value={input.confirmpassword} class="form-control form-control-lg" onChange={handleChange} required />
                                            </div>
                                            <div class="form-outline form-white mb-4">
                                                <label class="form-label" for="typePasswordX">E-Mail</label>

                                                <input type="email" name="mail" value={input.mail} class="form-control form-control-lg" onChange={handleChange} required />
                                            </div>
                                            <button class="btn btn-outline-light btn-lg px-5" type="submit" value='submit' onClick={handleClick}>Signup</button>

                                          
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           

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
        </div>
)
}
