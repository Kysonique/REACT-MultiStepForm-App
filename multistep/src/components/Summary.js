import React from "react";
import "./Summary.css"

//state properties = plantype added services then total
// const Summary = (props) => {
//     const {handleTotal, }
// }
const PlanSummary = (props) => {
    return(
        <div>
            <p className="title">Finishing up</p>
            <p className="subtitle">Double-check everything looks ok before confirming.</p>
        <div className="summary-cont">
            <div id="plantype" className="total-info">
                <div>
                    <p>{props.planTitle}</p>
                    <p id="change">Change</p>
                </div>
                    <p className="price-tag">${props.price}/</p>
            </div>
            <hr id="hr"/>
            <div id="planExtras" className="total-info">
                <p>{props.extra}</p>
                <p className="price-tag">$/</p>
            </div>

            <div className="total-divs">
                <p>Total</p>
                <p id="tp-tag" className="price-tag">${props.total}/</p>
            </div>
        </div>
        <button className="prevStepBtn"  type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">Go Back</button>

        <button className="confirmBtn" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">Confirm</button>

        </div>
    )
}

export default PlanSummary; 