import React from "react";

import { useNavigate } from "react-router-dom";
import { path } from "../../utils/common/constant";
const NewsCard = ({
  title,
  content,
  thumbnail,
  labeldate,
  author,
  category,
  date,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="border-[1px]  p-2 rounded-lg cursor-pointer hover:scale-105 duration-100 ease-linear"
      onClick={() => {
        navigate("../" + path.DETAILNEWS, {
          state: {
            title,
            content,
            thumbnail,
            labeldate,
            author,
            category,
            date,
          },
        });
      }}
    >
      <div className="relative">
        <img className="w-full h-[200px] object-cover" src={thumbnail}></img>
        <div className="h-[50px] w-[50px] rounded-full bg-black absolute top-[10%] left-[-2%] flex justify-center items-center">
          <p className="text-white">{labeldate}</p>
        </div>
      </div>
      <div className="">
        <p className="text-center font-bold text-xl line-clamp-1">{title}</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[50px] h-[2px] bg-gray-400"></div>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-center line-clamp-2 text-gray-400">{content}</p>
      </div>
    </div>
  );
};

export default NewsCard;
