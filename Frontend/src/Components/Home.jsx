import React, {Component} from 'react';
import './home.css';
import {useNavigate} from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";


const Home = () => {

    const navigate = useNavigate();


    return (

        <div>
            <HeaderComponent/>
            <div class="container">
                <div class="row">

                    <div class="col-sm">
                        <p> Buy First pay later !</p>

                        <table>
                            <th>
                                <div class="col-sm">
                                    <button className="btn btn-danger"
                                            onClick={() => navigate("/register")}>Register
                                    </button>

                                </div>
                            </th>
                            <th>

                                <div class="col-sm">
                                    <button className="btn btn-danger"
                                             onClick={() => navigate("/admin")}>Admin
                                    </button>

                                </div>

                            </th>
                        </table>

                    </div>

                    <div class="col-sm">
                        <div>
                            <img alt="" src={require("../../src/images/homeimg.png")} width="400" height="600"
                                 className="d-inline-block align-top"/>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>

    );

}

export default Home;
