import "./CraDetails.css";
const CarDetails = ({ title, description, anchor }) => {
  return (
    <div className="car__details">
      <h1 className="car__title">{title}</h1>
      <p className="car__description">
        {description} <a href="/">{anchor}</a>
      </p>
    </div>
  );
};

export default CarDetails;
