import React from 'react'
import Navbar from '../Components/Navbar'
import {Route} from 'react-router-dom'
import Signup from './Signup'
import Home from './Home'
import About from './About'
import Bestsellers from '../Components/Bestsellers'
import Contact from './Contact'
import Login from './login'
import Footer from '../Components/Footer'
import Cart from '../Components/Cart'







function App() {
  
  return(
    <>
    
    <Navbar />
    
    <Route exact path="/">
      <Home />
    </Route>
    
    
    <Route exact path="/about">
      <About />
    </Route>

    <Route path="/categories" />

    <Route path="/:id">
      <Cart/>
    </Route>

    <Route path="/Bestsellers">
      <Bestsellers />
    </Route>

    <Route exact path="/contact">
      <Contact/>
    </Route>

    <Route exact path="/signup">
      <Signup/>
    </Route> 
    <Route exact path="/login">
      <Login/>
    </Route> 
    
    <Footer />
    
     

 
   
    
   
    
    </>
  );
}



export default App;
