import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ViewUserDetails = () => {

    const navigate = useNavigate();

    const { id } = useParams();

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        address: ""
    })

    const { firstName, lastName, email, mobile, address } = user

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
    };

    return (
        <div>
            <HeaderComponent />
            <hr />
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md3 offset-md-3'>
                        <h3 className='navbar-brand text-success logo h2 align-self-center'> User Details </h3>
                        <div className='card-body shadow-lg p-3 mb-5 bg-white rounded'>
                            <form>
                                <div className='form-group'>
                                    <label className='text-center' htmlFor="FirstName" name='firstName'> First Name: {firstName}</label>
                                </div>

                                <div className='form-group'>
                                    <label className='text-center' htmlFor="LastName" name='lastName'> Last Name: {lastName}  </label>          
                                </div>

                                <div className='form-group'>
                                    <label className='text-center' htmlFor="Email" name='email'> Email: {email} </label>     
                                </div>

                                <div className='form-group'>
                                    <label className='text-center' htmlFor="ContactNo" name='mobile'> Mobile: {mobile}</label>
                                </div>

                                <div className='form-group'>
                                    <label  className='text-center' htmlFor="address" name='address'> Address: {address} </label>
                                </div>

                                <div className='form-group'>
                                    <hr />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    );
}

export default ViewUserDetails;