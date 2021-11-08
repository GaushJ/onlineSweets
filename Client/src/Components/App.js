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
    <section className="mb-28">
    <Carousal />
    </section>
    
    <section className=" flex flex-row flex-wrap justify-center">
    <Card name="Rasgulla" price="Rs450"/>
    <Card name="Rasgulla" price="Rs450"/>
    <Card name="Rasgulla" price="Rs450"/>
    <Card name="Rasgulla" price="Rs450"/>
    <Card name="Rasgulla" price="Rs450"/>
    <Card name="Rasgulla" price="Rs450"/>
    <Card name="Rasgulla" price="Rs450"/>
    <Card name="Rasgulla" price="Rs450"/>
    <Card name="Rasgulla" price="Rs450"/>
    <Card name="Rasgulla" price="Rs450"/>
    <Card name="Rasgulla" price="Rs450"/>
    <Card name="Rasgulla" price="Rs450"/>
    </section>
    
    </>
  );
}



export default App;
