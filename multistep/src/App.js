import './App.css';
import FormCard from './components/FormCard';
import React from 'react';
import NavBar from './components/NavBar';


// function App(){
//   return (
//     <div>
//       <div className='nav-bar'>
//         <NavBar/></div>

//       <div className='card-div'>
//         <h1>Title</h1>
//         <h3>subtitle</h3>
//         <FormCard/><div/>
//     </div>
//   )
// }

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
      <>
        <div className='nav-bar'>
          <NavBar/>
        </div>

        <div className='card-div'>
          <h1>Title</h1>
          <h3>subtitle</h3>
          <FormCard/>
          <button onClick={this.test}></button>
        </div>
      </>
    )
  }
}

export default App;
