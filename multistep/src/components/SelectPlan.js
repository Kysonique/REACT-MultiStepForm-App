import React from "react"
import "./SelectPlan.css"



const SelectPlan = (props) => {
    
    const {priceValue, planName, ...restProps} = props

    const PlanOptions = [
        {type: 'Arcade', price: [9, 90]},
        {type: 'Advanced', price: [12, 120]},
        {type: 'Pro', price: [15, 150]}
    ]
      
        return(
            <>
            <p className="title">Select your plan</p>
            <p className="subtitle">You have the option of monthly or yearly billing.</p>

            <div className="cardContainer">
                <div 
                id={planName[0]}
                title={(props.duration ? PlanOptions[0].price[0] : PlanOptions[0].price[1])}
                className="pickPlan" 
                type="button" 
                onClick={props.getValue}>

                    <img className="arcadeIMG"></img>
                    <p className="planType">{planName[0]}</p>
                    <p className="price">${(props.duration ? PlanOptions[0].price[0] + '/mo' : PlanOptions[0].price[1] + '/yr')}</p>
                    <p className="monthsFree">{(props.duration ? null : '2 months free')}</p>
                </div>

                <div 
                id={planName[1]}
                title={(props.duration ? PlanOptions[1].price[0] : PlanOptions[1].price[1])}
                className="pickPlan"
                type="button"
                onClick={props.getValue}>
    
                    <img className="advIMG"></img>
                    <p className="planType">{props.planName[1]}</p>
                    <p className="price">${(props.duration ? priceValue[1][0] + '/mo' : priceValue[1][1] + '/yr')}</p>
                    <p className="monthsFree">{(props.duration ? null : '2 months free')}</p>
                </div>

                <div 
                id={planName[2]}
                onClick={props.getValue}
                title={(props.duration ? PlanOptions[2].price[0] : PlanOptions[2].price[1])}
                type="button"
                className="pickPlan">

                    <img className="proIMG"></img>
                    <p className="planType">{props.planName[2]}</p>
                    <p className="price">${(props.duration ? priceValue[2][0] + '/mo' : priceValue[2][1] + '/yr')}</p>
                    <p className="monthsFree">{(props.duration ? null : '2 months free')}</p>

                </div>
            </div>
            <button type="switch" className="toggle-btn" onClick={props.handleToggleBtn}>{(props.duration ? 'Monthly':'yearly')}</button>
            <div className="btn-div">
                <button className="prevStepBtn"  type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">Go Back</button>

                <button className="nextStepBtn" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">Next Step</button>
            </div>    
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