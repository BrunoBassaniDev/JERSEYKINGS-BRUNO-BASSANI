import React from "react";
import "./Navbar.css";
import Cartwidget from "../CartWidget/Cartwidget";
import { Link, NavLink} from "react-router-dom"

const Navbar = () => {
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid">
                                <Link to= "/">
                                    <img className= "LogoJerseyKings"  src="./img/JerseyKings.png" alt="Logo" />
                                </Link>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink to= "/categoria/España">
                                    España
                                </NavLink>
                            </li>

                            <li class="nav-item">
                            <NavLink to= "/categoria/Alemania">
                                    Alemania
                                </NavLink>
                            </li>

                            <li class="nav-item">
                            <NavLink to= "/categoria/Argentina">
                                    Argentina
                                </NavLink>
                            </li>

                            <li class="nav-item">
                            <NavLink to= "/categoria/Italia">
                                    Inglaterra
                                </NavLink>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>

            <Cartwidget />
        </header>
    );
};

export default Navbar
