import './App.css';
import FormCard from './components/FormCard';
import React from 'react';
import NavBar from './components/NavBar';
import SelectPlan from './components/SelectPlan';
import AddOns from './components/AddOns';

//import AddOns from './components/AddOns';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      newplan:
        {
        urserinfo: {}
        },
        ToggleBtn: true
    }

    this.addPlan = this.addPlan.bind(this)
    this.handleToggleBtn = this.handleToggleBtn.bind(this)
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


  handleToggleBtn(){
    if (this.toggleBtn === true){
      this.setState(this.toggleBtn === false)
    } else{
      this.setState(this.toggleBtn === true)
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
        <div id="carouselExampleIndicators" class="carousel slide">
 
  <div class="carousel-inner">
    <div class="carousel-item active">
      <FormCard class="d-block w-100"/>
    </div>
    <div class="carousel-item">
      <SelectPlan class="d-block w-100"/>
    </div>
    <div class="carousel-item">
      <AddOns class="d-block w-100"/>
    </div>
  </div>
 
</div>


        </div> 
      </div>
    )
  }
}

export default App;


{/* <button onClick={this.handleToggleBtn}></button> */}
{/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="visually-hidden">Next</span>
</button> */}
