/** @format */

import React, { useState } from "react";
// import imgRight from "../../../assets/right.png";
// import logo_white from "../../../assets/logo_white.png";
import background from "../../../assets/HomePage/background_banner.png"; // background image import
import {
  datahome_1,
  dataCardService,
  dataNews,
} from "../../../models/Mockdata";
import imgicon from "../../../assets/iconnext.png";
import { HomeCardSlide, ModalInfor } from "../../../components";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import SectionThree from "./SectionThree";
import "./style.css";
import { path } from "../../../utils/common/constant";
import SectionBlogs from "./SectionBlogs";
const HomePage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (e) => {
    setIsModalOpen(!isModalOpen);
  };

  // const handle = () => {
  //   handleClick();
  // };

  return (
    <div className="">
      {/* Section 1 */}
      <div
        className="relative bg-cover bg-center px-[5%] -mt-28 py-28" // Make the container relative
        style={{
          backgroundImage: `url(${background})`, // Apply the background image
        }}
      >
        <div className="absolute inset-0 bg-[#04c0cd] opacity-30"></div>
        <div className="relative py-10 h-full mx-auto grid grid-cols-2 pv:max-lg:grid-cols-1 max-w-[1700px] md:gap-4 gap-6">
          <div className="flex flex-col justify-center gap-4">
            {/* <div className="">
              <img
                className="w-[120px] pv:max-ph:w-[80px]"
                src={imgRight}
                alt="Right icon"
              />
            </div> */}
            {/* <div className="w-[10px] auto bg-white"></div> */}

            <div className="flex flex-col gap-6 border-l-[0.5rem] border-white pl-4 pr-8">
              <div className="flex gap-10 justify-start">
                <div className="flex flex-col justify-start items-start font-bold text-white drop-shadow-lg">
                  {/* <img
                  className="pv:max-md:w-[300px] w-[80%] "
                  src={logo_white}
                  alt="Logo"
                /> */}

                  <p className="text-3xl pv:max-ph:text-xl">
                    CREATING A SWIMMING CULTURE
                  </p>
                  <p className="text-6xl pv:max-ph:text-4xl">IN HANOI</p>
                </div>
              </div>
              <div className="font-medium drop-shadow-lg">
                <p className="text-white text-xl pv:max-ph:text-lg leading-8">
                  Welcome to Aquatics Hub, a modern 8-lane, 25-meter ​pool in
                  Hanoi, catering to swimmers of all ages and skill ​ levels,
                  promoting lifelong aquatic enjoyment and ​wellbeing for
                  individuals and families.
                </p>
              </div>
            </div>
            <div className="bg-black bg-opacity-40 rounded-lg p-4 w-[60%] pv:max-ph:w-full">
              <button
                className="bg-[#ffbd59] w-full py-2 px-4 rounded-lg hover:bg-[#c68a31] duration-100 ease-linear"
                onClick={() => {
                  navigate("../" + path.ALLSERVICE);
                }}
              >
                <p className="text-white font-bold text-2xl pv:max-ph:text-xl">
                  SHOW ME YOUR SERVICES
                </p>
              </button>
            </div>

            {/* <div className="flex justify-end">
              <img
                className="w-[120px] pv:max-ph:w-[80px]"
                src={imgRight}
                alt="Right icon"
              />
            </div> */}
          </div>

          {/* Swiper Carousel */}

          {/* tablet  and desktop*/}
          <div className="w-[100%] z-10">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1.5,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next-custome",
                prevEl: ".swiper-button-prev-custome",
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="w-full pb-5"
            >
              {dataCardService.map((item, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    id={`slide-${index}`}
                    className="swipper w-[320px] pv:max-ph:w-[300px] lg:max-xl:w-[200px] xl:max-2xl:w-[250px] xl:max-dvmid:justify-center"
                  >
                    <HomeCardSlide
                      key={index}
                      img={item.img}
                      content={item.content}
                      title={item.title}
                      path={item.path}
                      handleClick={handleClick}
                      cardId={`slide-${index}`}
                    />
                  </SwiperSlide>
                );
              })}

              <div className="swiper-button-next-custome cursor-pointer flex justify-center items-center top-[48%] right-[30%] hover:scale-110 duration-300 ease-linear pv:max-ph:top-[90%] ph:max-md:right-0 lg:max-xl:right-[10%]">
                <img className="" src={imgicon} alt="img"></img>
              </div>
              <div className="swiper-button-prev-custome  top-[48%] left-[30%] cursor-pointer hover:scale-110 duration-300 ease-linear pv:max-ph:top-[90%] ph:max-md:left-0 lg:max-xl:left-[10%] ">
                <img className="rotate-180" src={imgicon} alt="img"></img>
              </div>
            </Swiper>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col gap-10 py-10 ">
        <div className="text-[#003070] flex flex-col items-center gap-2 pv:max-md:w-[90%] mx-auto ">
          <p className="text-xl">WHY AQUATICSHUB</p>
          <p className="text-3xl font-bold pv:max-md:text-center">
            We’re the best in the business
          </p>
          <p className="text-xl pv:max-md:text-center">
            From more than 10 Years, we’ve been coaching swimmer in all skills
            level
          </p>
          <p className="text-xl pv:max-md:text-center">
            From Young talents to seasonal-athletes
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6 w-[80%] mx-auto pv:max-md:grid-cols-1 md:max-xl:grid-cols-2 md:max-xl:gap-8 ">
          {datahome_1.map((item, index) => {
            return (
              <div className="flex flex-col gap-3" key={index}>
                <img
                  className="h-20 w-20"
                  src={item.img}
                  alt={item.title}
                ></img>
                <div className="">
                  <p className="text-[22px] font-bold text-[#025ade] ">
                    {item.title}
                  </p>
                </div>
                <div className="">
                  <p className="text-[#003070] text-[18px]">{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-2 gap-10 w-[80%] mx-auto pv:max-md:grid-cols-1">
          <div>
            <iframe
              className="w-full lg:h-96 md:h-80 h-72"
              src="https://www.youtube.com/embed/FKX3Axr9kQY?si=GOysJbRddT8fCVTZ&autoplay=1&mute=1&loop=1&playlist=FKX3Axr9kQY&controls=0&modestbranding=1&rel=0&fs=0&iv_load_policy=3"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          {/* <div className="w-full h-full">
            <Player>
              <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            </Player>
          </div> */}

          {/* <video
            controls
            autoplay
            muted
            disablePictureInPicture
            controlsList="nodownload"
            poster="https://peach.blender.org/wp-content/uploads/bbb-splash.png?x81236"
          >
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            ></source>
          </video> */}
          <div className="text-[#003070] h-full flex flex-col gap-2">
            <p className="text-4xl font-bold">
              More than health and fun <br /> It’s a community
            </p>
            <p className="text-lg">
              At Aquatics Hub, we’re dedicated to creating a thriving swimming
              culture in Hanoi. Our mission is to inspire a lifelong passion for
              swimming by providing a safe, welcoming, and engaging environment
              for all. Beyond fitness and recreation, we’re building a community
              where individuals and families come together to connect, improve
              skills, and support each other on their aquatic journey.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <SectionThree />

      {/* Section Blogs */}
      <div className="w-[90%] mx-auto">
        <div className="flex justify-between">
          <p className="font-bold text-2xl">News</p>
          <p
            className="text-blue-500 hover:underline decoration-blue-500 cursor-pointer"
            onClick={() => {
              navigate("../" + path.NEWS);
            }}
          >
            See all
          </p>
        </div>

        {dataNews.length === 0 ? (
          <div className="py-4">
            <p className="">No news posted</p>
          </div>
        ) : (
          <SectionBlogs data={dataNews} />
        )}
      </div>

      {isModalOpen ? (
        <ModalInfor
          isShowModal={isModalOpen}
          handle={handleClick}
          title={"Public Swimming"}
          stage={"1"}
        />
      ) : null}
    </div>
  );
};

export default HomePage;
