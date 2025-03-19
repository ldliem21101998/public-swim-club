import React from "react";
import { NewsCard } from "../../../components";
const SectionBlogs = ({ data }) => {
  return (
    <div className="   grid grid-cols-4 py-4 gap-4">
      {data.slice(0, 4).map((item, index) => {
        return (
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
        );
      })}
    </div>
  );
};

export default SectionBlogs;
