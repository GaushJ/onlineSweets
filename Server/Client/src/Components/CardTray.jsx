import React from "react";
import Card from "./Card";
import Data from "./Data";

const CardTray = () =>{
  
    const Scard = (val) =>{
        return(
          <Card 
          link={val.link}
           name = {val.Name}
           price = {val.Price}
           image = {val.Image}
           description = {val.Description}
          />
        )
      };
return(
<>
<section className=" my-32 grid-cols-4 gap-3 justify-center sm:justify-center ">
    
    <div>
    <div className="text-2xl my-8 grid justify-center  font-medium ">
      Best Sellers
    </div>
    <div  className=" flex sm:flex-col md:flex-row lg:flex-row flex-wrap justify-center ">
      {Data.BestSellers.map(Scard)}
    </div>
    </div> 
    
    
    
    
    
      
      <div>
        <div className="text-2xl my-8 grid justify-center  font-medium ">
          Recommendations
        </div>
        <div className=" flex sm:flex-col md:flex-row lg:flex-row flex-wrap justify-center ">
        {Data.Recommendations.map(Scard)}
        </div>
    </div> 
  
    
    

   
    
    <div >
    <div className="text-2xl my-8 grid justify-center font-medium">
     Winter Special
    </div>
      <div className="  flex sm:flex-col md:flex-row lg:flex-row flex-wrap justify-center ">
      {Data.WinterSpecial.map(Scard)}
    </div>
    </div> 
    
    </section>
    
</>
)
};

export default CardTray;