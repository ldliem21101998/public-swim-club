import React, { useState } from "react";
import { Table, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { path } from "../../../utils/common/constant";
import {
  dataNowClub,
  dataAutumn,
  columnsAutumn,
  dataWinter,
  columnsWinter,
  dataSpring,
  columnsSpring
} from "../../../models/Mockdata";
import { ModalInfor } from "../../../components";
import imgclub_1 from "../../../assets/Services/club_1.jpg";
import imgclub_2 from "../../../assets/Services/club_2.png";
const FlyingFishClub = (props) => {
  const navigate = useNavigate();
  const [isModalClub, setIsModalCLub] = useState(false);

  const handleClubClick = (e) => {
    setIsModalCLub(!isModalClub);
  };
  const [data, setData] = useState({
    description: "",
    cost: {
      level: "",
      _2days: "",
      _3days: "",
      _4days: "",
      _5days: ""
    },
    level: {
      level1: {
        name: "",
        color: "",
        detail: "",
        pictureUrl: ""
      },
      level2: {
        name: "",
        color: "",
        detail: "",
        pictureUrl: ""
      },
      level3: {
        name: "",
        color: "",
        detail: "",
        pictureUrl: ""
      }
    },
    nowClass: [
      {
        detail: "",
        estCost: " ",
        pictureUrl: "",
        title: ""
      }
    ],
    gallery: [imgclub_2, imgclub_1]
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCancel = () => {
    setIsModalOpen(!isModalOpen);
  };

  const ScheduleTable = ({ title, data, columns }) => (
    <div className="w-full mb-4 mt-8 flex flex-col shadow-md rounded-lg overflow-hidden border border-gray-200">
      <p className="text-xl p-2 bg-gray-100 text-gray-700">{title}</p>
      <Table
        showHeader={false}
        pagination={false}
        columns={columns}
        dataSource={data}
        scroll={{ x: "max-content" }}
      />
    </div>
  );

  return (
    <div>
      <div className="grid grid-cols-5 w-[65%] mx-auto pt-[120px] gap-10 pv:max-dv:w-[80%] pv:max-dv:gap-10 pv:max-dv:pt-4 md:max-dv:pt-[100px]">
        <div className="col-span-2">
          <div className="pb-4">
            <p className="text-[#575958] text-5xl w-[70%] pv:max-dv:text-[3vw] pv:max-dv:w-[100%]">
              FLYING FISH ​SWIM CLUB
            </p>
          </div>
          <div className="text-[#391b0b] w-[100%] text-[24px] flex flex-col gap-10 pv:max-dv:text-[2vw] pv:max-dv:gap-2 pv:max-md:font-semibold">
            <p className="">
              Welcome to Flying Fish Swim Club, ​where passion meets potential!
              We're ​more than a swim club; we're a ​community committed to
              nurturing ​young swimmers with the attitude, ​drive, and potential
              to excel in the ​pool. We promote a long term journey ​through the
              sport of swimming.
            </p>
            <p className="">
              Our culture is not just to teach our ​swimmers how to swim
              competitively ​but to understand the process of ​reaching personal
              goals in an ​environment that is fun and fulfilling. ​We aim not
              to just produce swimmers ​who learn ‘how’ to swim fast and
              efficiently but developing intelligent ​athletes who understand
              ‘why’ they ​enjoy swimming.
            </p>
            <p className="">
              All squads will participate in local ​competitions with higher
              levels offered ​the chance to take part in{" "}
              <b>INTERNATIONAL COMPETITIONS.</b>
            </p>
            <p className="">
              All swimmers need to participate in a ​tryout to be allocated a
              squad place.
            </p>
          </div>
        </div>
        <div className="w-full h-full object-cover col-span-3 flex flex-col gap-10 pv:max-dv:gap-4 ">
          {data.gallery.map((item, index) => {
            return (
              <div key={index} className="h-full">
                <img alt="img" src={item} className="object-cover h-full" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="pt-[20px] pv:max-ph:pt-[20px] md:max-lg:pt-[65px] lg:max-dh:pt-[75px]  ">
        <div className="">
          <div className="bg-black flex flex-col gap-10 py-10">
            <div className=" w-[60%] pv:max-ph:w-[90%] md:max-lg:w-[80%] mx-auto">
              <p className="text-white text-5xl pv:max-ph:text-3xl pv:max-ph:text-start underline">
                FLYING FISH SQUADS
              </p>
            </div>
            <div className=" w-[60%] pv:max-ph:w-[90%] md:max-lg:w-[80%] mx-auto grid grid-cols-3 text-white gap-6 pv:max-md:grid-cols-1 md:max-xl:grid-cols-2 gap-y-20">
              {dataNowClub.map((item, index) => {
                return (
                  <div key={index} className="justify-center bg-white ">
                    <img
                      alt="img"
                      className="h-[300px] w-full object-cover"
                      src={item.img}
                    ></img>
                    <div className="m-4 flex flex-col gap-4">
                      <div className="w-full flex justify-between items-center">
                        <p className="text-[#1b4235] font-bold text-2xl">
                          {item.title}
                        </p>

                        {item.img2 && (
                          <img
                            src={item.img2}
                            alt="trophy"
                            className="md:w-8 w-10"
                          />
                        )}
                      </div>
                      <p className="text-[#391b0b] text-lg">{item.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-[#8c52ff] w-full  py-10">
            <div className="w-[60%] mx-auto flex flex-col gap-10  pv:max-md:w-[90%]">
              <div className="">
                <p className="underline text-white text-4xl">
                  SQUAD STANDARDS - AUGUST 2024
                </p>
              </div>
              <div className="bg-white p-10">
                <img alt="img" src={imgclub_2}></img>
              </div>
            </div>
          </div>

          <div className="bg-black w-full  py-10">
            <div className="w-[70%] mx-auto flex flex-col gap-10  pv:max-md:w-[90%]">
              <div className="">
                <p className="underline text-white text-4xl">
                  FLYING FISH SQUAD TRAINING TIMES
                </p>
              </div>
              <div className="">
                <img alt="img" src={imgclub_1}></img>
              </div>
            </div>
          </div>

          <div className="bg-[#8c52ff] w-full pt-10">
            <div className="w-[60%] mx-auto flex flex-col gap-10 pv:max-xl:w-[90%] mb-14">
              <p className="uppercase text-white text-5xl underline pv:max-ph:text-2xl ph:max-md:text-3xl md:max-xl:text-4xl   ">
                FLYING FISH COST
              </p>
              <p className="uppercase text-white text-5xl font-bold  pv:max-ph:text-2xl ph:max-md:text-3xl md:max-xl:text-4xl">
                MONTHLY - VND 2,500,000 (INCLUDES ENTRY TICKET)
              </p>
              <div className="uppercase text-white text-5xl  pv:max-ph:text-2xl ph:max-md:text-3xl md:max-xl:text-4xl">
                <p className="">DEVELOPMENT, PURPLE & BRONZE SQUADS</p>
                <p className="">2 - 4 SESSIONS PER WEEK</p>
              </div>
              <div className="uppercase text-white text-5xl  pv:max-ph:text-2xl ph:max-md:text-3xl md:max-xl:text-4xl">
                <p className="">SILVER & GOLD SQUADS</p>
                <p className="">2 - 5 SESSIONS PER WEEK</p>
              </div>
              <div className="uppercase text-white text-5xl  pv:max-ph:text-2xl ph:max-md:text-3xl md:max-xl:text-4xl">
                <p className="">ELITE SQUAD</p>
                <p className="">2 - 6 SESSIONS PER WEEK</p>
              </div>
              <p className="uppercase text-white text-5xl  pv:max-ph:text-2xl ph:max-md:text-3xl md:max-xl:text-4xl">
                *CONTACT US IF YOU WOULD LIKE TO BE A PART OF THE ​FLYING FISH
                COMMUNITY BUT UNABLE TO FIND SUITABLE ​COMMITMENT TO THE
                TRAINING SCHEDULE.
              </p>
            </div>

            <div className="flex justify-center items-center bg-white py-14">
              <div className="w-[50%] flex justify-center items-center">
                <div className="bg-black bg-opacity-40 rounded-lg p-4">
                  <button
                    className="bg-gradient-to-r from-teal-300 to-blue-800 w-full md:py-6 py-4 px-4 rounded-lg"
                    onClick={() => {
                      // setIsModalCLub(!isModalClub);
                    }}
                  >
                    <p className="text-white font-bold lg:text-3xl text-xl uppercase drop-shadow-lg">
                      Register Now
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Modal
            width={"850px"}
            open={isModalOpen}
            onOk={() => handleOk()}
            onCancel={() => handleCancel()}
          >
            <ScheduleTable
              title="Autumn Session"
              data={dataAutumn}
              columns={columnsAutumn}
            />
            <ScheduleTable
              title="Winter Session"
              data={dataWinter}
              columns={columnsWinter}
            />
            <ScheduleTable
              title="Spring Session"
              data={dataSpring}
              columns={columnsSpring}
            />
          </Modal>
        </div>
      </div>
      {isModalClub ? (
        <ModalInfor
          isShowModal={isModalClub}
          handle={handleClubClick}
          title={"FLYING FISH ​SWIM CLUB"}
          stage={["3"]}
        />
      ) : null}
    </div>
  );
};

export default FlyingFishClub;
