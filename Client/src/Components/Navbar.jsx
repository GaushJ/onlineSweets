import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import IMAGES from "./Images/Images";
import {NavLink} from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-7 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between h-16">
            
            {/* image and primary nav starts */}
            <div className="flex items-center mt-6">
              <div className="flex-shrink-0 ">
                <NavLink to="/">
                <img
                  className="h-full w-40 "
                  // src={IMAGES.logo}
                  alt="Workflow"
                />
                </NavLink>
                
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                 

                  <NavLink
                    to="/"
                    className="text-gray-800 hover:bg-red-400 hover:text-white px-3 py-2 rounded-md font-medium text-lg"
                  >
                    Home
                  </NavLink>

                  
                  <NavLink
                    to="/about"
                    className="text-gray-800 hover:bg-red-400 hover:text-white px-3 py-2 rounded-md font-medium text-lg"
                  >
                    About us
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className="text-gray-800 hover:bg-red-400 hover:text-white px-3 py-2 rounded-md font-medium text-lg"
                  >
                    Contact us
                  </NavLink>

                 
                </div>
                
              </div>
              
            </div>
            <div className = " hidden  md:flex items-center space-x-3 mt-6 ">
                <NavLink to="/login" className="text-gray-800 hover:bg-red-400 hover:text-white px-3 py-2 rounded-md font-medium text-lg">Login</NavLink>
                <NavLink to="/signup" className="py-3 px-3  font-medium text-lg  rounded text-white bg-red-500 hover:bg-red-400 hover:text-white  transition duration-300">Sign up</NavLink>
              </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-600 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <NavLink
                  to="#"
                  className="hover:bg-purple-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </NavLink>

               

                <NavLink
                  to="#"
                  className="text-black hover:bg-purple-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Best Sellers
                </NavLink>

                <NavLink
                  to="#"
                  className="text-black  hover:bg-purple-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Sign up
                </NavLink>

                <NavLink
                  to="#"
                  className="text-black  hover:bg-purple-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Sign In
                </NavLink>
                
              </div>
              
            </div>
          )}
        </Transition>
        
      </nav>

      
     
    </div>
  );
}

export default Navbar;