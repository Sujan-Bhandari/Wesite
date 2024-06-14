import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import saral from "../src/image/saral.jpg";
import download from "../src/image/download.jpg";
import images from "../src/image/images.jpg";

function App() {
  const [toggle, setToggle] = useState(true);
  const [dropdowns, setDropdowns] = useState({
    master: false,
    bachelor: false,
    intermediate: false,
    diploma: false,
  });

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleDropdown = (dropdown) => {
    setDropdowns({
      ...dropdowns,
      [dropdown]: !dropdowns[dropdown],
    });
  };

  return (
    <>
      {/* Section */}
      <div className="flex items-center justify-between p-4 bg-gray-100 flex-wrap">
        <div id="logo" className="text-3xl text-orange-500">
          Info<span className="text-black">Dev</span>
        </div>

        <div className="flex items-center space-x-4 w-full md:w-auto mt-2 md:mt-0">
          <div id="search" className="relative flex-grow md:flex-grow-0">
            <input
              type="text"
              placeholder="Search here"
              className="w-full px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <CiSearch className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={handleToggle}
              className="flex items-center px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              Categories
              {toggle ? <AiOutlineMenu className="ml-2" /> : <AiOutlineClose className="ml-2" />}
            </button>
            {!toggle && (
              <div className="absolute right-0 w-48 mt-2 bg-white  rounded shadow-10">
                <ul className="py-1">
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">University</li>
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Colleges</li>
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Entrance</li>
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Courses</li>
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Study Material</li>
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">News</li>
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Events</li>
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Ask & Answer</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div id="login" className="flex space-x-4 mt-2 md:mt-0">
          <button className="px-4 py-2 text-sm text-white font-bold bg-orange-500 rounded-lg hover:bg-white hover:text-black">
            Login
          </button>
          <button className="px-4 py-2 text-sm text-white font-bold bg-green-500 rounded-lg hover:bg-white hover:text-black">
            Sign Up
          </button>
        </div>
      </div>
      {/* section */}

      {/* Navigation */}


      <nav id="navigation" className="text-white bg-orange-500 p-7 hidden md:block">
        <ul className="mx-auto flex justify-center gap-20">
          <li>
            <button onClick={() => handleDropdown('master')}>Master Entrance</button>
            {dropdowns.master && (
              <div className="absolute right-0 w-48 mt-2 bg-white rounded shadow-10">
                <ul className="py-1">
                <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tribhuvan Universtiy </li>
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Pokhara University </li>
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Far-Western University  </li>
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Lumbini Bouddha University  </li>
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Nepal Open University  </li>
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Purbanchal University   </li>
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Kathmandu University  </li>
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Rajarshi Janak University   </li>
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Agricultural & Forestry University   </li>
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Mid Western University    </li>

                </ul>
              </div>
            )}
          </li>
          <li>
            <button onClick={() => handleDropdown('bachelor')}>Bachelor Entrance</button>
            {dropdowns.bachelor && (
              <div className="absolute right-0 w-48 mt-2 bg-white rounded shadow-10">
                <ul className="py-1">
                <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tribhuvan Universtiy </li>
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Pokhara University </li>
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Far-Western University  </li>
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Lumbini Bouddha University  </li>
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Nepal Open University  </li>
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Purbanchal University   </li>
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Kathmandu University  </li>
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Rajarshi Janak University   </li>
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Agricultural & Forestry University   </li>
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> ICAN     </li>
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> WestCliff University    </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <button onClick={() => handleDropdown('intermediate')}>Intermediate Entrance</button>
            {dropdowns.intermediate && (
              <div className="absolute right-0 w-48 mt-2 bg-white rounded shadow-10">
                <ul className="py-1">
                <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">NEB </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <button onClick={() => handleDropdown('diploma')}>Diploma Entrance</button>
            {dropdowns.diploma && (
              <div className="absolute right-0 w-48 mt-2 bg-white rounded shadow-10">
                <ul className="py-1">
                <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">CTEVT </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </nav>
{/* navgivation */}


{/* main photo */}
<div className="photo">
<img className="md:w-full md:h-[600px] " src={saral} alt="" /> 
</div>

{/* online class hover  */}
<div className="py-24 px-2">
  <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
    <div className="shadow-xl h-full bg-gray-50 hover:scale-105 transition-transform duration-500 p-6 flex flex-col items-center">
      <img className="w-20 h-20 rounded-full mb-4" src={download} alt="" />
      <h2 className="text-[#4095ba] font-bold text-xl text-center">Career Counseling</h2>
      <p className="text-justify mt-4">
        We conduct career counseling of different faculties online or through conducting counseling sessions in the different provisions of Nepal. We clear every doubt of students related to the professional career which they want to be in the future. Students will be clear about the advantages and disadvantages of every profession.
      </p>
    </div>

    <div className="shadow-xl h-full bg-gray-50 hover:scale-105 transition-transform duration-500 p-6 flex flex-col items-center">
      <img className="w-20 h-20 rounded-full mb-4" src={download} alt="" />
      <h2 className="text-[#4095ba] font-bold text-xl text-center">Refer and Earn</h2>
      <p className="text-justify mt-4">
        We provide a unique referral code to every user. Users can use this code and refer to their friends and family. We provide a point according to the number of refer and provide earning amount to them who refer to others and also for them who accept referral code of their friends. The more will be the referred person more will be his/her earning.
      </p>
    </div>

    <div className="shadow-xl h-full bg-gray-50 hover:scale-105 transition-transform duration-500 p-6 flex flex-col items-center">
      <img className="w-20 h-20 rounded-full mb-4" src={download} alt="" />
      <h2 className="text-[#4095ba] font-bold text-xl text-center">Ask Doubts</h2>
      <p className="text-justify mt-4">
        By observing the student's problems, we created the Forum to ask any kind of doubts and problems related to faculty subjects through text or photos and we have an expert to give appropriate answers. Not only questions, everyone can ask their confusion or doubts related to education, educational fields, schools, colleges, and universities as well.
      </p>
    </div>

    <div className="shadow-xl h-full bg-gray-50 hover:scale-105 transition-transform duration-500 p-6 flex flex-col items-center">
      <img className="w-20 h-20 rounded-full mb-4" src={download} alt="" />
      <h2 className="text-[#4095ba] font-bold text-xl text-center">Online Mock Test</h2>
      <p className="text-justify mt-4">
        Study and entertainment can be simultaneous. Prepare for the entrance exam by attending a mock test with questions from the Old Questions collection and Model Questions. Also, questions are bundled model-wise so that you can practice for entrance.
      </p>
    </div>
  </div>
</div>

{/* Ended  */}

{/* Entrance Exam  */}
<div className="entranceexam text-indigo-200">
  <div>
    <h2 className="text-center p-5 mt-3 text-orange-500 font-bold text-2xl">
      ENTRANCE <span className="text-[#4095ba]"> EXAM</span>
    </h2>

    <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  ">


      <div className="p-3  shadow-2xl font-bold">
        <img src={images} alt="" className="w-full h-40 object-cover" />
        <h3 className="text-gray-500 p-1 m-1">Tribhuvan University</h3>
        <h2 className="text-[#4095ba] p-1 m-1">BCA </h2>
        <div className="border border-black bg-orange-400 p-2 m-1 hover:bg-orange-100 transition-colors">
          <p className="text-black text-center">Find out More</p>
        </div>
      </div>

      <div className=" shadow-2xl p-3 font-bold">
        <img src={images} alt="" className="w-full h-40 object-cover" />
        <h3 className="text-gray-500 p-1 m-1">Tribhuvan University</h3>
        <h2 className="text-[#4095ba] p-1 m-1">B.SC.CSIT</h2>
        <div className="border border-black bg-orange-400 p-2 m-1 hover:bg-orange-100 transition-colors">
          <p className="text-black text-center">Find out More</p>
        </div>
      </div>

      <div className=" shadow-2xl p-3 font-bold">
        <img src={images} alt="" className="w-full h-40 object-cover" />
        <h3 className="text-gray-500 p-1 m-1">Tribhuvan University</h3>
        <h2 className="text-[#4095ba] p-1 m-1">BE CIVIL </h2>
        <div className="border border-black bg-orange-400 p-2 m-1 hover:bg-orange-100 transition-colors">
          <p className="text-black text-center">Find out More</p>
        </div>
      </div>

      <div className=" shadow-2xlp-3 font-bold">
        <img src={images} alt="" className="w-full h-40 object-cover" />
        <h3 className="text-gray-500 p-1 m-1">Tribhuvan University</h3>
        <h2 className="text-[#4095ba] p-1 m-1">BSW </h2>
        <div className="border border-black bg-orange-400 p-2 m-1 hover:bg-orange-100 transition-colors">
          <p className="text-black text-center">Find out More</p>
        </div>
      </div>

      <div className=" shadow-2xl p-3 font-bold">
        <img src={images} alt="" className="w-full h-40 object-cover" />
        <h3 className="text-gray-500 p-1 m-1">Tribhuvan University</h3>
        <h2 className="text-[#4095ba] p-1 m-1">BBA </h2>
        <div className="border border-black bg-orange-400 p-2 m-1 hover:bg-orange-100 transition-colors">
          <p className="text-black text-center">Find out More</p>
        </div>
      </div> 

      <div className=" shadow-2xl p-3 font-bold">
        <img src={images} alt="" className="w-full h-40 object-cover" />
        <h3 className="text-gray-500 p-1 m-1">Tribhuvan University</h3>
        <h2 className="text-[#4095ba] p-1 m-1">BHM </h2>
        <div className="border border-black bg-orange-400 p-2 m-1 hover:bg-orange-100 transition-colors">
          <p className="text-black text-center">Find out More</p>
        </div>
      </div>

      
      <div className=" shadow-2xl p-3 font-bold">
        <img src={images} alt="" className="w-full h-40 object-cover" />
        <h3 className="text-gray-500 p-1 m-1">Tribhuvan University</h3>
        <h2 className="text-[#4095ba] p-1 m-1">MBBS </h2>
        <div className="border border-black bg-orange-400 p-2 m-1 hover:bg-orange-100 transition-colors">
          <p className="text-black text-center">Find out More</p>
        </div>
      </div>

      <div className=" shadow-2xl p-3 font-bold">
        <img src={images} alt="" className="w-full h-40 object-cover" />
        <h3 className="text-gray-500 p-1 m-1">Tribhuvan University</h3>
        <h2 className="text-[#4095ba] p-1 m-1">B.E.E </h2>
        <div className="border border-black bg-orange-400 p-2 m-1 hover:bg-orange-100 transition-colors">
          <p className="text-black text-center">Find out More</p>
        </div>
      </div>

      <div className=" shadow-2xl p-3 font-bold">
        <img src={images} alt="" className="w-full h-40 object-cover" />
        <h3 className="text-gray-500 p-1 m-1">Tribhuvan University</h3>
        <h2 className="text-[#4095ba] p-1 m-1">FORESTRY </h2>
        <div className="border border-black bg-orange-400 p-2 m-1 hover:bg-orange-100 transition-colors">
          <p className="text-black text-center">Find out More</p>
        </div>
      </div>

      <div className=" shadow-2xl p-3 font-bold">
        <img src={images} alt="" className="w-full h-40 object-cover" />
        <h3 className="text-gray-500 p-1 m-1">Tribhuvan University</h3>
        <h2 className="text-[#4095ba] p-1 m-1">BLLB </h2>
        <div className="border border-black bg-orange-400 p-2 m-1 hover:bg-orange-100 transition-colors">
          <p className="text-black text-center">Find out More</p>
        </div>
      </div>

      <div className=" shadow-2xl p-3 font-bold">
        <img src={images} alt="" className="w-full h-40 object-cover" />
        <h3 className="text-gray-500 p-1 m-1">Tribhuvan University</h3>
        <h2 className="text-[#4095ba] p-1 m-1">KUUMAT </h2>
        <div className="border border-black bg-orange-400 p-2 m-1 hover:bg-orange-100 transition-colors">
          <p className="text-black text-center">Find out More</p>
        </div>
      </div>

      <div className=" shadow-2xl p-3 font-bold">
        <img src={images} alt="" className="w-full h-40 object-cover" />
        <h3 className="text-gray-500 p-1 m-1">Tribhuvan University</h3>
        <h2 className="text-[#4095ba] p-1 m-1">CMAT </h2>
        <div className="border border-black bg-orange-400 p-2 m-1 hover:bg-orange-100 transition-colors">
          <p className="text-black text-center">Find out More</p>
        </div>
      </div>      
{/* ENDED  */}

    </div>
  </div>
</div>


{/* PROVEN EFFICIENCY  */}
<div>
  <h2 className="text-center p-10 mt-10 text-orange-500 font-bold text-2xl">
    PROVEN <span className="text-[#4095ba]">EFFICIENCY</span>
  </h2>
</div>
<div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
  
  <div className="shadow-xl h-full bg-white  p-6 flex ">
    <img className="w-20 h-20 rounded-full mb-4" src={download} alt="Happy Students" />
    <div className="ml-5">
      <h2 className="font-bold text-2xl">+9,9193</h2>
      <p>Happy Students</p>
    </div>
  </div>

  <div className="shadow-xl h-full bg-white p-6 flex items-center">
    <img className="w-20 h-20 rounded-full mb-4" src={download} alt="Old Questions" />
    <div className="ml-5">
      <h2 className="font-bold text-2xl">+12082</h2>
      <p>Old Questions</p>
    </div>
  </div>

  <div className="shadow-xl h-full bg-white p-6 flex items-center">
    <img className="w-20 h-20 rounded-full mb-4" src={download} alt="Mock Test Papers" />
    <div className="ml-5">
      <h2 className="font-bold text-2xl">+143</h2>
      <p>Mock Test Papers</p>
    </div>
  </div>

  <div className="shadow-xl h-full bg-white p-6 flex items-center">
    <img className="w-20 h-20 rounded-full mb-4" src={download} alt="Users Appeared" />
    <div className="ml-5">
      <h2 className="font-bold text-2xl">+16319</h2>
      <p>Users Appeared</p>
    </div>
  </div>

</div>
 
 {/* ended  */}

 <div>
  <h2 className="text-center p-10 mt-10 text-orange-500 font-bold text-2xl">
    Get Clarity About  <span className="text-[#4095ba]">Your Career </span>
  </h2>
</div>

<div className="max-w-[1240px] gap-5  mx-auto  md:grid grid-cols-3 shadow-2xl">
  <div className="text-2xl border border-[#4779ce64] text-center hover:text-black rounded p-3 m-4  text-[#e44c65]">Take It Test </div>
  <div className="text-2xl  border border-[#4779ce64] text-center hover:text-black rounded  p-3 m-4 text-[#f04e56]">Take It Test </div>
  <div className="text-2xl  border border-[#4779ce64] text-center hover:text-black rounded  p-3 m-4 text-[#e24848]">Take It Test </div>
</div>
    
    
   

    </>
  );
}

export default App;
