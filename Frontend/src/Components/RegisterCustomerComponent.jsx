import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import axios from "axios";
import React, {Component, useState} from 'react';
import { Link, useNavigate } from "react-router-dom";

const RegisterCustomerComponent = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: 0,
        address: ""
    })

    const { firstName, lastName, email, mobile, address } = user

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/user", user);
        navigate("/home");
    };

    return (
        <div>
            <HeaderComponent />
            <hr />
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md3 offset-md-3'>
                        <h3 className='text-center'> Register Customer </h3>
                        <div className='card-body'>
                            <form onSubmit={(e)=> onSubmit(e)}>
                                <div className='form-group'>
                                    <label htmlFor="FirstName"> First Name:</label>
                                    <input type={"text"} placeholder='First Name' value={firstName} name='firstName' className='form-control' onChange={(e) => onInputChange(e)} />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor="LastName"> Last Name:</label>
                                    <input placeholder='Last Name' value={lastName} name='lastName' className='form-control' onChange={(e) => onInputChange(e)} />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor="Email"> Email:</label>
                                    <input placeholder='Email' value={email} name='email' className='form-control' onChange={(e) => onInputChange(e)} />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor="ContactNo"> Contact No:</label>
                                    <input placeholder='Contact No' value={mobile} name='mobile' className='form-control' onChange={(e) => onInputChange(e)} />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor="Address"> Address:</label>
                                    <input placeholder='Address' value={address} name='address' className='form-control' onChange={(e) => onInputChange(e)} />
                                </div>
                                
                                <div className='form-group'>
                                    <hr />
                                </div>

                                <div className='form-group'>
                                    <button type="submit" className="btn btn-success" >Save</button>
                                    <Link type="submit" className="btn btn-danger" style={{ marginLeft: "10px" }}>Cancel</Link>
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

export default RegisterCustomerComponent;
