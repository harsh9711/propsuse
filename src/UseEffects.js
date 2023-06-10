import React, { useState, useEffect } from 'react';
const UseEffects =()=>{
    
    const[count,setCount]=useState(0);
    useEffect(()=>{
        document.title=`Chats(${count})`
    });
    console.log(useState('thapa technical'));
    useEffect(()=>{
        console.log('hello useffects')
    });
    console.log('hello outside');
    return (
        <div>
            <h1>{count}</h1>
            <button className="btn" onClick={
                ()=>setCount(count+1)
            }>Clicks</button>
        </div>
    )
}
export default UseEffects;