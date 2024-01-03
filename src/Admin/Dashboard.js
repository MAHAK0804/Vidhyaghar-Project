import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dash.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Dashboard() {
 
        //cal
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand btn btn-primary" data-bs-toggle="offcanvas" to="#offcanvasExample" role="button" aria-controls="offcanvasExample"><i class="fa fa-bars" aria-hidden="true"></i></Link>

                    <div class="hstack gap-3">
                        <div class="p-2"> <i class='fa fa-bell'></i></div>
                        <div class="p-2 ms-auto"> <i class="fa fa-envelope" aria-hidden="true"></i></div>
                        <div class="vr"></div>
                        <div class="p-2"> <i class="fa fa-user" aria-hidden="true"></i></div>
                    </div>
                </div>



                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header">
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="p-6 mb-2 bg-secondary text-white" id='user'>

                        <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                            <i class="fa fa-user" id='fauser' aria-hidden="true">  John Smith
                            </i>
                        </h5>
                    </div>
                    <div class="offcanvas-body">
                        <br />
                        <div class="list-group">
                            <Link to="/admin/dashboard">  <button type="button" class="list-group-item list-group-item-action" aria-current="true">
                                <i class="fa fa-book"></i>Dashboard
                            </button></Link>
                            <br />
                            <Link to="/admin/attendance">
                                <button type="button" class="list-group-item list-group-item-action">
                                    <i class='fa fa-calendar'></i>Attendance
                                </button></Link>
                            <br />

                            <Link to="/admin/notice">
                                <button type="button" class="list-group-item list-group-item-action">
                                    <i class="fa fa-sticky-note"></i>Notice</button></Link>
                            <br />

                            <Link to="/admin/complain">  <button type="button" class="list-group-item list-group-item-action"><i class="fa fa-exclamation"></i>Complain</button></Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div class="card-group">
                <div class="card text-bg-info mb-3">
                    <h2> <i class="fa fa-user"></i>Students</h2>
                    <div class="card-body">
                        <h3 class="card-title">10Lac</h3>

                    </div>
                </div>
                <div class="card text-bg-info mb-3">
                    <h2> <i class="fa fa-user"></i>Teachers</h2>
                    <div class="card-body">
                        <h3 class="card-title">100</h3>

                    </div>
                </div>
                <div class="card text-bg-info mb-3">
                    <h2> <i class="fa fa-bell"></i>Notifications</h2>
                    <div class="card-body">
                        <h3 class="card-title">98</h3>
                    </div>
                </div>
            </div>
            <div class="card-group">
                <div class="card text-bg-light mb-3">
                    <Calendar
                        onChange={onChange}
                        value={value}
                        class="calendar"
                    />
                </div>
                <div class="card text-bg-light mb-3">
                    
                    <div class="card-body">
                    <h3 class="card-title">100</h3>
                    </div>
                </div>

                <div class="card text-bg-light mb-3">
                    <h2> <i class="fa fa-user"></i>Teachers</h2>
                    <div class="card-body">
                        <h3 class="card-title">100</h3>

                    </div>
                </div>

            </div>
        </div>
    )
    
}
