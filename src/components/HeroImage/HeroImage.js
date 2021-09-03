import Buttons from "../Buttons/Buttons";
import CarDetails from "../CarDetails/CarDetails";
import "./HeroImage.css";

function HeroImage({ images }) {
  return (
    <div className="heroImage">
      {images?.map((image) => (
        <div key={image.id} className="hero-container">
          <CarDetails
            title={image.title}
            description={image.description}
            anchor={image?.anchor}
          />
          <img
            className="hero__image"
            src={image.imageSource}
            alt={image.title}
          />
        </div>
      ))}
      <Buttons />
    </div>
  );
}

export default HeroImage;
