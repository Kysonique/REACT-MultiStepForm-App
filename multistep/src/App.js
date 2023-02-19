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

        <div className='card-div'>
          <FormCard/>
          <button onClick={this.test}></button>
        </div>
      </div>
    )
  }
}

export default App;
