import React, { Component } from 'react';
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

class AdminComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

    }

    render() {
        return (
            <div>
                <HeaderComponent />
                <h1>Hello Admin </h1>
                <FooterComponent />
            </div>
        );
    }
}

export default AdminComponent;

