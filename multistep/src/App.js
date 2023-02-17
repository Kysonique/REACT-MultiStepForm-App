import './App.css';
import FormCard from './components/FormCard';
import Cards from './components/Cards';
import React from 'react';

(async ()=>{
  const { worker } = await import("../public/mocks/browser");
  await worker.start();
  
})


function App(){
  return (
      <div>
        <FormCard/>
      </div>
    );
  
}

export default App;
