import React from "react";
import { useParams } from "react-router-dom";
import Data from "./Data";
import { useState  } from "react";

const Cart = () => {
  const [counter, setCounter] = useState(0);
  // const [decrement , setIncrement] = useState(0);
  const params = useParams();
  const id = params.id
  let values ;
  // console.log(id);


  const filterSweet = (sweet) => {
    for (const categories in Data) {
      //fetching dynamic data from params
      values = Data[categories].filter(element => element.id === sweet )
      if(values.length !== 0){
        break
      }
     
    }

  }
  
  filterSweet(id)
  console.log(values)

  return (
    <>
      <div className="w-full h-auto mt-8  flex justify-center">
        <div className="lg:flex justify-between w-full p-12 relative h-full items-center   ">

          {/* Hero Image */}
          <div className=" w-full lg:w-1/2  p-4 flex justify-center ">
            <img src={values[0].Image} alt="cartitem" className="rounded-2xl w-5/6" />
          </div>

          {/* Hero Content */}
          <div className="  lg:w-1/2 h-auto md:p-16 lg:p-4 flex-col justify-center w-full ">
            {/* Fetching sweet name from params */}
            <div className="flex  justify-center md:text-4xl md:font-light tracking-wider">{params.id}</div>

            {/* Price section */}
            <div className="my-10 ">
              <span className="text-xl m-4">Price:</span>
              <span className="text-xl font-medium ">Rs {values[0].Price}</span>
              <span>/400g</span>
              <span className="block text-lg mx-4">(Inclusive of all taxes)</span>
              <p className="mt-10 mx-4">
                {values[0].Description}<br />{/* Traditional Indian sweet made with milk and topped with nuts<br /> */}
                <span className="font-medium">Disclaimer:</span> Images are for reference purpose only and Haldiram’s reserved the rights for product packaging/size/name change without prior notice
              </p>
            </div>

            <div className="mx-4">
              Qty:<button
                onClick={() => counter <= 0 ? setCounter(0) : setCounter(counter - 1)}
                className="w-16 h-8 font-bold bg-gray-300 rounded-md  text-md ml-2">
                -
              </button>
              <span className="px-6  mx-2">{counter}</span>
              <button onClick={() => setCounter(counter + 1)} className="w-16 h-8 font-bold bg-gray-400 rounded-md">+</button>
              <p className="my-4">
                Assorted {params.id} 400 g is available to buy in increments of 1
              </p>
              <button className="w-auto h-10 p-2 text-gray-100 align-middle bg-red-600 rounded-md hover:bg-red-500 transition duration-300 mr-4">Add to Cart</button>
              <button className="w-auto h-10 p-2 text-white align-middle bg-yellow-500 rounded-md hover:bg-yellow-400 transition duration-300">Buy Now</button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
