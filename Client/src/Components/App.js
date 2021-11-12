import React from 'react'
import Navbar from './Navbar'
import {Route} from 'react-router-dom'
import Signup from './Signup'
import Home from './Home'
import About from './About'
import Bestsellers from './Bestsellers'
import Contact from './Contact'
import Login from './login'
import Footer from './Footer'







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
    
    <Footer />
     

 
   
    
   
    
    </>
  );
}



export default App;
