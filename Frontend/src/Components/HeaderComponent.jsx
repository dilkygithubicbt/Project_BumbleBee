import React, { Component } from 'react';
import '../../src/assets/img/apple-icon.png';
import '../../src/assets/img/favicon.ico';
import '../../src/assets/css/bootstrap.min.css';
import '../../src/assets/css/templatemo.css';
import '../../src/assets/css/custom.css';
import '../../src/assets/css/fontawesome.min.css';
import { useNavigate } from "react-router-dom";

const HeaderComponent = (isHiddenBtn) => {
    const navigate = useNavigate();

    return (
        <div>
            <header>

                <nav class="navbar navbar-expand-lg navbar-light shadow">
                    <div class="container d-flex justify-content-between align-items-center">

                        <a class="navbar-brand text-success logo h1 align-self-center" href="index.html">
                            Bumble Bee
                        </a>

                        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                            <div class="flex-fill">
                                <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">

                                </ul>
                            </div>
                            <div class="navbar align-self-center d-flex">
                                
                                {isHiddenBtn.isHiddenBtn==true ? (<button className="btn btn-success"
                                    onClick={() => navigate("/login")}>Login as a Admin
                                </button>):(<button className="btn btn-success"
                                    onClick={() => navigate("/home")}>Logout
                                </button>) }
                            </div>
                        </div>

                    </div>
                </nav>

            </header>
        </div>
    );
}

export default HeaderComponent;
