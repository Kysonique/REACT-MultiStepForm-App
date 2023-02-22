import "./AddOns.css";
import React from "react";

//push to an array

class AddOns extends React.Component{
    constructor(props){
        super(props);
        this.state={
            prices: [],
            pricesArr: [],

            ToggleBtn: true
        };

        this.addingPrices = this.addingPrices.bind(this)
        this.togglePrices = this.togglePrices.bind(this)
    }

    addChoices = [
        {type: "a", prices: [1, 10], abbr: ["/mo", "/yr"]},
        {type: "b", prices: [2, 20],  abbr: ["/mo", "/yr"]}
    ]


    togglePrices(){
        if (this.state.ToggleBtn === true){
           return  this.setState({pricesArr: [1, 2]})
        }else{
            return this.setState({pricesArr: [10, 20]})
        }
    }

    addingPrices(e){
        this.state.prices.push(e.target.value)
        console.log(e.value)
    }
    



    render(){
        return(
            <div>
                <p className="title">Pick add-ons</p>
                <p className="subtitle">Add-ons help enhance your gaming experience.</p>
                <div className="add-div">
                    <button className="add-btn" onClick={this.addingPrices} value={1}></button>
                    <div className="titles">
                        <p className="add-p1">Online service</p>
                        <p className="add-p2">Access multiplayer games</p>
                    </div>
                    <p className="addPrice">+$</p>
                </div>
                
                <div className="add-div">
                    <button className="add-btn" onClick={this.addingPrices} value={this.state.pricesArr[1]}></button>
                    <div className="titles">
                        <p className="add-p1">Larger storage</p>
                        <p className="add-p2">Extra 1TB of cloud save</p>
                    </div>
                    <p className="addPrice">+$/mo</p>
                </div>

                <div className="add-div">
                    <button className="add-btn" onClick={this.addingPrices} value={this.state.pricesArr[1]}></button>
                    <div className="titles">
                        <p className="add-p1">Customizable profile</p>
                        <p className="add-p2">Custom theme on your profile</p>
                    </div>
                    <p className="addPrice">+$/mo</p>
                </div>

                <div className="carouselBtns">
                    <button className="prevStepBtn"  type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">Go Back</button>

                    <button className="nextStepBtn"  type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">Next Step</button>                
                </div>
            </div>
        )
    }
}

export default AddOns;