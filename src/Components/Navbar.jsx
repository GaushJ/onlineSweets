import React from "react";

const Navbar = () =>{
    return (
        <>
        <nav class="bg-grey-100">
          <div className="max-w-7xl mx-auto  px-8">
            <div className="flex justify-between">
              
              <div className="flex space-x-4  ">
                    {/* Logo */}
                    <div>
                      <a href="#" className="flex items-center py-7 px-2 text-gray-700 hover:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" class="text-green-700 mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                            <span className="font-bold text-2xl ">AB</span>
                      </a>
                    </div>
        
        
                      {/* Primary nav */}
                    <div className=" hidden md:flex py-6 px-2 ">
                      <a href="" className=" py-2 px-2 mr-9 text-gray-700 font-medium  text-lg hover:text-blue-600">Home</a>
                      <a href="" className=" py-2 px-2 mr-3 text-gray-700 font-medium text-lg hover:text-blue-600">Projects</a>
                    </div>
              </div>
    
    
              {/* secondary Nav */}
              <div className = "hidden md:flex items-center space-x-3 ">
                <a href="" className=" font-medium text-lg hover:text-blue-600">Login</a>
                <a href="" className="py-3 px-3 bg-green-400 font-medium text-large text-gray-900 rounded hover:bg-green-300 transition duration-300">Sign up</a>
              </div>
    
          </div>
    
          </div> 
        </nav>
    
    
        {/* Main Content goes here */}
          <div className = "py-32 text-center">
            <h2 className = "font-extrabold text-4xl">Welcome to CANDY SHOP</h2>
          </div>
    
        </>
      );
}

export default Navbar;