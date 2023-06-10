import React,{useEffect,useState,useRef} from "react";
const Useref=()=>{
    const[mydata,setmydata]=useState("");
    const count=useRef(10);
     console.log(count);
      useEffect(()=>{
         count.current=count.current+1;
      });
      const inputElem=useRef("");
      console.log("harsh",inputElem);
    const changeStyle=()=>{
        inputElem.current.style.backgroundColor="#82E0AA";
        inputElem.current.focus();
    };
     return(
        <>
            <input
            ref={inputElem}
            type="text"
            value={mydata}
            onChange={(e)=>setmydata(e.target.value)}
            /> 
            <br/>
             {/* <p>the no: {count.current}</p>  */}
            <button onClick={changeStyle}>Submit</button>
        </>
     );
};
export default Useref;
