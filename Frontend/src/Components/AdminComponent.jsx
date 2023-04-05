import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const AdminComponent = () => {

    const navigate = useNavigate();
    const [products, setproducts] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        loadProducts();

    }, []);

    const loadProducts = async () => {
        const result = await axios.get("http://localhost:8080/products");
        setproducts(result.data);
    };

    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:8080/deleteProduct/${id}`);
        loadProducts();
    };

    return (
        <div>
            <HeaderComponent isHiddenBtn={false} />

            <div className="container">

                <div className="py-4">

                    <button className="btn btn-success "
                        onClick={() => navigate("/addproduct")}>Add Product
                    </button>
                    <button className="btn btn-success " style={{float : 'right', paddingRight : '5px'}}
                        onClick={() => navigate("/viewUsers")}>View User List
                    </button>
                    <hr />
                    <table className="table border shadow">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Product Type</th>
                                <th scope="col">Product Price</th>
                                <th scope="col">Description</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr>
                                    <th scope="row" key={index}>
                                        {index + 1}
                                    </th>
                                    <td>{product.productName}</td>
                                    <td>{product.productCategory}</td>
                                    <td>{product.productPrice}</td>
                                    <td>{product.description}</td>
                                    <td>
                                        <Link
                                            className="btn btn-outline-primary mx-2"
                                            to={`/editProduct/${product.id}`}
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            className="btn btn-danger mx-2"
                                            onClick={() => deleteProduct(product.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <FooterComponent />
        </div>
    );
}

export default AdminComponent;

