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
        description: ""
    })

    const { productName, productCategory, productPrice, description } = product

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
                    <div className='card col-md-6 offset-md3 offset-md-3'>
                        <h3 className='text-center'> Add product to store </h3>
                        <div className='card-body'>
                            <form onSubmit={(e)=> onSubmit(e)}>
                                <div className='form-group'>
                                    <label htmlFor="FirstName"> Product Name:</label>
                                    <input type={"text"} placeholder='Product Name' value={productName} name='productName' className='form-control' onChange={(e) => onInputChange(e)}/>
                                </div>

                                <div className='form-group'>
                                    <label htmlFor="LastName"> Product Category:</label>
                                    <input placeholder='Product Category' value={productCategory} name='productCategory' className='form-control' onChange={(e) => onInputChange(e)}/>
                                </div>

                                <div className='form-group'>
                                    <label htmlFor="Email"> Product Price:</label>
                                    <input placeholder='Product Price' value={productPrice} name='productPrice' className='form-control' onChange={(e) => onInputChange(e)}/>
                                </div>

                                <div className='form-group'>
                                    <label htmlFor="ContactNo"> Description:</label>
                                    <input placeholder='Description' value={description} name='description' className='form-control' onChange={(e) => onInputChange(e)}/>
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

export default AddProduct;