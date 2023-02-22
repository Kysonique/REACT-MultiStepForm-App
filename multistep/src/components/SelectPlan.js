import React from "react"
import "./SelectPlan.css"

class SelectPlan extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
                type:"",
                price:[]
        }
    }

    PlanOptions = [
        {type: 'Arcade', price: [9, 90], abbr:"mo, yr", free:'2 months free'},
        {type: 'Advanced', price: [12, 120], abbr:"mo, yr", free:'2 months free'},
        {type: 'Pro', price: [15, 150], abbr:"mo, yr", free:'2 months free'}

    ]

    //chosePlan = PlanOptions.
    savePlan(e){
        console.log(e.target.value)
    }




    
    render(){
        return(
            <>
            <p className="title">Select your plan</p>
            <p className="subtitle">You have the option of monthly or yearly billing.</p>

            <div className="cardContainer">
                <div className="pickPlan" id="arcade" typeof="button" value={100} onClick={this.props.getValue}>
                    <img id="arcadeIMG"></img>
                    <p id="planType"></p>
                    <p id="price">$</p>
                    <p id="monthsFree"></p>
                </div>

                <div className="pickPlan" id="advanced">
                    <img id="advIMG"></img>
                    <p id="planType">{this.PlanOptions[1].type}</p>
                    <p id="price">${this.PlanOptions[1].price}/{this.PlanOptions[1].abbr}</p>
                    <p id="monthsFree">{this.PlanOptions[1].free}</p>

                </div>

                <div className="pickPlan" id="pro">
                    <img id="proIMG"></img>
                    <p id="planType">{this.PlanOptions[2].type}</p>
                    <p id="price">${this.PlanOptions[2].price}/{this.PlanOptions[2].abbr}</p>
                    <p id="monthsFree">{this.PlanOptions[1].free}</p>

                </div>
            </div>
                <button className="prevStepBtn"  type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">Go Back</button>

                <button className="nextStepBtn"  type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">Next Step</button>
            </>
        )
    }
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