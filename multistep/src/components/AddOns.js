import "./AddOns.css";
import React from "react";


const AddOns = (props) => {
    const {duration, planName, ...restProps} = props
   

    const extras = [
        {type: 'Online service', price: [1, 10]},
        {type: 'Larger storage', price: [2, 20]},
        {type: 'Customizable profile', price: [2, 20]}
    ]

    // checkBoxes(){
    //     return at
    // }

    function addingPrices(e){
        console.log(e.target.value, e.target.title)
    }
    



    
        return(
            <div>
                <p className="title">Pick add-ons</p>
                <p className="subtitle">Add-ons help enhance your gaming experience.</p>

                <div className="add-div">
                    <div className="form-check">
                        <input id="add-btn" className="form-check-input" type="checkbox" alt={duration? extras[0].price[0] : extras[0].price[1]} onClick={props.getValue} title='Online service'/>
                    </div>
                    <div className="titles">
                        <p className="add-p1">Online service</p>
                        <p className="add-p2">Access multiplayer games</p>
                    </div>
                    <p className="addPrice">+${duration? extras[0].price[0] + '/mo' : extras[0].price[1] + '/yr'} </p>
                </div>

                <div className="add-div">
                    <div className="form-check">
                    <input id="add-btn" className="form-check-input" type="checkbox" alt={duration? extras[1].price[0] : extras[1].price[1]}  onClick={props.getValue} title='Larger storage'/>
                </div>                    
                <div className="titles">
                        <p className="add-p1">Larger storage</p>
                        <p className="add-p2">Extra 1TB of cloud save</p>
                    </div>
                    <p className="addPrice">+${duration? extras[1].price[0] + '/mo' : extras[1].price[1] + '/yr'}</p>
                </div>

                <div className="add-div">
                    <div className="form-check">
                        <input id="add-btn" className="form-check-input" type="checkbox" alt={duration? extras[2].price[0] : extras[2].price[1]}  onClick={props.getValue} title='Customizable profile'/>
                    </div>
                    <div className="titles">
                        <p className="add-p1">Customizable profile</p>
                        <p className="add-p2">Custom theme on your profile</p>
                    </div>
                    <p className="addPrice">+${duration? extras[2].price[0] + '/mo' : extras[2].price[1] + '/yr'}</p>
                </div>

                <div className="btn-div">                    
                    <button className="prevStepBtn"  type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">Go Back</button>

                    <button className="nextStepBtn"  type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" >Next Step</button>                
                </div>
            </div>
        )
    
}

export default AddOns;

//id="flexCheckDefault"