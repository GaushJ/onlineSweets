import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
import Carousal from './Carousal'








function App() {
  const card = (props) =>{
    
  }
  return(
    <>
    <Navbar />
    <section className="m-10 mx-16 sm:hidden md:block lg:block">
    <Carousal />
    </section>
    
    

    <section className="bg-purple-400 rounded-t-full my-32 flex flex-col flex-wrap justify-center sm:justify-center ">
    <div className="text-2xl mt-10 ml-10 ">
      Best Sellers
    </div>
    <div className=" flex sm:flex-col md:flex-row lg:flex-row flex-wrap justify-center ">
    <Card name="Rasgulla" price="Rs450"/>
    <Card name="Rasgulla" price="Rs450"/>
    <Card name="Rasgulla" price="Rs450"/>
    <Card name="Rasgulla" price="Rs450"/>
    </div> 
    
    </section>
    <section className=" rounded-b-full my-32 bg-red-400  flex flex-col flex-wrap justify-center sm:justify-center ">
    <div className="text-2xl mt-10 ml-10">
      Best Sellers
    </div>
    <div className=" flex sm:flex-col md:flex-row lg:flex-row flex-wrap justify-center ">
    <Card name="Rasgulla" price="Rs450"/>
    <Card name="Rasgulla" price="Rs450"/>
    <Card name="Rasgulla" price="Rs450"/>
    <Card name="Rasgulla" price="Rs450"/>
    </div> 
    
    </section>

    <section className="my-32 bg-green-300 rounded-full rounded-l-none flex flex-col flex-wrap justify-center sm:justify-center ">
    <div className="text-2xl mt-10 ml-10 ">
      Best Sellers
    </div>
    <div className=" flex sm:flex-col md:flex-row lg:flex-row flex-wrap justify-center ">
    <Card name="Rasgulla" price="Rs450"/>
    <Card name="Rasgulla" price="Rs450"/>
    <Card name="Rasgulla" price="Rs450"/>
    <Card name="Rasgulla" price="Rs450"/>
    </div> 
    
    </section>
   
    
   
    
    </>
  );
}



export default App;
