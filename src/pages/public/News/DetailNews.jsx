import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

const DetailNews = () => {
  const location = useLocation();
  const [data, setData] = useState({
    title: "",
    category: "",
    content: "",
    date: "",
    labeldate: "",
    author: "",
    thumbnail: "",
  });

  useEffect(() => {
    setData(location.state);
  }, []);
  return (
    <div>
      <div className="h-[300px] w-full bg-black flex flex-col  items-center gap-2 justify-center py-4">
        <div className="">
          <p className="text-[#c2c2c2] uppercase text-xl font-bold">
            {data?.category}
          </p>
        </div>
        <div className="">
          <p className="text-white text-2xl">{data?.title}</p>
        </div>
        <div className="w-[20px] bg-gray-400 h-[2px]"></div>
        <div className="">
          <p className="text-[#c2c2c2] text-lg">
            ĐÃ ĐĂNG TRÊN : {data.date} BỞI {data?.author}{" "}
          </p>
        </div>
      </div>
      <div className="w-[60%] mx-auto py-4 grid grid-cols-1 md:max-lg:grid-cols-2 gap-4 md:max-lg:w-[90%]">
        <div className="">
          <img
            className="w-full h-[400px] object-fill "
            src={data?.thumbnail}
          ></img>
        </div>
        <div className=" mx-auto">
          <p className="text-lg">{data?.content}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailNews;
