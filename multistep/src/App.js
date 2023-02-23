import './App.css';
import FormCard from './components/FormCard';
import React from 'react';
import NavBar from './components/NavBar';
import SelectPlan from './components/SelectPlan';
import AddOns from './components/AddOns';
import PlanSummary from './components/Summary';
import ThanYou from './components/Thanks';
//import AddOns from './components/AddOns';

const PlanOptions = [
    {type: 'Arcade', price: [9, 90]},
    {type: 'Advanced', price: [12, 120]},
    {type: 'Pro', price: [15, 150]}
]

const extras = [
    {type: 'Online service', price: [1, 10], free: '2 months free'},
    {type: 'Larger storage', price: [2, 20], free: '2 months free'},
    {type: 'Customizable profile', price: [2, 20], free: '2 months free'}
]

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        cardsMap: 1,
        type: "",
        extra: {},
        price: [],
        total: 0,
        ToggleBtn: true

    }
    this.calculateTotal = this.calculateTotal.bind(this)
    this.addPlan = this.addPlan.bind(this)
    this.handleToggleBtn = this.handleToggleBtn.bind(this)
    this.getValue = this.getValue.bind(this)
    this.addPricing = this.addPricing.bind(this)
    this.showPricing = this.showPricing.bind(this)
  }

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
      if (this.state.ToggleBtn === true){
        this.setState({ToggleBtn: false });
        console.log('yearly')
    
      } else{
        this.setState({ToggleBtn: true})
        console.log('monthly')
      }
    }

    //toggle btn needs to handle: setting true/false, render prices and abbr for monthly/yearly, add free
    getValue(i){
      if(this.state.ToggleBtn === true){
        console.log(i.target.id, i.target.value)
      }else{
        console.log(i.target.id, i.target.value)

      }
    }

    showPricing = ()=>{
        if (this.state.ToggleBtn === true){
          PlanOptions.map((obj) => {
          console.log(obj.price[0])
          return obj.price[0]
        })
      }else{
        PlanOptions.map((obj) =>{
          console.log(obj.price[1])
          return obj.price[1]
        })
      }
    } 
  



  addPricing(e){
    e.stopPropagation();
    this.setState({type: e.target.id, price: e.target.value})

    console.log(e.target.id, e.target.value)
  }

  calculateTotal(){
    const planTotal = this.state.price.reduce((i) => i + this.state.total)
      console.log(planTotal)
      return this.setState({total: planTotal})
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
        <div id="carouselExampleIndicators" className="carousel slide">
 
  <div className="carousel-inner">
    <div className="carousel-item active">
      <FormCard className="d-block w-100"
        handleSaveClick={this.addPlan}/>
    </div>

    <div className="carousel-item">
      <SelectPlan
      priceValue={PlanOptions.map((i) => i.price)}
      planName={PlanOptions.map((i) => i.type)}
      getValue={this.addPricing} 
      className="d-block w-100"
      duration={this.state.ToggleBtn}
      handleToggleBtn={this.handleToggleBtn}/>
    </div>

    <div className="carousel-item">
      <AddOns className="d-block w-100"
      duration={this.state.ToggleBtn}/>
    </div>

    <div className="carousel-item">
      <PlanSummary
      planTitle={this.state.type}
      planPrice={this.state.price}
      planTotal={this.state.total}
      extras={this.state.extra}
      calculate={this.calculate}
       className="d-block w-100"/>
    </div>

    <div className="carousel-item">
      <ThanYou className="d-block w-100"/>
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
