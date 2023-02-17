import React from "react";
import FormCard from "./FormCard";

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            plan: "",
            price: [],
            addon: []

        }
    }

    YourInfo = () => {
        return(
            <FormCard></FormCard> 
        )
    }

    SelectPlan = () => {
        return(
            <div id="cardContainer">
                <div id="arcade">
                    <img alt=""></img>
                    <p id="planType"></p>
                    <p id="price"></p>
                </div>

                <div id="advanced">
                    <img alt=""></img>
                    <p id="planType"></p>
                    <p id="price"></p>
                </div>

                <div id="pro">
                    <img alt=""></img>
                    <p id="planType"></p>
                    <p id="price"></p>
                </div>
            </div>
        )
    }

    AddOns = () => {
        return(
            <div id="cardContainer">
                <div>
                    <button type="button" id="add"></button>
                </div>

                <div></div>

                <div></div>
            </div>
        )
    }

    Summary = () => {

    }

    ThankYou = () => {

    }

    render(){
        return(
        <this.SelectPlan/>
        )
    }
}
export default Cards;