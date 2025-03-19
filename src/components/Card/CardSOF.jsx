import React from "react";

const CardSOF = ({ time, LessonWeek, Unlimited, Free, price }) => {
  return (
    <div className="bg-white rounded-t-xl ">
      <div className=" bg-[#cadbf7] border-2 border-black rounded-xl h-[200px] flex flex-col gap-4 justify-center items-center">
        <div
          className={`bg-gradient-to-r ${
            time === "3 MONTHS"
              ? ""
              : time === "3 MONTHS PLUS"
              ? "bg-gradient-to-r from-[#cbfdd9] to-[#96bcfd]"
              : time === "3 MONTHs ALT"
              ? "bg-[#c1ff72]"
              : time === "3 MONTHs MAX"
              ? "bg-gradient-to-r from-[#ffda59] to-[#ff954d]"
              : time === "12 MONTHS"
              ? "bg-gradient-to-r from-[#cbfdd9] to-[#96bcfd]"
              : time === "12 MONTHs MAX"
              ? "bg-gradient-to-r from-[#ffda59] to-[#ff954d]"
              : ""
          }  border-2 border-black w-[40%] sm:max-lg:w-[80%] mx-auto py-2 px-2 flex justify-center items-center rounded-xl`}
        >
          <p className="font-bold">{time}</p>
        </div>
        <div className="flex flex-col gap-2 ">
          <div className="">
            <p className="font-bold">{LessonWeek}</p>
          </div>
          <div className="">
            <p className="font-bold">{Unlimited}</p>
          </div>
          <div className="">
            <p className="font-bold">{Free}</p>
          </div>
        </div>
      </div>
      <div className="font-bold flex justify-center py-6">
        <p className="text-2xl">{price}</p>
      </div>
    </div>
  );
};

export default CardSOF;
