/** @format */

import React, { useState, useEffect, useCallback } from "react";
import logo_white from "../../../assets/logo_white.png";
import logo_mobile from "../../../assets/logo_mobile.png";
import { path } from "../../../utils/common/constant";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import imglogoflying from "../../../assets/logoflyingfish.png";
import { ModalInfor } from "../../../components";
import imgbackground from "../../../assets/Header/Banner_background.png";
// import { apiSearchCourse } from "../../../services/course";

const Header = (props) => {
  const items = [
    {
      label: (
        <div className="p-2 bg-[#003070] w-full hover:underline  decoration-white">
          <p className="text-white">CHILDREN SWIMMING LESSONS</p>
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div className="p-2 bg-[#003070] w-full hover:underline  decoration-white ">
          <p className="text-white">FLY FISH SWIM CLUB</p>
        </div>
      ),

      key: "1",
    },
    {
      label: (
        <div className="p-2 bg-[#003070] w-full  hover:underline  decoration-white">
          <p className="text-white">ADULT SWIMMING COURSES</p>
        </div>
      ),

      key: "2",
    },
    {
      label: (
        <div className="p-2 bg-[#003070] w-full hover:underline  decoration-white ">
          <p className="text-white">SCHOOL SWIMMING</p>
        </div>
      ),
      key: "3",
    },
  ];
  const navigate = useNavigate();

  const width = window.innerWidth;
  const [isMobile, setIsMobile] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const [sidebar, setSidebar] = useState(false);

  const [isModalBuyTicket, setIsModalByTicket] = useState(false);

  const handleBuyTicketClick = (e) => {
    setIsModalByTicket(!isModalBuyTicket);
  };

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const closeMenu = () => setClick(false);

  //Change nav color when scroll
  const [headerColor, setHeaderColor] = useState(false);
  const changeHeaderColor = () => {
    if (window.scrollY >= 1024) {
      setHeaderColor(true);
    } else {
      setHeaderColor(false);
    }
  };
  window.addEventListener("scroll", changeHeaderColor);

  useEffect(() => {
    if (width < 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  const handleNavbarNavigate = (pathToNavigate) => {
    closeMenu();
    navigate(pathToNavigate);
  };

  return (
    <div
      className="  h-[100px]   z-50 sticky top-0 pv:max-ph:h-[80px]"
      style={{
        backgroundImage: `url(${imgbackground})`,
        backgroundSize: "cover",
      }}
    >
      <div className=" h-full flex items-center  w-[95%]  mx-auto  px-[2%]    justify-between ">
        <div
          onClick={() => {
            navigate("../" + path.HOME);
          }}
          className="cursor-pointer"
        >
          <img
            className="w-[320px] h-[80px] 2xl:max-dvmax:w-[240px]  xl:max-dvmid:w-[180px] lg:max-xl:w-[120px] lg:max-xl:h-[60px]  md:max-lg:w-[200px] pv:max-lg:hidden "
            src={logo_white}
            alt="logo"
          />
          <img
            className="lg:hidden pv:max-md:h-20 pv:max-md:w-20 md:max-lg:h-[100px] md:max-lg:w-[100px]  "
            src={logo_mobile}
            alt="logo"
          />
        </div>

        <div className="  py-2 sticky top-0 left-0 z-[100] flex items-center    ">
          {/* desktop */}
          <nav className="flex justify-between items-center   mx-auto h-full  pv:max-lg:hidden">
            <ul className="flex justify-center items-center gap-4 xl:max-2xl:gap-2   w-full text-white  font-bold">
              <li
                className="cursor-pointer px-4 py-2 hover:border-white hover:border-[3px]  border-[3px] border-transparent rounded-lg"
                onClick={() => {
                  navigate("../" + path.ABOUTUS);
                }}
              >
                <div className="">
                  <p className="xl:max-2xl:text-lg lg:max-xl:text-xl 2xl:text-2xl ">
                    About
                  </p>
                </div>
              </li>

              <li
                className="cursor-pointer px-4 py-2 hover:border-white hover:border-[3px]  border-[3px] border-transparent rounded-lg"
                onClick={() => {
                  navigate("../" + path.ALLSERVICE);
                }}
              >
                <div className="">
                  <p className="xl:max-2xl:text-lg lg:max-xl:text-xl 2xl:text-2xl">
                    Service
                  </p>
                </div>
              </li>
              <li
                className="cursor-pointer px-4 py-2 hover:border-white hover:border-[3px]  border-[3px] border-transparent rounded-lg"
                onClick={() => {
                  navigate("../" + path.SCHEDULE);
                }}
              >
                <div className="">
                  <p className="xl:max-2xl:text-lg lg:max-xl:text-xl 2xl:text-2xl">
                    Schedule
                  </p>
                </div>
              </li>

              <li
                className="cursor-pointer px-4 py-2 hover:border-white hover:border-[3px]  border-[3px] border-transparent rounded-lg"
                onClick={() => {
                  navigate("../" + path.SHOP);
                }}
              >
                <div className="">
                  <p className="xl:max-2xl:text-lg lg:max-xl:text-xl 2xl:text-2xl">
                    Shop
                  </p>
                </div>
              </li>
              <li
                className="cursor-pointer px-4 py-2 hover:border-white hover:border-[3px]  border-[3px] border-transparent rounded-lg"
                onClick={() => {
                  navigate("../" + path.NEWS);
                }}
              >
                <div className="">
                  <p className="xl:max-2xl:text-lg lg:max-xl:text-xl 2xl:text-2xl">
                    News
                  </p>
                </div>
              </li>
              <li
                className="cursor-pointer px-4 py-2 hover:border-white hover:border-[3px]  border-[3px] border-transparent rounded-lg"
                onClick={() => {
                  navigate("../" + path.CONTACTUS);
                }}
              >
                <div className="">
                  <p className="xl:max-2xl:text-lg lg:max-xl:text-xl 2xl:text-2xl">
                    Contact us
                  </p>
                </div>
              </li>
            </ul>
          </nav>

          {/* Mobile */}
          {/* Mobile Menu Icon */}
          <div
            className="lg:hidden cursor-pointer flex justify-end"
            onClick={toggleSidebar}
          >
            {sidebar ? (
              <Icon icon={"iwwa:delete"} className="h-12 w-12"></Icon>
            ) : (
              <Icon icon={"material-symbols:menu"} className="h-12 w-12"></Icon>
            )}
          </div>

          {/* Mobile Sidebar */}
          <div
            className={`absolute text-white bg-black/75 shadow-[0px_5px_89.61px_13.39px_rgba(23,29,113,0.05)]   right-0 top-[80px] w-auto flex flex-col items-end transition-transform duration-300 ease-in-out xl:hidden h-fit rounded-lg `}
            style={{
              opacity: sidebar ? 1 : 0,
              visibility: sidebar ? "visible" : "hidden",
              transform: sidebar ? "translateY(0)" : "translateY(-20px)",
              zIndex: sidebar ? 999 : -1,
            }}
          >
            <ul className="flex flex-col gap-6 font-semibold p-4 pt-4 w-[200px]">
              <li className="h-fit">
                <a
                  onClick={() => {
                    navigate("../" + path.ABOUTUS);
                    setSidebar(false);
                  }}
                  className={`hover:text-sky-700 
                `}
                >
                  About
                </a>
              </li>
              <li
                className="h-fit"
                onClick={() => {
                  navigate("../" + path.ALLSERVICE);
                  setSidebar(false);
                }}
              >
                <a className="hover:text-sky-700 ">Service</a>
              </li>
              <li className="h-fit">
                <a
                  onClick={() => {
                    navigate("../" + path.SCHEDULE);
                    setSidebar(false);
                  }}
                  className="hover:text-sky-700 "
                >
                  Schedule
                </a>
              </li>
              <li
                className="h-fit"
                onClick={() => {
                  navigate("../" + path.SHOP);
                  setSidebar(false);
                }}
              >
                <a
                  className={`hover:text-sky-700
                  `}
                >
                  Shop
                </a>
              </li>
              <li
                className="h-fit"
                onClick={() => {
                  navigate("../" + path.NEWS);
                  setSidebar(false);
                }}
              >
                <a
                  className={`hover:text-sky-700
                  `}
                >
                  News
                </a>
              </li>
              <li
                className="h-fit"
                onClick={() => {
                  navigate("../" + path.CONTACTUS);
                  setSidebar(false);
                }}
              >
                <a
                  className={`hover:text-sky-700
                  `}
                >
                  Contact Us
                </a>
              </li>
              <button
                className="bg-[#febc59] px-2 py-2 rounded-lg lg:max-xl:px-2"
                onClick={() => {
                  // setIsModalByTicket(!isModalBuyTicket);
                  // navigate("../" + path.ORDER, {
                  //   state: { stage: ["1", "2", "3", "4"] },
                  // });
                }}
              >
                <p className="text-white font-bold  xl:max-2xl:text-lg lg:max-xl:text-sm  ">
                  BUY TICKET
                </p>
              </button>
            </ul>
          </div>

          <div className="flex gap-2 items-center pv:max-lg:hidden">
            <div className="cursor-pointer px-4 py-2 rounded-lg">
              <button
                className="bg-[#febc59] px-2 py-2 rounded-lg lg:max-xl:px-2"
                onClick={() => {
                  // setIsModalByTicket(!isModalBuyTicket);
                  // navigate("../" + path.ORDER, {
                  //   state: { stage: ["1", "2", "3", "4"] },
                  // });
                }}
              >
                <p className="text-white font-extrabold xl:max-2xl:text-lg lg:max-xl:text-sm  ">
                  BUY TICKET
                </p>
              </button>
            </div>
          </div>
        </div>
        <div
          className="cursor-pointer max-lg:hidden"
          onClick={() => {
            navigate("../" + path.CLUB);
          }}
        >
          <img
            className=" rounded-b-[40px] h-[140px] dv:max-dvmid:h-[100px] lg:max-xl:w-[100px] lg:max-xl:h-[100px] pt-[15px]"
            src={imglogoflying}
          ></img>
        </div>
      </div>

      {isModalBuyTicket ? (
        <ModalInfor
          isShowModal={isModalBuyTicket}
          handle={handleBuyTicketClick}
          title={"Buy Ticket"}
          stage={["1", "2", "3", "4"]}
        />
      ) : null}
    </div>
  );
};

export default Header;
