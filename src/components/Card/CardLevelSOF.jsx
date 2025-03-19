/** @format */

import React from "react";

const CardLevelSOF = ({ img, title, description }) => {
  return (
    <>
      <div className="flex flex-col justify-center text-sectionTitle">
        <div className="flex justify-center">
          <img className="h-[250px ] w-[250px]" src={img}></img>
        </div>

        <div className="flex flex-col gap-2 pv:max-sm:items-center">
          <p className="text-4xl font-bold ">{title}</p>
          <p className="2xl">{description}</p>
        </div>
      </div>
    </>
  );
};

export default CardLevelSOF;
