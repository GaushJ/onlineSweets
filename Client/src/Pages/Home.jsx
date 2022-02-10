import React from 'react'
import Carousal from '../Components/Carousal'
import CardTray from '../Components/CardTray'


const Home= ()=>{
  
    return(
        <>
    <section className="m-10 mx-16 sm:hidden md:block lg:block">
    <Carousal />
    </section>
    <CardTray />
    

   
   </>
    )
}
export default Home;