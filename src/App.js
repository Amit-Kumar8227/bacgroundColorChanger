import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  
  const[colar, setcolor]=useState("burlywood");

  const whiteSmoke=()=>{
    setcolor("whiteSmoke");
  }

  const darkcyan=()=>{
    setcolor("darkcyan");
  }

  const darkorange=()=>{
    setcolor("darkorange");
  }

  const gainsboro=()=>{
    setcolor("gainsboro");
  }

  return (
    <div className="App" style={{background:colar, height:"450px", borderRadius:"60px"}}>
    <h1 style={{color:"brown"}}>Bg-Changer
    <p>It is background color changer, it takes only one click to change background color.</p></h1>
      <div style={{margin:"100px 400px",padding:"230px 60px",display:"flex",flexWrap:"wrap", alignItems:"center"}}>
          <div style={{padding:"10px 2px"}}>
            <button onClick={whiteSmoke} style={{borderRadius:"30px", padding:"5px 5px"}}>whiteSmoke</button>
          </div>
          <div style={{padding:"10px 2px"}}>
            <button onClick={darkcyan} style={{borderRadius:"30px", padding:"4px 5px"}}>darkcyan</button>
          </div>
          <div style={{padding:"10px 2px"}}>
            <button onClick={darkorange} style={{borderRadius:"30px", padding:"4px 5px"}}>darkorange</button>
          </div>
          <div style={{padding:"10px 2px"}}>
            <button onClick={gainsboro} style={{borderRadius:"30px", padding:"4px 5px"}}>gainsboro</button>
          </div>
      </div>
    </div>
  );
}

export default App;
