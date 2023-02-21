import React from "react";
import './FormCard.css'


class FormCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            phone: "",
            id: props.key
        };
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
    }

    handleUserNameChange(e){
        this.setState({ username: e.target.value});
        console.log(e.target.value)
    }

    handleEmailChange(e){
        this.setState({ email: e.target.value});
    }

    handlePhoneChange(e){
        this.setState({ phone: e.target.value});
    }

    // resetState =() => this.setState({
    //     username: "",
    //     email: "",
    //     phone: "",
    //     id: this.props.key
    // })

    handleSave(e){
        e.preventDefault()
        const payload = {
             username: this.state.username,
             email: this.state.email,
             phone: this.state.phone,
             id: this.state.id
        }
        this.props.handleSaveClick(payload);
        //this.resetState();
        
    }

    render(){
        return (
            <>
                <p className="title">Personal info</p>
                <p className="subtitle">Please provide your name, email address, and phone number.</p>

                <form className="form">
                    <label htmlFor="username">Name</label>
                    <br/>
                    <input 
                    type="text" 
                    className="username" 
                    name="username"
                    placeholder="e.g. Stephen King"
                    value={this.state.username}
                    onChange={this.handleUserNameChange}
                    ></input>
                    <br/>

                    <label htmlFor="email">Email Address</label>
                    <br/>
                    <input 
                    type="text" 
                    className="email" 
                    name="email"
                    placeholder="e.g. stephenking@lorem.com"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    ></input>
                    <br/>

                    <label htmlFor="phone">Phone</label>
                    <br/>
                    <input 
                    type="text" 
                    className="phone" 
                    name="phone"
                    placeholder="e.g. +1 281 330 8004 "
                    value={this.state.phone}
                    onChange={this.handlePhoneChange}
                    ></input>
                    <br/>
                    <button onClick={this.handleSave} className="nextStepBtn"  type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">Next Step</button>   
                </form>
            </>
        )
    }
}

export default FormCard;


// use todo input from TodoApp