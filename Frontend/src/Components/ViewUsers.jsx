import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ViewUsers = () => {

    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    };

    return (
        <div>
            <HeaderComponent />

            <div className="container">

                <div className="py-4">
                <h3 className='text-center'> User List</h3>
                    <hr />
                    <table className="table border shadow">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr>
                                    <th scope="row" key={index}>
                                        {index + 1}
                                    </th>
                                    <td>{user.firstName} {user.lastName}</td>
                                    <td>
                                        <Link
                                            className="btn btn-outline-primary mx-2"
                                            to={`/viewUserDetails/${user.id}`}
                                        >
                                            View Details
                                        </Link>
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

export default ViewUsers;

