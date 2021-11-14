import React from 'react'
import Card from './Card'
import Carousal from './Carousal'
import Data from './Data'


const Home= ()=>{
    return(
        <>
    <section className="m-10 mx-16 sm:hidden md:block lg:block">
    <Carousal />
    </section>
    
    

    <section className=" my-32 grid-cols-4 gap-3 justify-center sm:justify-center ">
    
    <div>
    <div className="text-2xl my-8 grid justify-center  font-medium ">
      Best Sellers
    </div>
    <div  className=" flex sm:flex-col md:flex-row lg:flex-row flex-wrap justify-center ">
    <Card name={Data.BestSellers[0].Name} price={Data.BestSellers[0].Price} image={Data.BestSellers[0].Image}/>
    <Card name={Data.BestSellers[1].Name}price={Data.BestSellers[1].Price} image={Data.BestSellers[1].Image}/>
    <Card name={Data.BestSellers[2].Name}price={Data.BestSellers[2].Price} image={Data.BestSellers[2].Image}/>
    <Card name={Data.BestSellers[3].Name}price={Data.BestSellers[3].Price} image={Data.BestSellers[3].Image}/>
    </div>
    </div> 
    
    
    
    
    
      
      <div>
        <div className="text-2xl my-8 grid justify-center  font-medium ">
          Recommendations
        </div>
        <div className=" flex sm:flex-col md:flex-row lg:flex-row flex-wrap justify-center ">
          <Card name={Data.Recommendations[0].Name} price={Data.Recommendations[0].Price} image={Data.Recommendations[0].Image}/>
          <Card name={Data.Recommendations[1].Name} price={Data.Recommendations[1].Price} image={Data.Recommendations[1].Image}/>
          <Card name={Data.Recommendations[2].Name} price={Data.Recommendations[2].Price} image={Data.Recommendations[2].Image}/>
          <Card name={Data.Recommendations[3].Name} price={Data.Recommendations[3].Price} image={Data.Recommendations[3].Image}/>
        </div>
    </div> 
  
    
    

   
    
    <div >
    <div className="text-2xl my-8 grid justify-center font-medium">
     Winter Special
    </div>
      <div className="  flex sm:flex-col md:flex-row lg:flex-row flex-wrap justify-center ">
    <Card name={Data.WinterSpecial[0].Name} price={Data.WinterSpecial[0].Price} image={Data.WinterSpecial[0].Image}/>
    <Card name={Data.WinterSpecial[1].Name} price={Data.WinterSpecial[1].Price} image={Data.WinterSpecial[1].Image}/>
    <Card name={Data.WinterSpecial[2].Name} price={Data.WinterSpecial[2].Price} image={Data.WinterSpecial[2].Image}/>
    <Card name={Data.WinterSpecial[3].Name} price={Data.WinterSpecial[3].Price} image={Data.WinterSpecial[3].Image}/>
    </div>
    </div> 
    
    </section>
    
   </>
    )
}
export default Home;