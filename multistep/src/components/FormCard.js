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
        this.handlerUserNameChange = this.handlerUserNameChange.bind(this);
        this.handlerEmailChange = this.handlerEmailChange.bind(this);
        this.handlerPhoneChange = this.handlerPhoneChange.bind(this);
        this.handleSave = this.handleSave.bind(this)
    }

    handlerUserNameChange(e){
        this.setState({ username: e.target.value});
    }

    handlerEmailChange(e){
        this.setState({ username: e.target.value});
    }

    handlerPhoneChange(e){
        this.setState({ username: e.target.value});
    }

    resetState =() => this.setState({
        username: "",
        email: "",
        phone: "",
        id: this.props.key
    })

    handleSave(e){
        e.preventDefault()
        const payload = {
            username: this.state.username,
            email: this.state.email,
            phone: this.state.phone,
            id: this.state.id
        }
        this.props.handleSaveClick(payload);
        this.resetState()
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
                    ></input>
                    <br/>

                    <label htmlFor="email">Email Address</label>
                    <br/>
                    <input 
                    type="text" 
                    className="email" 
                    name="email"
                    placeholder="e.g. stephenking@lorem.com"
                    ></input>
                    <br/>

                    <label htmlFor="phone">Phone</label>
                    <br/>
                    <input 
                    type="text" 
                    className="phone" 
                    name="phone"
                    placeholder="e.g. +1 281 330 8004 "
                    ></input>
                    <br/>

                    <button className="nestStepBtn">Next Step</button>

                </form>
            </>
        )
    }
}

export default FormCard;


// use todo input from TodoApp