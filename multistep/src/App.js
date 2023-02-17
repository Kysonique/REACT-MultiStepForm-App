import './App.css';
import FormCard from './components/FormCard';
import React from 'react';
import NavBar from './components/NavBar';


function App(){
  return (
    <>
    <div className='nav-bar'><NavBar/></div>
      <FormCard/>
    </>
  )
}

// class App extends React.Component(){
//   constructor(){
//     super();
//     this.state = {
//       planInfo: {}
//     }
//   }
//   // test() {
//   //   fetch('/verifyEmail', {
//   //     method: 'post', 
//   //     headers:{'Content-Type':'application/json'}
//   // })
  


//   render(){
//     return (
//         <>
//           <FormCard/>
//           <button type='button'></button>
//         </>
//     )
    
    
//   }
// }

export default App;
