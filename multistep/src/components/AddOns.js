import React from "react";

//push to an array

class AddOns extends React.Component{
    constructor(props){
        super(props);
        this.state={
            prices: []
        };
        this.addingPrices = this.addingPrices.bind(this)
    }

    

    addingPrices(e){
        this.state.prices.push(e.target.value)
    }
    


    render(){
        return(
            <div>
                <p className="title">Pick add-ons</p>
                <p className="subtitle">Add-ons help enhance your gaming experience.</p>
                <div>
                    <button onClick={this.addingPrices} value={1}></button>
                    <p>Online service</p>
                    <p>Access multiplayer games</p>
                    <p className="addPrice">+$/mo</p>
                </div>
                <div>
                <button onClick={this.addingPrices} value={2}></button>
                    <p>Larger storage</p>
                    <p>Extra 1TB of cloud save</p>
                    <p className="addPrice">+$/mo</p>
                </div>
                <div>
                <button onClick={this.addingPrices} value={2}></button>
                    <p>Customizable profile</p>
                    <p>Custom theme on your profile</p>
                    <p className="addPrice">+$/mo</p>
                </div>

            </div>
        )
    }
}

export default AddOns;