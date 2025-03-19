import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ serviceName, img, content, color, type, path }) => {
  const navigate = useNavigate();
  return (
    <div
      className="cursor-pointer hover:scale-105  duration-200"
      onClick={() => {
        navigate("../" + path);
      }}
    >
      <div className="py-4 flex flex-col">
        <p
          className={"uppercase text-2xl font-bold lg:max-xl:text-xl"}
          style={{ color: color }}
        >
          {type}
        </p>
        <p
          className={"uppercase text-2xl font-bold lg:max-xl:text-xl "}
          style={{ color: color }}
        >
          {serviceName}
        </p>
      </div>

      <div className="relative w-full h-[500px] flex items-center justify-center">
        <img className="w-full h-full object-cover rounded-lg " src={img}></img>

        <div
          className="absolute bottom-0   text-white p-4 rounded-lg "
          style={{
            backgroundImage: `linear-gradient(to top, ${color} , transparent)`
          }}
        >
          <p className="font-bold drop-shadow-2xl sm:max-lg:text-2xl">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
