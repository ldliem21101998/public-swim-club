import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const ServiceOrderCard = ({
  serviceName,
  img,
  path,
  refValue,
  handleClick
}) => {
  const [showModal, setIshowModal] = useState(false);
  const navigate = useNavigate();

  const handle = () => {
    // handleClick();
  };

  return (
    <div
      // hover:scale-105 duration-200
      className="relative w-[90%] mx-auto h-[150px]   flex items-center justify-center  cursor-pointer"
      onClick={() => {
        serviceName !== "COLD PLUNGE"
          ? navigate("../" + path, { state: { ref: refValue } })
          : handle();
      }}
    >
      <div
        className="w-full h-full bg-cover bg-center rounded-lg flex justify-center items-center "
        style={{
          backgroundImage: `url(${img})`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20 rounded-xl"></div>

        <p className=" drop-shadow-lg  text-xl text-white font-extrabold ">
          {serviceName}
        </p>
      </div>
    </div>
  );
};

export default ServiceOrderCard;
