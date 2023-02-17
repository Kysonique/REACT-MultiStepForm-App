import React from "react";

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
            <form>
                <label htmlFor="username">Name</label>
                <input 
                type="text" 
                id="username" 
                name="username"
                ></input>

                <label htmlFor="email">Email Address</label>
                <input 
                type="text" 
                id="email" 
                name="email"
                ></input>

                <label htmlFor="phone">Phone</label>
                <input 
                type="text" 
                id="phone" 
                name="phone"
                ></input>
            </form>
        )
    }
}

export default FormCard;


// use todo input from TodoApp