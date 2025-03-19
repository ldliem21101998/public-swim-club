import React, { useEffect, useState } from "react";
import pricesImage from "../../../assets/pool-party-prices.jpg";
import doubleArrows from "../../../assets/double-arrows.png";
import lanePoolRental from "../../../assets/lane-pool-rental.jpg";
import flowmachine from "../../../assets/Services/flowmachine.png";
import { useLocation, useNavigate } from "react-router-dom";
import { path } from "../../../utils/common/constant";

const PoolPartyService = () => {
  const location = useLocation();

  const scrollToSection = (ref) => {
    document.getElementById(ref).scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const { state } = location;

    if (state?.ref) {
      scrollToSection(state.ref);
    }
  }, [location]);

  return (
    <div className="w-full md:px-16 max-md:pt-0 py-12">
      <div className="flex md:flex-row flex-col md:h-[40vh]">
        <div className="md:w-1/2 overflow-hidden">
          <img
            alt="pool-party-img"
            src="https://global.gcdn.top/globalmandarin.com/2024/blog/image/401fb645a258485893e4b170011e2420.jpg"
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="md:w-1/2 overflow-hidden">
          <img
            alt="pool-party-img"
            src="https://addevent.vn/wp-content/uploads/2024/07/pool-party-1.jpg"
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      <div id="pool-party"></div>
      <div className="flex md:flex-row flex-col-reverse mt-10">
        <div className="md:w-1/2 md:pr-8 flex justify-center items-start">
          <ImageWithOverlay imageUrl={pricesImage} />
        </div>

        <div className="md:w-1/2 flex flex-col">
          <div className="max-md:p-6">
            <p className="text-4xl uppercase font-bold">Pool Party</p>
            <p className="text-justify text-gray-500 leading-loose my-4">
              A new concept in Hanoi, ‘The birthday pool party’! Book out a two
              hour slot at the Aquatics Hub on a weekend throughout the year. A
              dedicated Party Planner will help organise your perfect paty with
              an hour of organised pool games followed by a meal at Aqua Cafe’s
              long Party Table. Decorations are included and there is plenty of
              room to further customize the experience.
            </p>
          </div>

          <div className="max-md:hidden w-full flex justify-end items-center">
            <ContactUsButton />
          </div>
        </div>
      </div>

      {/* Contact Us for Pool Party */}
      <div className="md:hidden mt-10 w-full flex justify-center items-center">
        <ContactUsButton />
      </div>

      {/* Lane & Pool Rental */}
      <div id="swimming-lane-rental"></div>
      <div className="flex md:flex-row flex-col-reverse mt-20 md:gap-16">
        <div className="md:w-1/2 flex justify-center items-start max-md:p-6">
          <ImageWithOverlay
            imageUrl={lanePoolRental}
            customHeight="md:h-[80vh]"
          />
        </div>

        <div className="md:w-1/2 flex flex-col">
          <div className="text-sectionTitle md:mt-16 max-md:p-6">
            <p className="text-4xl font-bold uppercase mb-6">
              Lane & Pool Rental
            </p>

            <p className="mb-2 text-lg">
              Lane hire for swim clubs is available:
            </p>
            <ul className="list-disc ml-8 space-y-2 text-lg">
              <li>Every morning 06:00-09:00</li>
              <li>Wednesdays 18:00-20:30</li>
              <li>Saturdays 15:30-20:30</li>
              <li>Sundays 15:30-18:00</li>
            </ul>
          </div>

          <div className="max-md:hidden w-full flex justify-start items-center mt-10">
            <ContactUsButton />
          </div>
        </div>
      </div>

      {/* Contact Us for Lane & Pool Rental */}
      <div className="md:hidden mt-4 w-full flex justify-center items-center">
        <ContactUsButton />
      </div>

      {/* Flow Machine */}
      <div id="the-aquarium"></div>
      <div className="flex md:flex-row flex-col-reverse mt-20 md:gap-16">
        <div className="md:w-1/2 flex justify-center md:items-start item-center max-md:p-6">
          <ImageWithOverlay imageUrl={flowmachine} customHeight="md:h-[80vh]" />
        </div>

        <div className="md:w-1/2 flex flex-col">
          <div className="text-sectionTitle md:mt-16 max-md:p-6">
            <p className="text-4xl font-bold uppercase mb-6">Flow Machine</p>

            {/* <p className="mb-2 text-lg">
              Lane hire for swim clubs is available:
            </p> */}
            <ul className="space-y-2 text-lg list-none">
              <li>30 mins: 600.000 VND</li>
              <li>60 mins: 1.000.000 VND</li>
              {/* <li>Saturdays 15:30-20:30</li>
              <li>Sundays 15:30-18:00</li> */}
            </ul>
          </div>

          <div className="max-md:hidden w-full flex justify-start items-center mt-10">
            <ContactUsButton />
          </div>
        </div>
      </div>

      {/* Contact Us for Flow Machine */}
      <div className="md:hidden mt-4 w-full flex justify-center items-center">
        <ContactUsButton />
      </div>
    </div>
  );
};

export default PoolPartyService;

const ImageWithOverlay = ({ imageUrl, customHeight }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <div>
      {/* Small image */}
      <div className="overflow-hidden max-md:px-6">
        <img
          src={imageUrl}
          alt="thumbnail"
          className={`object-cover cursor-pointer hover:scale-105 transition-transform duration-500 ${
            customHeight ? customHeight : ""
          }`}
          onClick={toggleOverlay}
        />
      </div>

      {/* Big image with overlay */}
      {isOverlayVisible && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
          onClick={toggleOverlay}
        >
          {/* Close button */}
          <button
            className="absolute top-5 right-5 text-white md:text-5xl text-4xl"
            onClick={toggleOverlay}
          >
            &times;
          </button>

          <img
            src={imageUrl}
            alt="Large view"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

const ContactUsButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className="bg-gradient-to-r from-[#ffdc58] hover:from-[#ffd94e] to-[#ff944d] hover:to-[#ff7e29] px-4 py-1 rounded-lg"
      onClick={() => {
        navigate("../" + path.CONTACTUS);
      }}
    >
      <p className="text-white font-bold lg:text-3xl text-xl drop-shadow-lg flex gap-2 justify-center items-center">
        Contact us to book
        <img src={doubleArrows} alt="arrow" className="w-8" />
      </p>
    </button>
  );
};
