import React from "react";
import './NavBar.css'


class NavBar extends React.Component {
    constructor(cards){
        super(cards);
        this.state = {
            cardsMap: [],
        }
    }

    //onclick setState
    //handleStepClick
    

    render(){
        return(
            <>
        <div className="nav-container">
            <div className="nav-step">
                <div className="steps">
                    <p className="numb-tag">1</p></div>
                <div>
                    <p className="sTitle">STEP 1</p>
                    <p className="sSubTitle">YOUR INFO</p>
                </div>
            </div>

            <div className="nav-step">
                <div className="steps">
                    <p className="numb-tag">2</p></div>
                <div>
                    <p className="sTitle">STEP 2</p>
                    <p className="sSubTitle">YOUR INFO</p>
                </div>
            </div>

            <div className="nav-step">
                <div className="steps">
                    <p className="numb-tag">3</p></div>
                <div>
                    <p className="sTitle">STEP 3</p>
                    <p className="sSubTitle">YOUR INFO</p>
                </div>
            </div>

            <div className="nav-step">
                <div className="steps">
                    <p className="numb-tag">4</p></div>
                <div>
                    <p className="sTitle">STEP 4</p>
                    <p className="sSubTitle">YOUR INFO</p>
                </div>
            </div>
        </div>
        </>

        )
    }
}

export default NavBar;