

import IMAGES  from './Images/Images';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';





function Carousal() {
  return (
  
<>
    

<Carousel showArrows={true} showThumbs={false} autoPlay = {true} stopOnHover={false} infiniteLoop={true}>
                <div>
                    <img src={IMAGES.Image1} height="700px"/>
                    
                </div>
                <div>
                    <img src={IMAGES.Image2} height="700px" />
                    
                </div>
                <div>
                    <img src={IMAGES.Image3}  height="700px"/>
                   
                </div>
                <div>
                    <img src={IMAGES.Image4}  height="700px"/>
                </div>
                
            </Carousel>
  </>
  
  
  );

}

export default Carousal;