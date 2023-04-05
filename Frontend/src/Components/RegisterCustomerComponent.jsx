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
            <HeaderComponent isHiddenBtn={true} />
            <hr />
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md3 offset-md-3 shadow-lg p-3 mb-5 bg-white rounded'>
                        <h3 className='navbar-brand text-success logo h2 align-self-center'> Register Customer </h3>
                        <div className='card-body'>
                            <form onSubmit={(e)=> onSubmit(e)}>
                                <div className='form-group'>
                                    <label htmlFor="FirstName"> First Name:</label>
                                    <input type={"text"} placeholder='Enter your first name' value={firstName} name='firstName' required className='form-control mt-1' onChange={(e) => onInputChange(e)} />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor="LastName"> Last Name:</label>
                                    <input placeholder='Enter your last name' value={lastName} name='lastName' required className='form-control mt-1' onChange={(e) => onInputChange(e)} />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor="Email"> Email:</label>
                                    <input placeholder=' Enter your email' value={email} name='email' required className='form-control mt-1' onChange={(e) => onInputChange(e)} />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor="ContactNo"> Contact No:</label>
                                    <input placeholder='Enter your contact No' value={mobile} name='mobile' required className='form-control mt-1' onChange={(e) => onInputChange(e)} />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor="Address"> Address:</label>
                                    <input placeholder='Enter your address' value={address} name='address' required className='form-control mt-1' onChange={(e) => onInputChange(e)} />
                                </div>
                                
                                <div className='form-group'>
                                    <hr />
                                </div>

                                <div className='form-group'>
                                    <button type="submit" className="btn btn-success" >Save</button>
                                    <Link type="submit" className="btn btn-danger" style={{ marginLeft: "10px" }} onClick={() => navigate("/home")}>Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <FooterComponent />
        </div>
    );
}

export default RegisterCustomerComponent;
