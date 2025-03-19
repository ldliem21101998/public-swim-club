/** @format */

import React from "react";
import menuImage from "../../../assets/about-us/about-us-menu.png";
import aquaCafe from "../../../assets/about-us/aqua-cafe.png";
import about1 from "../../../assets/about-us/about1.png";
import about2 from "../../../assets/about-us/about2.png";
import about3 from "../../../assets/about-us/about3.png";
import about4 from "../../../assets/about-us/about4.png";
import about5 from "../../../assets/about-us/about5.png";
import about6 from "../../../assets/about-us/about6.png";
import about7 from "../../../assets/about-us/about7.png";
import about8 from "../../../assets/about-us/about8.png";

const imgUrls = [
  about1,
  about2,
  about3,
  about4,
  about5,
  about6,
  about7,
  about8
];

const AboutUs = () => {
  return (
    <div className="w-full md:px-16 px-10 py-10 flex flex-col gap-14">
      {/* About Part */}
      <div className="flex flex-col gap-6 text-blue-900">
        {/* Content */}
        <div className="flex flex-col lg:flex-row justify-center items-center max-lg:gap-4">
          <div className="lg:w-3/5">
            {/* Title */}
            <h4 className="uppercase lg:text-5xl md:text-4xl text-3xl font-bold  max-lg:text-center mb-4">
              About
            </h4>
            <p className="max-lg:text-center sm:text-base text-sm text-justify">
              Welcome to Aquatics Hub, where we combine fun, fitness, and
              learning in a state-of-the-art swimming facility designed for all
              ages and abilities. Our pristine, temperature-controlled pools
              provide the perfect environment for relaxation, exercise, and
              skill-building. At Aquatics Hub, we offer a range of swim lessons
              tailored to meet the needs of beginners through to advanced
              swimmers, ensuring a safe and supportive atmosphere. Our certified
              instructors are dedicated to helping everyone develop strong
              swimming techniques, water safety awareness, and confidence in the
              water. Dive into an experience that promotes health, skill, and
              enjoyment at Aquatics Hub!
            </p>
          </div>

          <div className="lg:w-2/5 flex flex-col justify-center items-end lg:text-3xl md:text-2xl text-xl gap-2">
            <p className="font-bold">Pool stats</p>

            <div className="flex flex-col justify-center items-end gap-2 text-nowrap">
              <p>8-lane</p>
              <p>25-meter pool</p>
              <p>DEPTH: 1.25 Meter - 2.0 Meter</p>
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
          {imgUrls.map((item, index) => (
            <div className="h-52 overflow-hidden">
              <img
                key={index}
                alt="img"
                src={item}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Aqua Cafe Part */}
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Right Side */}
        <div className="lg:w-3/5 flex flex-col gap-4 text-blue-900">
          {/* Title */}
          <h4 className="uppercase lg:text-5xl md:text-4xl text-3xl font-bold max-lg:text-center">
            Aqua Cafe
          </h4>

          {/* Content */}
          <div className="flex flex-col justify-start items-center gap-4">
            <div>
              <p className="max-lg:text-center sm:text-base text-sm text-justify">
                At The Aquatics Hub, we merge swimming fitness and social
                community with nutrition at our Aqua Cafe. From grab-and-go
                breakfasts to leisurely lunches, find healthy food here.
              </p>
            </div>

            <img
              src={aquaCafe}
              alt="img"
              className="w-full h-[70%] object-cover"
            />
          </div>
        </div>

        {/* Left Side */}
        <div className="lg:w-2/5 flex justify-center items-start">
          <img
            src={menuImage}
            alt="img"
            className="bg-[#fff8e7] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
