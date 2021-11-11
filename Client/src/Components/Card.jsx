import {React} from 'react'



const Card = (props)=>{
    return(
    <div className=" flex flex-col  sm:w-96 sm:m-auto sm:my-10 ">
        <div className=" bg-white mx-12 w-72 rounded-lg shadow-lg border-2  overflow-hidden flex flex-col  ">
            <div>
                <img className="object-center object-cover w-full h-72 " src={props.image} alt="photo"  />
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