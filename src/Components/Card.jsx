import {React} from 'react'
import IMAGES from './Images/Images.jsx'

const Card = (props)=>{
    return(
    <div class="flex flex-col m-8 ">
        <div className="w-full bg-gray-100 rounded-lg shadow-lg overflow-hidden flex flex-col  items-center">
            <div>
                <img className="object-center object-cover h-auto w-full" src={IMAGES.Rasgulla} alt="photo" />
            </div>
            <div className="text-center py-8 sm:py-6">
                <p className="text-xl text-gray-700 font-bold mb-2">{props.mithai_name}</p>
                <p className="text-base text-gray-400 font-normal">Software Engineer</p>
            </div>
        </div>
    </div>
    );
}

export default Card;