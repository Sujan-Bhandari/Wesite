import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";



function App() {
  const [toggle, setToggle] = useState(false);

  
  return (
    <>
    <div className="bg-[green] p-6" >

    <div className="max-w-[1240px] py-[15px] item-center flex justify-between  mx-auto">
      <div className="text-3xl font-bold  text-yellow-300">
        Info
        <span className="text-black">dev</span> 
      </div>
      {
        toggle ?
        <AiOutlineClose onClick={()=>setToggle(!toggle)}  className="text-white text-5xl md:hidden block"/>
        :
        <AiOutlineMenu onClick={()=>setToggle(!toggle)} className="text-white text-5xl md:hidden block" />

      }
     
      <ul className="hidden md:flex text-red-300 gap-8">
        <li>Home</li>
        <li>Company</li>
        <li>Resource</li>
        <li>AboutUs</li>
        <li>Contact</li>
      </ul>

      {/*Responsive menu */}
      <ul className={" md:hidden w-full h-screen text-white  fixed bg-black  top-[126px] ${toggle ? 'left-[0]' :'left-[-100%]'"}>
        <li className="p-5">Home</li>
        <li className="p-5">Company</li>
        <li className="p-5">Resource</li>
        <li className="p-5">AboutUs</li>
        <li className="p-5">Contact</li>
      </ul>

      </div>  


      </div>   
    </>
  );
}

export default App;
