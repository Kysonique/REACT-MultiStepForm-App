import './App.css';
import React from "react";
import FormCard from "./FormCard";
import SelectPlan from './SelectPlan';

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
            <FormCard/>
        )
    }

    YourPlan = () => {
        return(
            <SelectPlan/>
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