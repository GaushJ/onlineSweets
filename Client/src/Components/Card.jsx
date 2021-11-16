import {React} from 'react'
import IMAGES from './Images/Images';



const Card = (props)=>{
    return(
    <div className=" flex flex-col  ">
        <div className=" bg-white transition duration-300 ease-in-out m-2 md:h-96 lg:h-96 md:w-72 lg:w-72 rounded-lg hover:shadow-lg drop-shadow-md border-2  overflow-hidden flex md:flex-col lg:flex-col sm:flex-row sm:w-full">
            <div>
                <img className="object-center md:h-48 lg:h-48 lg:w-96 md:w-96 object-cover sm:w-60 w-full h-72 " src={props.image} alt="photo"  />
            </div>
            <div className="m-2 flex flex-row justify-start ">
                    <img src={IMAGES.veg} className="w-3 h-3"/>
                    <div className="text-xl text-black font-medium ml-2 ">{props.name}</div>
            </div>
            
                <div className=" flex flex-row justify-around">
                    
                    <div className=" text-xl text-black font-normal">{props.price}</div>
                    <button className="cursor-pointer  w-20 h-8 rounded-xl font-medium bg-red-400 hover:bg-red-500 text-white transition duration-300 ">
                        + Add
                    </button>
                </div>
                
                    
                
                
           
            
            
        </div>
    </div>
    );
}
 
export default Card;