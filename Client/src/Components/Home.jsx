import React from 'react'
import Carousal from './Carousal'
import CardTray from './CardTray'


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