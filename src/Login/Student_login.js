import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function Student_login() {
    const [StudentData, setStudentData] = useState({
        id: "",
        password: "",
      });
    
      const [error, setError] = useState("");
      const navigate = useNavigate();
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStudentData({
          ...StudentData,
          [name]: value,
        });
      };
    
      const handlestudent = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post(
            "http://localhost:3000/Studentlogin",
            StudentData
          );
          if (response.status === 200) {
            alert("Login successful!");
            navigate("/");
          } else {
            setError("Login failed. Please check your credentials.");
          }
        } catch (error) {
          console.error("Error logging in:", error);
          setError("Login failed. Enter Valid credentials.");
        }
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

                                        <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                                        <p class="text-white-50 mb-5">Please enter your ID and password!</p>
                                        <form method='post' action='http://localhost:3000/' onSubmit={handlestudent} >
                                            <div class="form-outline form-white mb-4">
                                                <label class="form-label" for="typeEmailX">Student ID</label>

                                                <input type="text" name="id" value={StudentData.id}  class="form-control form-control-lg" onChange={handleInputChange} required />
                                            </div>

                                            <div class="form-outline form-white mb-4">
                                                <label class="form-label" for="typePasswordX">Password</label>

                                                <input type="password" name="password" value={StudentData.password}  class="form-control form-control-lg" onChange={handleInputChange} required />
                                            </div>

                                            <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="mailto:mahak191713@gmsil.com">Forgot password?</a></p>

                                            <button class="btn btn-outline-light btn-lg px-5" type="submit" value='submit'>Login</button>
                                        </form>
                                        {error && <p className="error">{error}</p>}
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
