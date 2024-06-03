import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

function App() {
  return (
    <>
    <div className="bg-[green] p-6" >

    <div className="max-w-[1240px] py-[15px] item-center flex justify-between  mx-auto">
      <div className="text-3xl font-bold  text-yellow-300">
        Info
        <span className="text-black">dev</span> 
      </div>
      <AiOutlineMenu className="text-white text-5xl md:hidden block" />

      <ul className="hidden md:flex text-red-300 gap-8">
        <li>Home</li>
        <li>Company</li>
        <li>Resource</li>
        <li>AboutUs</li>
        <li>Contact</li>
      </ul>
      </div>  


      </div>   
    </>
  );
}

export default App;
