import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { ReactTyped } from "react-typed";
import download from"../src/image/download.jpg";

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
                <button className="bg-black text-white mt-5 p-3 rounded ">Get Start </button>

              </div>

            </div>

            {/* eneded */}

            <div className="max-w-[1240px] my-10px mx-auto  md:grid grid-cols-2"> 
            <div className="cols-span-1  md:w-[80%] m-4 text-center">
              <img src={download} alt="#" className="inline w-full " />
            </div>
            <div className=" cols-span-1  flex flex-col justify-center">
              <h1 className="font-bold text-green-500 my-2">Learn here</h1>
              <p className="m-3 text-justify">Each university determines admission and the number 
                of pre-approved prior learning credits that may count
                 toward the degree requirements according to institutional policies, 
                which may consider any existing credits you may have.
        
              </p>
              <button className="bg-black w-[30%] mx-auto  text-white p-3 rounded ">Get Start </button>
            </div>
           
            </div>
{/*    */}

<div className="bg-[#2699fb] p-4">
  <div className=" max-w-[1240px] mx-auto md:flex justify-between py-[50px] ">
    <div className="m-2">
    <h1 className="text-white text-2xl md:text-[40px] p-3 font-bold ">Want to learn latest I.T skills?</h1>
    <p className="text-white">Sign up  and stay up to date.</p>
     </div>

    <div className="m-2">
      <input type="text" className="p-3   rounded mb-2 mr-2 text-slate-700" placeholder='Email'/>
      <button className="bg-[black] text-white rounded   p-3">Notify Me</button>
      <br/>
      <p className="text-white m-2">
        We care about the protection of your data. Read our <br/>
      <p className="text-black"> Privacy Policy</p>
      </p>
       </div>

  </div>

</div>



{/* plam */}
<div className="py-[100px] px-2 ">
  <div className=" max-w-[1240px] mx-auto md:grid grid-cols-3 gap-5">

    <div className="shadow-xl  h-[500px]  bg-gray-50 hover:scale-110 duration-500">first</div>
    <div className="shadow-xl  h-[500px] bg-gray-300 hover:scale-110 duration-500">second</div>
    <div className="shadow-xl  h-[500px]  bg-gray-50  hover:scale-110 duration-500">Third</div>


  </div>
</div>

 {/* footer
<div className=" mx-auto flex justify-between  ">
  <div className="border border-black   " > 1</div>
  <div  className="border border-black ">2</div>
  <div className="border border-black "> 7</div>
</div> */}




    </>
  );
}

export default App;
