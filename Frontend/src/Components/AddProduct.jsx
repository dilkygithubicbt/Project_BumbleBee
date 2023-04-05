import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import axios from "axios";
import React, { Component, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const AddProduct = () => {

    const navigate = useNavigate();

    const [product, setProduct] = useState({
        productName: "",
        productCategory: "",
        productPrice: "",
        description: "",
        filename: ""
    })

    const { productName, productCategory, productPrice, description, filename } = product

    const onInputChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/product", product);
        navigate("/admin");
    };

    return (
        <div>
            <HeaderComponent />
            <hr />
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md3 offset-md-3 shadow-lg p-3 mb-5 bg-white rounded'>
                        <h3 className='navbar-brand text-success logo h2 align-self-center'> Add or edit products </h3>
                        <div className='card-body'>
                            <form onSubmit={(e) => onSubmit(e)}>
                                <div className='form-group'>
                                    <label htmlFor="FirstName"> Product Name:</label>
                                    <input type={"text"} placeholder='Enter product name' required value={productName} name='productName' className='form-control' onChange={(e) => onInputChange(e)} />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor="LastName"> Product Category:</label>
                                    <input placeholder='Enter product category' value={productCategory} required name='productCategory' className='form-control' onChange={(e) => onInputChange(e)} />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor="Email"> Product Price:</label>
                                    <input placeholder='Enter product price' required value={productPrice} name='productPrice' className='form-control' onChange={(e) => onInputChange(e)} />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor="ContactNo"> Description:</label>
                                    <input placeholder='Enter description' required value={description} name='description' className='form-control' onChange={(e) => onInputChange(e)} />
                                </div>
                                <div className='form-group'>
                                    <hr />
                                </div>

                                <div className='form-group'>
                                    <button type="submit" className="btn btn-success" >Save</button>
                                    <Link type="submit" className="btn btn-danger" style={{ marginLeft: "10px" }}  onClick={() => navigate("/admin")}>Cancel</Link>
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

export default AddProduct;