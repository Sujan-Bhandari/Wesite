import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import saral from "../src/image/saral.jpg";


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

    </>
  );
}

export default App;
