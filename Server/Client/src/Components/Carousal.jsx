import IMAGES from "./Images/Images";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Carousal() {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      autoPlay={true}
      stopOnHover={false}
      infiniteLoop={true}
      animationHandler="fade"
    >
      <div>
        <img src={IMAGES.Image5} className="h-750" alt="Carousel " />
      </div>

      <div>
        <img src={IMAGES.Image6} className="h-750" alt="Carousel" />
      </div>

      <div>
        <img src={IMAGES.Image7} className="h-750" alt="Carousel " />
      </div>
      <div>
        <img src={IMAGES.Image8} className="h-750" alt="Carousel " />
      </div>
      <div>
        <img src={IMAGES.Image9} className="h-750" alt="Carousel " />
      </div>
    </Carousel>
  );
}

export default Carousal;
