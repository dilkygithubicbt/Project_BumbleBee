import React, { Component } from 'react';
import './header.css';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div id='a1'>
                        </div>

                    <div> <a href="/home" className="navbar-brand " id="a2">Bumble Bee</a> </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;
