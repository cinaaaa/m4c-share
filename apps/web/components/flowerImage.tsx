import React from "react";

interface FlowerImageProps {
  src: string;
}

const FlowerImage: React.FC<FlowerImageProps> = ({ src }) => {
  const divStyle = {
    backgroundImage: `url(${src})`,
    width: "80%",
    height: "800px",
    backgroundSize: "cover",
    backgroundPosition: "top left",
    bacgroundRepeat: "no-repeat",
    marginTop: "100px",
  };

  return <div style={divStyle}></div>;
};

export default FlowerImage;
