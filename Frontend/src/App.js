import './App.css';
import '../src/Components/header.css';
import Home from './Components/Home';
import RegisterCustomerComponent from './Components/RegisterCustomerComponent';
import AdminComponent from './Components/AdminComponent';
import AddProduct from './Components/AddProduct';
import EditProduct from './Components/EditProduct';
import ViewUsers from './Components/ViewUsers';
import ViewUserDetails from './Components/ViewUserDetails';
import Login from './Components/login';

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

function App() {
    return (
        <div className='main'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/register" element={<RegisterCustomerComponent/>}></Route>
                    <Route path="/admin" element={<AdminComponent/>}></Route>
                    <Route path="/addproduct" element={<AddProduct/>}></Route>
                    <Route path="/editProduct/:id" element={<EditProduct/>}></Route>
                    <Route path="/viewUsers" element={<ViewUsers/>}></Route>
                    <Route path="/viewUserDetails/:id" element={<ViewUserDetails/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
