import React from "react";
// import { CardSchedule } from "../../../components";
import { dataSchedule } from "../../../models/Mockdata";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Schedule = () => {
  return (
    <div>
      {dataSchedule.map((item) => {
        return (
          <div
            key={item.key}
            // w-[80%] mx-auto grid pv:max-md:grid-cols-1 lg:grid-cols-2 py-10 gap-4
            className="w-full flex justify-center"
          >
            {/* <CardSchedule
              title={item.title}
              date={item.date}
              content={item.content}
            ></CardSchedule> */}

            {/* pv:max-md:col-span-1 lg:col-span-1 */}
            <div className="md:w-[70%] w-[80%] lg:-mt-32 md:-mt-20">
              <PhotoProvider>
                <PhotoView key={item.key} src={item.img}>
                  <img
                    className="w-full object-cover cursor-pointer"
                    src={item.img}
                    alt="mainSchedule"
                  ></img>
                </PhotoView>
              </PhotoProvider>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Schedule;
