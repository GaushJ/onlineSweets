import React from 'react'
import IMAGES from './Images/Images'
import Card from './Card'
import Carousal from './Carousal'

const Home= ()=>{
    return(
        <>
    <section className="m-10 mx-16 sm:hidden md:block lg:block">
    <Carousal />
    </section>
    
    

    <section className=" my-32 flex flex-col flex-wrap justify-center sm:justify-center ">
    <div className="text-2xl my-8 ml-80 font-medium">
      Best Sellers
    </div>
    <div className=" flex sm:flex-col md:flex-row lg:flex-row flex-wrap justify-center ">
    <Card name="Rasgulla" price="Rs450" image={IMAGES.Image1}/>
    <Card name="Rasgulla" price="Rs450" image={IMAGES.Image2}/>
    <Card name="Rasgulla" price="Rs450" image={IMAGES.Image2}/>
    <Card name="Rasgulla" price="Rs450" image={IMAGES.Image4}/>
    </div> 
    
    
    
    <div className="text-2xl my-8 ml-80 font-medium">
      Recommendations
    </div>
    <div className="   flex  sm:flex-col md:flex-row lg:flex-row flex-wrap justify-center ">
    <Card name="Rasgulla" price="Rs450" image={IMAGES.Image7}/>
    <Card name="Rasgulla" price="Rs450" image={IMAGES.Image6}/>
    <Card name="Rasgulla" price="Rs450" image={IMAGES.Image5}/>
    <Card name="Rasgulla" price="Rs450" image={IMAGES.Image8}/>
    </div> 
    
    

   
    <div className="text-2xl my-8 ml-80 font-medium">
     Winter Special
    </div>
    <div className="  flex sm:flex-col md:flex-row lg:flex-row flex-wrap justify-center ">
    <Card name="Rasgulla" price="Rs450" image={IMAGES.Image4}/>
    <Card name="Rasgulla" price="Rs450" image={IMAGES.Image2}/>
    <Card name="Rasgulla" price="Rs450" image={IMAGES.Image1}/>
    <Card name="Rasgulla" price="Rs450" image={IMAGES.Image2}/>
    </div> 
    
    </section>
   </>
    )
}
export default Home;