import React from "react";
import "./Navbar.css";
import Cartwidget from "../CartWidget/Cartwidget";

const Navbar = () => {
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid">
                    <a className="Nombre" class="navbar-brand" href="#">
                        JerseyKings
                    </a>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Argentina
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    España
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Alemania
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Inglaterra
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

            <Cartwidget />
        </header>
    );
};

export default Navbar;
