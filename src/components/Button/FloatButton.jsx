import * as React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
const FloatButton = ({ color, icon, img, url, phoneNum }) => {
  return (
    <button
      className="animate-wiggle relative py-2 w-[3vw] h-[3vw] rounded-full flex justify-center items-center pv:max-lg:w-[50px] pv:max-lg:h-[50px] "
      style={{ backgroundColor: color }}
    >
      {phoneNum && (
        <div
          className="absolute inset-0 rounded-full border-8 animate-ping border-opacity-50"
          style={{
            borderColor: color,
          }}
        ></div>
      )}

      {img ? (
        <img
          alt="icon"
          className="text-white h-[2vw] w-[2vw] pv:max-lg:w-[30px] pv:max-lg:h-[30px] animate-wiggle animate-infinite "
          src={img}
          onClick={() => {
            url && window.open(url, "_blank");
            phoneNum && window.open(`tel:${phoneNum}`);
          }}
        ></img>
      ) : (
        <Icon
          icon={icon}
          className="text-white h-[2vw] w-[2vw] pv:max-ph:w-[30px] pv:max-ph:h-[30px] animate-wiggle animate-infinite "
          onClick={() => {
            url && window.open(url, "_blank");
            phoneNum && window.open(`tel:${phoneNum}`);
          }}
        ></Icon>
      )}
    </button>
  );
};

export default FloatButton;
