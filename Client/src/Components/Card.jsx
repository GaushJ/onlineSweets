import {React} from 'react'
import IMAGES from './Images/Images'


const Card = (props)=>{
    return(
        <div class="flex flex-col w-1/5 m-10 sm:w-96 sm:m-auto sm:my-10 md:mx-auto">
        <div className=" bg-white rounded-3xl shadow-lg border-2 border-black overflow-hidden flex flex-col justify-center items-center">
            <div>
                <img className="object-center object-cover w-full h-72 " src={IMAGES.Image7} alt="photo"  />
            </div>
            <div className="text-center py-8 sm:py-6">
                <p className="text-xl text-gray-700 font-bold mb-2">{props.name}</p>
                <p className="text-base text-gray-400 font-normal">{props.price}</p>
            </div>
        </div>
    </div>
    );
}
 
export default Card;