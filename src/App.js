import './App.css';
 import UseEffects from './UseEffects';
 import React,{useState} from 'react'
import Useref from './Useref'
function App() 
{
  const[myName,setmyname] =useState('thapa technical fdd');
  const changename=()=>{
setmyname("vinod thaap");
  }
  console.log(myName);
  return( 
        <div>
        <h1>{myName}</h1>
        <button className="btn" onClick={changename}>click me plz</button>
         { <UseEffects/>}
        {<Useref/>}
      </div>      
  )
}
export default App;
