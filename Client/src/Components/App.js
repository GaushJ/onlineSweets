import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
import Carousal from './Carousal'
import {Route} from 'react-router-dom'
import Signup from './Signup'
import Home from './Home'
import About from './About'
import Bestsellers from './Bestsellers'
import Contact from './Contact'
import Login from './login'
import IMAGES from './Images/Images'






function App() {
  const card = (props) =>{
    
  }
  return(
    <>
    
    <Navbar />
    
    <Route exact path="/">
      <Home />
    </Route>
    
    
    <Route path="/about">
      <About />
    </Route>

    <Route path="/Bestsellers">
      <Bestsellers />
    </Route>

    <Route path="/contact">
      <Contact/>
    </Route>

    <Route path="/signup">
      <Signup/>
    </Route> 
    <Route path="/login">
      <Login/>
    </Route> 
    
     

    <section className="m-10 mx-16 sm:hidden md:block lg:block">
    <Carousal />
    </section>
    
    

    <section className=" my-32 flex flex-col flex-wrap justify-center sm:justify-center ">
    <div className="text-5xl my-10 ml-24 ">
      Best Sellers
    </div>
    <div className="bg-purple-400 flex sm:flex-col md:flex-row lg:flex-row flex-wrap justify-center ">
    <Card name="Rasgulla" price="Rs450" image={IMAGES.Image1}/>
    <Card name="Rasgulla" price="Rs450" image={IMAGES.Image2}/>
    <Card name="Rasgulla" price="Rs450" image={IMAGES.Image2}/>
    <Card name="Rasgulla" price="Rs450" image={IMAGES.Image4}/>
    </div> 
    
    </section>
    <section className=" my-32   flex flex-col flex-wrap justify-center sm:justify-center ">
    <div className="text-5xl my-10 ml-24">
      Recommendations
    </div>
    <div className="  bg-red-400 flex  sm:flex-col md:flex-row lg:flex-row flex-wrap justify-center ">
    <Card name="Rasgulla" price="Rs450" image={IMAGES.Image7}/>
    <Card name="Rasgulla" price="Rs450" image={IMAGES.Image6}/>
    <Card name="Rasgulla" price="Rs450" image={IMAGES.Image5}/>
    <Card name="Rasgulla" price="Rs450" image={IMAGES.Image8}/>
    </div> 
    
    </section>

    <section className="my-32  flex flex-col flex-wrap justify-center sm:justify-center ">
    <div className="text-5xl my-10 ml-24 ">
     Combos
    </div>
    <div className=" sm:bg-green-300  flex sm:flex-col md:flex-row lg:flex-row flex-wrap justify-center ">
    <Card name="Rasgulla" price="Rs450" image={IMAGES.Image4}/>
    <Card name="Rasgulla" price="Rs450" image={IMAGES.Image2}/>
    <Card name="Rasgulla" price="Rs450" image={IMAGES.Image1}/>
    <Card name="Rasgulla" price="Rs450" image={IMAGES.Image2}/>
    </div> 
    
    </section>
   
    
   
    
    </>
  );
}



export default App;
