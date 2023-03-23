import './App.css';
import '../src/Components/header.css';
import Home from './Components/Home';
import RegisterCustomerComponent from './Components/RegisterCustomerComponent';
import AdminComponent from './Components/AdminComponent';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import HeaderComponent from "./Components/HeaderComponent";

function App() {
    return (
        <div className='main'>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<Home/>}/>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/register" element={<RegisterCustomerComponent/>}></Route>
                    <Route path="/admin" element={<AdminComponent/>}></Route>
                    {/*<FooterComponent />*/}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
