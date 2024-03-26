import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
    // <div className="flex w-full h-screen">
    //   <div className="w-full flex items-center justify-center lg:w-1/2">
    //   <Login /> 
    //   </div>
    //   <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-pink-200">
    //     <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce shadow-2xl"/>
    //     <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-md"/>
    //   </div>
      
    // </div>

    
    
    
  
  );
}

export default App;
