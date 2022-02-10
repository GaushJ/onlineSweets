import React from "react";
import { AboutUsData } from "../Components/Data";
import IMAGES from "../Components/Images/Images";

const About = () => (
  <div className="lg:m-40 md:m-20 sm:m-10 min-w-7xl ">
    {AboutUsData.map((data, index) => (
      <div key={index} className="my-20">
        <div className="font-medium sm:text-3xl md:text-5xl font-Pop block my-6">
          {data.heading}
        </div>
        <div>
          <p className="break-words text-md text-gray-500 font-medium">
            {data.content}
          </p>
        </div>
      </div>
    ))}


    
      
        
        <div className="flex sm:flex-col md:flex-row lg:flex-row ">

            <div className="w-full h-full flex-shrink mr-6 " >
              <img src={IMAGES.motto} alt="motto" className="h-full w-full" />
            </div>

            <div className="w-full h-full ">
            <div className="font-medium text-5xl font-Pop block mb-6 m-2">Our Motto</div>
              <p className="break-word text-md text-gray-500 font-medium  p-4">
                We strive to impress our customers by giving them the highest degree
                of service possible and by providing them with the freshest, finest &
                good quality food at reasonable prices, in a soothing and comfortable
                environment. Om Sweets has major expansion plans to open retail
                outlets across India to sell sweets, snacks and ready-to-eat titbits
                and fast food products in different formats. Om Sweets will find
                presence across the country through express retail outlets, takeaways,
                casual dining retail outlets for family dining.
              </p>
            </div>
          </div>

        </div>
      
    
);
export default About;
