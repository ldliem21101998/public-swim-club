import React, { useState } from "react";
import background from "../../../assets/MainBanner_v1.png";
import { ModalInfor, ServiceCard, ServiceOrderCard } from "../../../components";
import { dataAllService, dataOtherService } from "../../../models/Mockdata";
import { ModalPublicSwimming, ModalColdPlunge } from "../../../components";

const AllService = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = (e) => {
    setIsModalOpen(!isModalOpen);
  };

  const [isModalColdPlungeOpen, setIsModalColdPlungeOpen] = useState(false);

  const handleColdPlungeClick = (e) => {
    setIsModalColdPlungeOpen(!isModalColdPlungeOpen);
  };

  return (
    <div className="w-[80%] mx-auto pv:max-lg:w-[100%] lg:max-xl:w-[95%]">
      <div className="grid grid-cols-4 gap-6 py-6 pv:max-lg:grid-cols-1 ">
        <div className="col-span-3 pv:max-ph:col-span-1 ">
          <div
            className="relative w-full  bg-cover bg-center rounded-xl pv:max-lg:rounded-none cursor-pointer hover:scale-105 duration-150 ease-linear"
            onClick={() => {
              // setIsModalOpen(!isModalOpen);
            }}
            style={{
              backgroundImage: `url(${background})`
            }}
          >
            <div className="absolute inset-0 bg-blue-600  bg-opacity-60 rounded-xl pv:max-lg:rounded-none"></div>

            <div className="relative z-10 flex flex-col  pv:max-xl:items-start xl:flex-row  items-center justify-between px-4 py-2 md:px-10 md:py-6 text-white ">
              <div className="text-left">
                <h1 className="text-3xl md:text-5xl font-bold pv:max-lg:text-2xl lg:max-xl:text-3xl">
                  PUBLIC
                </h1>

                <h1 className="text-3xl md:text-5xl font-bold pv:max-lg:text-2xl lg:max-xl:text-3xl">
                  SWIMMING
                </h1>
              </div>

              <div className="mt-4 md:text-lg ">
                <p>Explore aquatic enjoyment at Aquatics Hub!</p>

                <p>
                  Whether it's lap swimming or a fun family day, we cater to
                  all.
                </p>

                <p>
                  Join our public sessions for a vibrant swimming community
                  experience.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-10 pt-4 pv:max-lg:grid-cols-1 pv:max-lg:w-[90%] pv:max-lg:mx-auto lg:max-xl:gap-4 ">
            {dataAllService.map((item, index) => {
              return (
                <ServiceCard
                  content={item.content}
                  img={item.img}
                  serviceName={item.ServiceName}
                  color={item.color}
                  key={index}
                  type={item.type}
                  path={item.path}
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col justify-between text-sectionTitle  pv:max-ph:pt-4 pv:max-ph:gap-2 ">
          <div className="flex justify-center">
            <p className="text-2xl font-bold">OTHER SERVICES</p>
          </div>
          {dataOtherService.map((item, index) => {
            return (
              <ServiceOrderCard
                img={item.img}
                serviceName={item.ServiceName}
                key={index}
                path={item.path}
                refValue={item.ref}
                handleClick={handleColdPlungeClick}
              />
            );
          })}
        </div>
      </div>

      {isModalOpen ? (
        <ModalInfor
          isShowModal={isModalOpen}
          handle={handleClick}
          title={"Public Swimming "}
          stage={["1"]}
        />
      ) : null}

      {isModalColdPlungeOpen ? (
        <ModalInfor
          isShowModal={isModalColdPlungeOpen}
          handle={handleColdPlungeClick}
          title={"Cold Plunge "}
          stage={["5"]}
        />
      ) : null}
    </div>
  );
};

export default AllService;
