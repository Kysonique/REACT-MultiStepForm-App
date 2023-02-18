import './App.css';
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
        //
        const planPrices =[[9, 90] [12, 120] [15, 150]]
        function choosePrice(monthly, yearly){
            // let pricesArr = [...planPrices]
            

        }
        return(
            <div id="cardContainer">
                <div id="arcade">
                    <img alt=""></img>
                    <p id="planType">Arcade</p>
                    <p id="price"></p>
                    <p className="monthsFree"></p>
                </div>

                <div id="advanced">
                    <img alt=""></img>
                    <p id="planType">Advanced</p>
                    <p id="price"></p>
                    <p className="monthsFree"></p>

                </div>

                <div id="pro">
                    <img alt=""></img>
                    <p id="planType">Pro</p>
                    <p id="price">$</p>
                    <p className="monthsFree"></p>

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

    handleTogglePlanBtn = () => {

    }

    render(){
        return(
        <this.SelectPlan/>
        )
    }
}
export default Cards;