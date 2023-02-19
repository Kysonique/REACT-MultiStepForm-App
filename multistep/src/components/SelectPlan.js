import React from "react"

class SelectPlan extends React.Component{
    constructor(props) {
        super();
        this.state = {
            planPrices: [
                [9, 90],
                [12, 120],
                [15, 150]
            ],

            duration: true
        }
    }

    choosePrice(){
        this.planPrices.forEach(price => {
            if (this.duration === true){
                return price[0]
            }else{
                return price[1]
            }
        })
        
    }
    
    render(){
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
}

export default SelectPlan;