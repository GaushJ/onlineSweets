import {React} from 'react'
import Navbar from './Navbar'
import Card from './Card'

function App() {
  return(
    <>
    <Navbar />
    <div className = " flex flex-row max-w-full bg-blue-100 mx-auto  px-8 mb-8">
    <Card 
    mithai_name="RASGULLA"/>
    <Card />
    <Card />
    <Card />
   
    </div>
    <div className = " flex flex-row max-w-full bg-green-100 mx-auto  px-8 ">
    <Card />
    <Card />
    <Card />
    <Card />
   
    </div>
    
   
    </>
  );
}

export default App;
