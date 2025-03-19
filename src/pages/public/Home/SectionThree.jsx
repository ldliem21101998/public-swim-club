import React from "react";
import { useNavigate } from "react-router-dom";
import { path } from "../../../utils/common/constant";
import { coaches } from "../../../models/Mockdata";
const SectionThreeCard = ({ coach }) => {
  return (
    <div className="flex justify-center items-center">
      <img
        className=" w-[400px]  rounded-3xl object-cover border"
        src={coach.avatar}
        alt="coach-avatar"
      />
    </div>
  );
};

const SectionThree = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full p-16">
      {/* Section Title */}
      <div className="flex flex-col justify-center items-center mb-10">
        <p className="uppercase text-xl font-medium">Our Coaches</p>
        <p className="uppercase lg:text-4xl md:text-3xl text-2xl font-bold text-sectionTitle">
          Top Coaching Professional
        </p>
      </div>

      {/* Coaches */}
      <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-lg:gap-4">
        {coaches.map((coach, index) => (
          <SectionThreeCard key={index} coach={coach} />
        ))}
      </div>

      {/* Show Services Button */}
      <div className="flex justify-center items-center mt-10">
        <div className="bg-black bg-opacity-40 rounded-lg p-4 md:w-[40%]">
          <button
            className="bg-[#ffbd59] w-full py-2 px-4 rounded-lg"
            onClick={() => {
              navigate("../" + path.ALLSERVICE);
            }}
          >
            <p className="text-white font-bold text-2xl">
              Show me your services
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
