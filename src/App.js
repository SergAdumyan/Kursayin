import { useEffect, useState } from "react";
import "./App.css";
import Intro from "./Intro";
import Register from "./Register";
import { Route, Routes, BrowserRouter,} from "react-router-dom";
import ReplacePassword from "./ReplacePassword";
import Home from "./Home";

function App() {

  const arr = [
    { username: "SergeyAdumyan", password: "12345678" },
    { username: "SuroMangasaryan", password: "Suro2004" },
  ];
  
  
   


  useEffect(() => {
    if (!localStorage.hasOwnProperty("array")) {
      localStorage.setItem("array", JSON.stringify(arr));
    }
    
    
  }, []);
    
    

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path ="/register" element={<Register />} />
          <Route path="/replacepassword" element={<ReplacePassword/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
