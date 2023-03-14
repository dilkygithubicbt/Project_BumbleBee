import React, { Component } from 'react';
import './home.css';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
             
        }
        this.cusRegistration = this.cusRegistration.bind(this);
    }

    cusRegistration(){
        this.props.history.push('/register-customer');
    }
    
    render() {
        return (
            <div>
                <div class="container">
                    <div class="row">
                   
                        <div class="col-sm">
                            <p> Buy First pay later !</p>
                            
                           <table>
                            <th>
                                <div class="col-sm">
                                <button className='btn btn-primary reg' onClick={this.cusRegistration}> Register </button>
                                </div>
                                </th>
                                <th>
                               
                                <div class="col-sm">
                                <button className='btn btn-primary' onClick={this.admin} style={{marginLeft: "10px"}}> Admin </button>
                                </div>
                                     
                                </th>
                                </table>
                                
                            
                        </div>
    
                        <div class="col-sm">
                        <div>
                            <img alt=""  src={require("../../src/images/homeimg.png")} width="400"  height="600" className="d-inline-block align-top" />
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
           
        );
    }
}

export default Home;