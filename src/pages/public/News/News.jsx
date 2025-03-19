import React from "react";
import { dataNews } from "../../../models/Mockdata";
import { NewsCard } from "../../../components";
import { List } from "antd";
import imgBackground from "../../../assets/HomePage/background_banner.png";
const News = () => {
  return (
    <>
      {dataNews.length === 0 ? (
        <div
          className=" h-[600px] bg-cover flex flex-col justify-center items-center gap-4"
          style={{
            backgroundImage: `url(${imgBackground})`, // Apply the background image
          }}
        >
          <div className="w-[90%] mx-ato flex justify-center pv:max-md:justify-start">
            <p className="text-2xl text-black">News Page</p>
          </div>
          <div className="w-[90%] mx-auto flex justify-center pv:max-md:justify-start">
            <p className="text-4xl pv:max-md:text-3xl text-white font-bold">
              There is currently no news posted
            </p>
          </div>
          <div className="w-[90%] mx-auto flex justify-center pv:max-md:justify-start">
            <p className="text-xl text-white ">
              News will be updated continuously, you can come back to see
            </p>
          </div>
          <div className="w-[90%] mx-auto flex justify-center pv:max-md:justify-start">
            <p className="text-xl text-white ">Thank you !</p>
          </div>
        </div>
      ) : (
        <div className="w-[80%] mx-auto  gap-10 bg-gray-50 p-3 rounded-lg my-10">
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 1,
              md: 2,
              lg: 2,
              xl: 2,
              xxl: 3,
            }}
            pagination={{
              position: "bottom",
              align: "center",
              pageSize: 6,
            }}
            dataSource={dataNews}
            renderItem={(item, index) => (
              <List.Item>
                <NewsCard
                  title={item.title}
                  content={item.content}
                  thumbnail={item.thumbnail}
                  labeldate={item.labeldate}
                  key={index}
                  author={item.author}
                  category={item.category}
                  date={item.date}
                />
              </List.Item>
            )}
          />
        </div>
      )}
    </>
  );
};

export default News;
