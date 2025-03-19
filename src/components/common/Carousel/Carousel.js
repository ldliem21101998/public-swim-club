import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataCardService } from "../../../models/Mockdata";

const Carousel = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="">
      <Slider {...settings}>
        {dataCardService.map((item, index) => {
          return (
            <div className=" bg-white h-[600px] p-4">
              <img className=" h-[200px] w-[300px]" src={item.img}></img>
              <div className="">
                <p className="text-2xl font-bold">{item.title}</p>
              </div>
              <div className="">
                <p className="">{item.content}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-yellow-500 p-2 rounded-full cursor-pointer z-10"
    onClick={onClick}
  >
    <span className="text-white">{">>"}</span>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-yellow-500 p-2 rounded-full cursor-pointer z-10"
    onClick={onClick}
  >
    <span className="text-white">{"<<"}</span>
  </div>
);

export default Carousel;
