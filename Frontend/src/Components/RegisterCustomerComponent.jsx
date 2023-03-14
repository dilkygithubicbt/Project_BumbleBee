import React, { Component } from 'react';

class RegisterCustomerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            emailId: '',
            address: '',
            contactNo: '', 
            installmentPlan: ''

        }

       /* this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this); 
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changeAddressNoHandler = this.changeAddressNoHandler(this);
        this.changeContactNoHandler = this.changeContactNoHandler(this);*/
    }

    /*changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }
    
    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    } 

    changeEmailIdHandler= (event) => {
        this.setState({emailId: event.target.value});
    } 

    changeContactNoHandler= (event) => {
        this.setState({contactNo: event.target.value});
    } 

    changeAddressNoHandler= (event) => {
        this.setState({address: event.target.value});
    } 

    changeInstallmentPlanHandler= (event) => {
        this.setState({installmentPlan: event.target.value});
    } */

    render() {
                return (
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md3 offset-md-3'>
                        <h3 className='text-center'> Register Customer </h3>
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label> First Name:</label>
                                    <input placeholder='First Name' name='firstName' className='form-control' value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                </div>

                                <div className='form-group'>
                                    <label> Last Name:</label>
                                    <input placeholder='Last Name' name='lastName' className='form-control' value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                </div>

                                <div className='form-group'>
                                    <label> Email Id:</label>
                                    <input placeholder='Email Id' name='emailId' className='form-control' value={this.state.femailId} onChange={this.changeEmailIdHandler}/>
                                </div>

                                <div className='form-group'>
                                    <label> Contact No:</label>
                                    <input placeholder='Contact No' name='contactNo' className='form-control' value={this.state.contactNo} onChange={this.changeContactNoHandler}/>
                                </div>

                                <div className='form-group'>
                                    <label> Address:</label>
                                    <input placeholder='Address' name='address' className='form-control' value={this.state.address} onChange={this.changeAddressNoHandler}/>
                                </div>

                                <div className='form-group'>
                                    <label> Installment Plan:</label>
                                    <input placeholder='Address' name='installmentPlan' className='form-control' value={this.state.installmentPlan} onChange={this.changeInstallmentPlanHandler}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default RegisterCustomerComponent;