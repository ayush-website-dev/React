import React from 'react';
import { Routes,Route } from "react-router-dom";
import './App.css';
import Nav from "./Nav";
import Home from "./samples/Home";
import Clock from "./samples/Clock";
import Prog1 from "./samples/Prog1";
import Error from "./samples/Error";


function App() {
  return (
    <>
    <Nav />
    <Routes>
            
        {/* <Route exact path="/" Component={}/> */}
        <Route exact path="/Clock" Component={Clock}/>
        <Route exact path="/Prog1" Component={Prog1}/>
        <Route Component={Error} />
            
    </Routes>

    
      
    
    </>
  );
}

export default App;