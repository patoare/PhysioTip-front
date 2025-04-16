import Lottie from "lottie-react";
import animacion from "../assets/Animation - 1744794061279.json";
import animacion2 from "../assets/Animation - 2.json";

const AnimacionLottie = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "15rem", marginBottom: 40 }}>
    <div style={{ width: 350 }}>
      <Lottie animationData={animacion} loop={true} />
    </div>
    <div style={{ width: 250 }}>
    <Lottie animationData={animacion2} loop={true} />
  </div>
  </div>
  );
};

export default AnimacionLottie;
