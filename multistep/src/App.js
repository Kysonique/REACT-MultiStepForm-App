import './App.css';
import FormCard from './components/FormCard';
import React from 'react';
import NavBar from './components/NavBar';
import SelectPlan from './components/SelectPlan';
import AddOns from './components/AddOns';
import PlanSummary from './components/Summary';
import ThanYou from './components/Thanks';
//import AddOns from './components/AddOns';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        type: "Example",
        extra: [
          {type: "example", price: 1},
          {type: "example", price: 2},
          {type: "example", price: 3}],
        price: [1, 2, 2],
        total: 0,
        ToggleBtn: true
    }
    this.calculateTotal = this.calculateTotal.bind(this)
    this.addPlan = this.addPlan.bind(this)
    this.handleToggleBtn = this.handleToggleBtn.bind(this)
    this.getValue = this.getValue.bind(this)

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


  PlanOptions = [
    {type: 'Arcade', price: [9, 90], abbr:"mo, yr", free:'2 months free'},
    {type: 'Advanced', price: [12, 120], abbr:"mo, yr", free:'2 months free'},
    {type: 'Pro', price: [15, 150], abbr:"mo, yr", free:'2 months free'}
  ]

  extras = [
    {type: 'Online service', price: [1, 10]},
    {type: 'Larger storage', price: [2, 20]},
    {type: 'Customizable profile', price: [2, 20]}
  ]


  calculateTotal(){
    const planTotal = this.state.price.reduce((i) => i + this.state.total)
      console.log(planTotal)
      return this.setState({total: planTotal})
  }

  getTotalPlan(){

  }

  getValue(){
    let newArr;
    this.PlanOptions.forEach((obj) => {
        if(this.state.ToggleBtn === true){
          newArr = obj.price[0];
          console.log(newArr)
        }else{
            console.log(obj.price[1])
            return this.state.price.push(obj.price[1])

        }
    })
}

  handleToggleBtn(){
    if (this.state.ToggleBtn === true){
      this.setState(this.state.ToggleBtn === false)
    } else{
      this.setState(this.state.ToggleBtn === true)
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
        <div id="carouselExampleIndicators" className="carousel slide">
 
  <div className="carousel-inner">
    <div className="carousel-item active">
      <FormCard className="d-block w-100"
        handleSaveClick={this.addPlan}/>
    </div>

    <div className="carousel-item">
      <SelectPlan
      getValue={this.getValue} 
      className="d-block w-100"/>
    </div>

    <div className="carousel-item">
      <AddOns className="d-block w-100"/>
    </div>

    <div className="carousel-item">
      <PlanSummary
      planTitle={this.state.type}
      price={this.state.price}
      total={this.state.total}
      extras={this.state.extra}
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
