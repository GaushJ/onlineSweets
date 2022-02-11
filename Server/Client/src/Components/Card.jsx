import { React } from 'react'
import IMAGES from './Images/Images';
import { Link } from 'react-router-dom';



const Card = (props) => {
  
    const handleInput = () => {

    }
    return (
        <div className=" flex flex-col  ">
            <div className=" bg-white transition duration-300 ease-in-out m-2 md:h-96 lg:h-full md:w-72 lg:w-72 rounded-lg hover:shadow-lg drop-shadow-md border-2  overflow-hidden flex md:flex-col lg:flex-col sm:flex-row sm:w-full">
                <div>
                    <img className="object-center md:h-48 lg:h-48 lg:w-96 md:w-96 object-cover sm:w-60 w-full h-72 " src={props.image} alt="Sweetsphoto" />
                </div>

                <div className="m-2 flex flex-row justify-start ">
                    <img src={IMAGES.veg} className="w-6 h-8 " alt="veg icon" />
                    <div className="text-xl text-black font-medium ml-2 ">{props.name}</div>
                </div>
                
                <Link to={props.link}>
                    <div className="p-2 text-grey-darker text-justify flex flex-col border-t align-bottom">
                        <p className="uppercase  mx-6 text-sm hover:text-blue-dark duration-4 self-center">
                            {props.description}
                        </p>

                        <button
                            className="uppercase  bg-red-600  hover:bg-red-500 transition duration-300 font-medium text-white px-2 py-2 rounded  "
                            onClick={handleInput}
                        >Add to cart
                        </button>

                    </div>
                </Link>

            </div>
        </div >


    );
}

export default Card;