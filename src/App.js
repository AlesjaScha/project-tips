
import { useEffect, useState } from 'react';
import './App.css';

function App() {

const[tips,setTips]=useState("");


useEffect(()=>{
newTips();

},[])
const newTips= async()=>{
  const responce = await fetch("http://www.boredapi.com/api/activity/");
  const data = await responce.json();
  setTips(data.activity);
}

  return (

    <div>
      <div className='heading'>
      <h1>Top tips to keep yourself busy!</h1>
      </div>
      <div className='container'>
       <p>{tips}</p>
       </div>

       <div className='submit'>
       <button className="btn"onClick={newTips}>Click hier</button>
       </div>
       
    </div>
  );
}

export default App;
