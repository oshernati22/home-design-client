import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Threeobj from "./Threeobj";
import "./slider.scss";
import GLD from "../scene.glb";

const Slider = ({ furArr }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Carousel
        className="carousel"
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        responsive={responsive}
        keyBoardControl={true}
        centerMode={true}
      >
        {furArr.map((el) => (
          <div className="carusel__object">
            <Threeobj
              glb={el.file}
              title={el.title}
              designer={el.designer}
              description={el.description}
              price={el.price}
            />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Slider;
