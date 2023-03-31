import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, {Component, useState, setMessage} from 'react';

const Login = () => {

    const navigate = useNavigate();

    const [auth, setAuth] = useState({
        userName: "",
        password: "",
    })

    const { userName, password } = auth

    const onInputChange = (e) => {
        setAuth({ ...auth, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/login", auth).then(resp => {

        console.log(resp.data.id != "0");
        console.log(resp);
        if(resp.data.id != "0"){
            navigate("/admin");
        }else{
            alert(`Invalid Credentials.`);
        }
    });
       
    };

    return (
        <div>
            <hr />
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md3 offset-md-3'>
                        <h3 className='text-center'>Admin Login </h3>
                        <div className='card-body shadow-lg p-3 mb-5 bg-white rounded'>
                            <form onSubmit={(e)=> onSubmit(e)}>
                                <div class="form-outline mb-4">
                                    <input type="text" name='userName' value={userName} class="form-control" onChange={(e) => onInputChange(e)} />
                                    <label class="form-label" for="form2Example1">User Name</label>
                                </div>

                                <div class="form-outline mb-4">
                                    <input type="password" name='password' value={password} class="form-control" onChange={(e) => onInputChange(e)} />
                                    <label class="form-label" for="form2Example2">Password</label>
                                </div>
                                
                                <button type="submit" class="btn btn-primary "  >Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Login;
