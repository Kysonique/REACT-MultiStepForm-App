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

    handleNextPlanBtn = () => {
        let planArr = [ this.FormCard, this.SelectPlan];

    }

    render(){
        return(
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <FormCard class="d-block w-100"/>
                    </div>

                    <div class="carousel-item">
                        <SelectPlan class="d-block w-100"/>
                    </div>
                </div>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next"></button>
            </div>
        
        )
    }
}
export default Cards;