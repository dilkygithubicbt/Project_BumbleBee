import logo from './logo.svg';
import './App.css';
import '../src/Components/header.css'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import Home from './Components/Home';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';

function App() {
  return (
    <div className='main'>
       <HeaderComponent />
        <div className="container">
            <div className="container">
                  <Home />
            </div>
            </div>
          <FooterComponent />
        
    </div>
  );
}

export default App;
