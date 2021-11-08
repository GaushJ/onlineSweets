

import IMAGES  from './Images/Images';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';





function Carousal() {
  return (
  

  

<Carousel showArrows={true} showThumbs={false} autoPlay = {true} stopOnHover={false} infiniteLoop={true} animationHandler="fade">
                <div>
                    <img src={IMAGES.Image1} className="h-278" />
                    
                </div>
                <div>
                    <img src={IMAGES.Image2}  className="h-278"/>
                    
                </div>
                <div>
                    <img src={IMAGES.Image3}  className="h-278"/>
                   
                </div>
                <div>
                    <img src={IMAGES.Image4}  className="h-278"/>
                </div>
                
            </Carousel>
  
 
  
  );

}

export default Carousal;