/** @format */

import React, { useState } from "react";
import adultSwimming from "../../../assets/Services/AdultClass.png";
import adultPackages from "../../../assets/adult-packages.png";
import { path } from "../../../utils/common/constant";
import { useNavigate } from "react-router-dom";
import {
  ModalInfor,
  ServiceTableDesktop,
  ServiceTableMobile,
} from "../../../components";
import { servicePackagesData } from "../../../models/Mockdata";
const courseDetails = [
  {
    title: "Beginner Swimming",
    description:
      "An excellent class for ​adults who wish to ​become more ​comfortable in the ​water and learn basic ​strokes. Our ​instructors work at you ​pace.",
  },
  {
    title: "Technique Swimming",
    description:
      "A class for adult ​swimmers who have ​basic swimming but ​would like to develop ​their technique for ​better efficiency ​through the water.",
  },
  {
    title: "Masters Swimming",
    description:
      "A class for swimmers ​who are proficient in ​multiple strokes, may ​have competed as ​young swimmers and ​want to get faster and ​fitter with swim sets.",
  },
  {
    title: "OpenWater Swimming",
    description:
      "If you are a distance or ​openwater Swimmer ​then this is for you. ​Primarily a freestyle ​class with the focus on ​technique and ​breathing to help you ​cover larger distances.",
  },
  {
    title: "Distance Freestyle Swimming",
    description:
      "Once a week, this ​class is a blend of ​Masters and ​Openwater swimming ​with an emphasis on ​Freestyle and drills ​associated with the ​stroke.",
  },
];

const GradientWithOverlay = () => {
  return (
    <div className="relative h-auto min-h-screen md:min-h-[55vh]">
      {/* Background image */}
      <div>
        <img
          alt="img"
          src={adultSwimming}
          className="w-full h-full absolute object-cover md:rounded-lg"
        />
      </div>

      {/* Transparent overlay */}
      {/* <div className="lg:w-[70%] md:w-[80%] w-[90%] h-full absolute bg-gradient-to-r from-[#90446b] from-5% to-transparent to-95% flex flex-col gap-4 justify-center items-start text-white p-6 md:rounded-lg">
        <p className="lg:text-4xl md:text-3xl text-2xl uppercase font-bold">
          Adult
        </p>

        <p className="lg:text-4xl md:text-3xl text-2xl uppercase font-bold">
          Swimming Course
        </p>

        <p className="lg:text-2xl md:text-xl text-lg font-semibold leading-loose md:leading-loose lg:leading-loose">
          At aquatics hub we believe in community. whichever course you ​
          choose, you automatically become a flying fish club member. we will
          ​update you with events we attend as a group and who knows.... you may
          ​be achieving your first 5km swim before you know it!
        </p>
      </div> */}
    </div>
  );
};

const AdultSwimmingService = () => {
  const navigate = useNavigate();
  const [isModalAdult, setIsModalAdult] = useState(false);

  const handleAdultClick = (e) => {
    setIsModalAdult(!isModalAdult);
  };
  return (
    <div className="w-full md:px-16 max-md:pt-0 py-14">
      <GradientWithOverlay />
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 lg:gap-24 md:gap-16 gap-10 mt-10 max-md:p-6">
        {courseDetails.map((course, index) => (
          <div
            key={index}
            className="text-sectionTitle flex flex-col gap-4 h-full"
          >
            {/* Title Section */}
            <div className="h-1/4">
              <p className="lg:text-2xl md:text-xl text-lg font-bold">
                {course.title}
              </p>
            </div>

            {/* Description Section */}
            <div className="h-3/4">
              <p className="lg:text-lg md:text-md text-base">
                {course.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row mt-16 gap-8 lg:gap-0">
        <div className="lg:w-4/5">
          <div className="w-full overflow-y-auto">
            <ServiceTableDesktop
              data={servicePackagesData.filter(
                (item) => item.serviceName === "Adult Swimming Course"
              )}
            />
          </div>

          {/* lg:hidden - Backup for future use */}
          <div className="hidden">
            <ServiceTableMobile
              data={servicePackagesData.filter(
                (item) => item.serviceName === "Adult Swimming Course"
              )}
            />
          </div>
        </div>

        {/* Show Services Button */}
        <div className="lg:w-1/5 flex justify-center items-center">
          <div className="bg-black bg-opacity-40 rounded-lg p-4">
            <button
              className="bg-gradient-to-r from-teal-300 to-blue-800 w-full md:py-6 py-4 px-4 rounded-lg"
              onClick={() => {
                setIsModalAdult(!isModalAdult);
              }}
            >
              <p className="text-white font-bold lg:text-3xl text-xl uppercase drop-shadow-lg">
                Register Now
              </p>
            </button>
          </div>
        </div>
      </div>
      {isModalAdult ? (
        <ModalInfor
          isShowModal={isModalAdult}
          handle={handleAdultClick}
          title={"Adult Course "}
          stage={["4"]}
        />
      ) : null}
    </div>
  );
};

export default AdultSwimmingService;
