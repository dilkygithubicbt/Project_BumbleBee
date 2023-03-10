import React, { Component } from 'react';
import './home.css';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
             
        }
    }

    render() {
        return (
            <div>
                <div class="container">
                    <div class="row">
                    <div> 
                        
                    </div>
                        <div class="col-sm">
                            <h1> Buy First pay later !</h1>
                            <button></button>
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