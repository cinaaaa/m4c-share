import React from "react";
import { Tagify } from "react-tagify";
import Image from "next/image";
import Button from "./button";

const FlowerDesktop: React.FC = () => {
  const headingStyle = {
    fontSize: "70px",
    maxWidth: "66%",
    fontWeight: "bold",
    marginBottom: "0px",
  };

  const bodyStyle = {
    fontSize: "18px",
    maxWidth: "70%",
  };

  const divStyle = {
    fontFamily: "Roboto, sans-serif",
    align: "left",
    maxWidth: "80%",
  };

  return (
    <div style={divStyle}>
      <p style={headingStyle}>My ideal 15-minute city</p>
      <Tagify>
        <p style={bodyStyle}>
          This is #MyMobilityFlower , representing my ideal 15-minute city and
          showing how close I would like to have the different amenities to my
          home.
        </p>
      </Tagify>
      <Tagify>
        <p style={bodyStyle}>
          You can also create your individual mobility flower and discover which
          districts in Munich meet your needs with #Map4Citizens at:
          https://citizens.plan4better.de/
        </p>
      </Tagify>
      <Image
        src="/eit.png"
        alt="eut"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "65%", height: "auto" }}
      />
      <br />
      <Button>Go to map4citizens</Button>
    </div>
  );
};

export default FlowerDesktop;
