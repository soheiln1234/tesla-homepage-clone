import Header from "../components/Header/Header";
import HeroImage from "../components/HeroImage/HeroImage";

import model_s from "../assets/images/model-s.jpg";
import model_x from "../assets/images/model-x.jpg";
import model_y from "../assets/images/model-y.jpg";
import model_3 from "../assets/images/model-3.jpg";
import solar_pannel from "../assets/images/solar-panel.jpg";
import solar_roof from "../assets/images/solar-roof.jpg";

const HomeScreen = () => {
  const data = [
    {
      id: "model_s",
      imageSource: model_s,
      title: "Model S",
      description: "Order Online for",
      anchor: "Touchless Delivery",
    },
    {
      id: "model_y",
      imageSource: model_y,
      title: "Model Y",
      description: "Order Online for",
      anchor: "Touchless Delivery",
    },
    {
      id: "model_x",
      imageSource: model_x,
      title: "Model X",
      description: "Order Online for",
      anchor: "Touchless Delivery",
    },
    {
      id: "model_3",
      imageSource: model_3,
      title: "Model 3",
      description: "Order Online for",
      anchor: "Touchless Delivery",
    },
    {
      id: "solar_pannel",
      imageSource: solar_pannel,
      title: "Solar Panels",
      description: "Lowest Cost Solar Panels in America",
    },
    {
      id: "solar_roof",
      imageSource: solar_roof,
      title: "Solar Roofs",
      description: "Produce Clean Energy From Your Roof",
    },
  ];

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Header />
      <HeroImage images={data} />
    </div>
  );
};

export default HomeScreen;
