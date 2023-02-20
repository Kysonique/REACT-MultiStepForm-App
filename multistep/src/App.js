import './App.css';
import FormCard from './components/FormCard';
import React from 'react';
import NavBar from './components/NavBar';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      newplan:[
        {
        urserinfo: [],
        total: []
        }
      ]
    }
  }
//   resetState =() => this.setState({
//     username: "",
//     email: "",
//     phone: "",
//     id: this.props.key
// })
  addPlan(newPlanObj){
    const newPlanInfo = JSON.parse(JSON.stringify(this.state.newplan))
    newPlanInfo.push(newPlanObj)
    return this.setState({
      newplan:[
        {
        urserinfo: {newPlanInfo}
         }]
        })
  }

  totalPrice(pricingObj){
    const priceArr = JSON.parse(JSON.stringify(this.state.pricing))
    priceArr.push(pricingObj)
    return this.setState({
      newplan:[
        {
        total: {priceArr}
         }]    
        })
    
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
        <FormCard
        addPlan ={this.addPlan} 
        handleSaveClick = {this.addPlan}/>

        {/* <div id="carouselPage" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                  <FormCard class="d-block w-100"/>
              </div>

              <div class="carousel-item">
                  <SelectPlan class="d-block w-100"/>
              </div>
            </div>
            
          <button class="carousel-control-next" type="button" data-bs-target="#carouselPage" data-bs-slide="next">Next Step</button>
        </div>*/}
    </div> 
      </div>
    )
  }
}

export default App;
