import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { ReactTyped } from "react-typed";


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
      <ul
            className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[126px] ${
              toggle ? "left-0" : "left-[-100%]"
            }`}
          >        <li className="p-5">Home</li>
        <li className="p-5">Company</li>
        <li className="p-5">Resource</li>
        <li className="p-5">AboutUs</li>
        <li className="p-5">Contact</li>
      </ul>

      </div>  


      </div>   

      {/* banner part */}

            <div className="bg-[#2699fb] w-full py-[100px] ">
              <div className="max-w-[1240px] mx-auto text-center font-bold text-white  ">
                <div className="text-xl md:text-4xl  md:mt-4 text-red-200 ">
                  Learn with us.
                </div>
                <h2 className="  md:mt-4 font-bold text-5xl md:text-[70px]">Grow with us.</h2>
                <div className="text-[20px] md:text-[50px] md:mt-4">
                  Learn
                  <ReactTyped className="pl-3"
                   strings={["After +2", "Bachelors"]} 
                   typeSpeed={120}
                   loop={true} 
                   backSpeed={50}/>
                </div>
              </div>

            </div>

            {/* eneded */}

            <div className="max-w-[1240] mx-auto h-[200px] border border-black grid grid-cols-3"> 
            <div className="border border-black h-[200]"></div>
            <div className="border border-black h-[200]"></div>
            <div className="border border-black h-[200]"></div>
            </div>



    </>
  );
}

export default App;
