import React from "react";

const CardSchedule = ({ title, date, content }) => {
  return (
    <div className="text-sectionTitle flex flex-col gap-6 justify-center items-center pv:max-lg:items-start">
      <div className="flex flex-col gap-4">
        <p className="text-4xl font-bold">{title}</p>
        <p className="uppercase text-2xl">
          <span className="font-bold">Update :</span> {date}
        </p>
      </div>
      <p className="text-xl">{content}</p>
    </div>
  );
};

export default CardSchedule;
