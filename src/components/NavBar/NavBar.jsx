import React from "react";
import "./Navbar.css";
import Cartwidget from "../CartWidget/CartWidget";
import { Link, NavLink} from "react-router-dom"

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                                <Link to= "/">
                                    <img className= "LogoJerseyKings"  src="./img/JerseyKings.png" alt="Logo" />
                                </Link>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to= "/categoria/España">
                                    España
                                </NavLink>
                            </li>

                            <li className="nav-item">
                            <NavLink to= "/categoria/Alemania">
                                    Alemania
                                </NavLink>
                            </li>

                            <li className="nav-item">
                            <NavLink to= "/categoria/Argentina">
                                    Argentina
                                </NavLink>
                            </li>

                            <li className="nav-item">
                            <NavLink to= "/categoria/Inglaterra">
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
