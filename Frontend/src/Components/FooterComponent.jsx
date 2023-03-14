import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                
        }
    }

    render() {
        return (
            <div>
               <footer className="footer">
                    <span className="tect-muted"> All Rights Recerved 2023 @BumbleBee</span> 
                </footer>
            </div>
        );
    }
}

export default FooterComponent;