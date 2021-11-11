import {React} from 'react'
import IMAGES from './Images/Images';



const Card = (props)=>{
    return(
    <div className=" flex flex-col  ">
        <div className=" bg-white mr-6 md:h-96 lg:h-96 md:w-72 lg:w-72 rounded-lg shadow-lg drop-shadow-md border-2  overflow-hidden flex md:flex-col lg:flex-col sm:flex-row sm:w-full">
            <div>
                <img className="object-center md:h-48 lg:h-48 lg:w-96 md:w-96 object-cover sm:w-60 w-full h-72 " src={props.image} alt="photo"  />
            </div>
            <div className="sm:py-6 sm:m-10">
                <img src={IMAGES.veg} height="20px" width="20px"/>
                <p className="text-xl text-gray-700 font-bold mb-2">{props.name}</p>
                <p className="text-base text-gray-400 font-normal">{props.price}</p>
            </div>
        </div>
    </div>
    );
}
 
export default Card;