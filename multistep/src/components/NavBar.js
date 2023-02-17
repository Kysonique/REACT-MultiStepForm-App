import React from "react";

class NavBar extends React.Component {
    constructor(cards){
        super(cards);
        this.state = {
            cardsMap: "",
        }
    }

    render(){
        return(
            // <div className="nav-div" data-toggle="buttons">
            //     <label className="nav-btn" >
            //         <input type="radio" name="options" id="option1" autocomplete="off">Step 1</input>
            //     </label>

            //     <label className="nav-btn">
            //         <input type="radio" name="options" id="option2" autocomplete="off">Step 2</input>
            //     </label>

            //     <label className="nav-btn">
            //         <input type="radio" name="options" id="option3" autocomplete="off">3</input>
            //     </label>

            //     <label className="nav-btn">
            //         <input type="radio" name="options" id="option4" autocomplete="off">4</input>
            //     </label>
            // </div>

            <>
            <h1>this is the nav</h1>
            </>

        )
    }
}

export default NavBar;