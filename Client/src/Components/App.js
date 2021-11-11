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
    
     

 
   
    
   
    
    </>
  );
}



export default App;
