import React from "react"
import "./SelectPlan.css"

const SelectPlan = (props) => {
    //chosePlan = PlanOptions.
    // function savePlan(e){
    //     this.setState({type: e.target.value, price: e.target.value})
    //     console.log(e.target.value)
    // }
    const {priceValue, planName, ...restProps} = props

    
        return(
            <>
            <p className="title">Select your plan</p>
            <p className="subtitle">You have the option of monthly or yearly billing.</p>

            <div className="cardContainer">
                <div className="pickPlan" id="arcade" typeof="button" onClick={props.getValue}>
                    <img id="arcadeIMG"></img>
                    <p id="planType">{props.planName[0]}</p>
                    <p id="price">${props.priceValue}</p>
                    <p id="monthsFree"></p>
                </div>

                <div className="pickPlan" id="advanced">
                    <img id="advIMG"></img>
                    <p id="planType"></p>
                    <p id="price">$price/abbr</p>
                    <p id="monthsFree">free</p>

                </div>

                <div className="pickPlan" id="pro">
                    <img id="proIMG"></img>
                    <p id="planType"></p>
                    <p id="price">$price/abbr</p>
                    <p id="monthsFree">free</p>

                </div>
            </div>
            <div><button>toggle</button></div>
                <button className="prevStepBtn"  type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">Go Back</button>

                <button className="nextStepBtn" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">Next Step</button>
            </>
        )
    
}

export default SelectPlan;

// choosePrice(){
//     this.planPrices.forEach(price => {
//         if (this.duration === true){
//             return price[0]
//         }else{
//             return price[1]
//         }
//     })
    
// }