import './App.css';
import FormCard from './components/FormCard';
import React from 'react';
import NavBar from './components/NavBar';
import SelectPlan from './components/SelectPlan';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      planInfo: {}
    }
  }
  test() {
    fetch('/verifyEmail', {
      method: 'post', 
      headers:{'Content-Type':'application/json'}
  })}
  
  render(){
    return (
      <div className='app-container'>
        <div className='nav-bar'>
          <NavBar/>
        </div>
        <button className='testbtn' onClick={this.test}>test</button>


      <div className='card-div'>
        <div id="carouselPage" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                  <FormCard class="d-block w-100"/>
              </div>

              <div class="carousel-item">
                  <SelectPlan class="d-block w-100"/>
              </div>
            </div>
            
          <button class="carousel-control-next" type="button" data-bs-target="#carouselPage" data-bs-slide="next">Next Step</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
