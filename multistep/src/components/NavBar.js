import React from "react";
import './NavBar.css'



const NavBar = (props) => {
   

    
        return(
            <div className="nav-container">
           
            <div className="nav-step" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1">
                <input type="button" className="numb-div" value={1}/>
                <div className="nav-titles">
                    <p className="sTitle">STEP 1</p>
                    <p className="sSubTitle">YOUR INFO</p>
                </div>
            </div>

            <div className="nav-step"  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">
                <input type="button" className="numb-div" value={2}/>
                <div className="nav-titles">
                    <p className="sTitle">STEP 2</p>
                    <p className="sSubTitle">SELECT PLAN</p>
                </div>
            </div>

            <div className="nav-step"  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">
                <input type="button" className="numb-div" value={3}/>
                <div className="nav-titles">
                    <p className="sTitle">STEP 3</p>
                    <p className="sSubTitle">ADD-ONS</p>
                </div>
            </div>

            <div className="nav-step"  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4">
                <input type="button" className="numb-div" value={4}/>
                <div className="nav-titles">
                    <p className="sTitle">STEP 4</p>
                    <p className="sSubTitle">SUMMARY</p>
                </div>
            </div>
        </div>

        )
    
}

export default NavBar;


//style={this.state.cardsMap === 2 ? activeSlide : null}