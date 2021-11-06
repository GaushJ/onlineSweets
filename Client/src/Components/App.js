import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
import Carousal from './Carousal'







function App() {
  return(
    <>
    <Navbar />
    <Carousal />
    <Card name="Rasgulla" price="Rs450"/>
    <Card name="Rasgulla" price="Rs450"/>
    <Card name="Rasgulla" price="Rs450"/>
    </>
  );
}



export default App;
