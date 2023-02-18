import React from "react";

class NavBar extends React.Component {
    constructor(cards){
        super(cards);
        this.state = {
            cardsMap: [],
        }
    }

    //onclic setState
    

    render(){
        return(
        <>
            <a className="nav-step">
                <div className="step1"><p>1</p></div>
                <div>
                    <p>STEP 1</p>
                    <p>YOUR INFO</p>
                </div>
            </a>
        </>

        )
    }
}

export default NavBar;