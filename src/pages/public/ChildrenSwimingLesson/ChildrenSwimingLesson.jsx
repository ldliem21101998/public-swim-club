/** @format */

import React, { useState } from "react";
import { Modal, notification } from "antd";
import img_1 from "../../../assets/Services/ChildrenClass.png";
import img_2 from "../../../assets/sof.jpg";
import imglevel from "../../../assets/dolphin.jpg";
import { apiPostQuiz } from "../../../services/quiz";
import {
  dataLevel,
  quizSet,
  dataSOF,
  servicePackagesData,
} from "../../../models/Mockdata";
import {
  CardLevelSOF,
  CardSOF,
  ModalQuiz,
  ModalInfor,
  ServiceTableDesktop,
} from "../../../components";
import { useNavigate } from "react-router-dom";
import { path } from "../../../utils/common/constant";
const ChildrenSwimingLesson = () => {
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);
  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const [isModalCSL, setIsModalCSL] = useState(false);

  const handleCSLClick = (e) => {
    setIsModalCSL(!isModalCSL);
  };
  const [quizResult, setQuizResult] = useState({
    answers: [],
    name: "",
    color: "",
    detail: "",
    pictureUrl: "",
    targetId: "1",
  });

  const handleCompleteQuiz = async (userAnswers) => {
    let answers = [];
    for (let i = 0; i < userAnswers.length; i++) {
      const element = userAnswers[i];
      if (element === "Yes") {
        answers.push(1);
      } else if (element === "No") {
        answers.push(0);
      } else if (i === userAnswers.length - 1) {
        if (element) {
          answers.push(Number(element));
        } else {
          answers.push(0);
        }
      } else {
        answers.push(element);
      }
    }

    await apiPostQuiz({
      answers: userAnswers,
      quizName: quizSet?.question,
    })
      .then((res) => {
        if (res.status === 200) {
          setQuizResult({
            ...quizResult,
            answers: userAnswers,
            name: res.data.data.name,
            color: res.data.data.color,
            pictureUrl: res.data.data.pictureUrl,
            detail: res.data.data.detail,
            targetId: res.data.data.index,
          });
          setIsModalOpen(true);
          setModalVisible(false);
          sessionStorage.setItem("resultQuiz", JSON.stringify(res.data.data));
        }
      })
      .catch((err) => {
        notification.error({
          message: "Error evaluating user",

          placement: "topRight",
          duration: 2,
        });
      });
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex justify-center flex-col  items-center w-[80%] mx-auto py-4 pv:max-sm:w-full">
      <div className="relative w-full   flex items-center justify-center ">
        <img
          className="w-full h-full object-cover rounded-xl pv:max-sm:rounded-none"
          src={img_1}
        ></img>

        {/* <div
          className="absolute bottom-0   text-white p-4 rounded-xl pv:max-sm:rounded-none w-full h-full "
          style={{
            backgroundImage: `linear-gradient(to right, #f6941c , transparent)`,
          }}
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img className="h-[60px]" src={img_2}></img>
            </div>
            <div className="font-bold flex flex-col gap-2">
              <p className="">
                Join our School of Fish group lessons ​during the week or
              </p>
              <p className="">
                on the weekend. ​Small groups with trained instructors ​for
              </p>
              <p className="">
                fast progression.you may ​be achieving your first 5km
              </p>
              <p className="">swim before you know it!</p>
            </div>
          </div>
        </div> */}
      </div>
      <div className="grid grid-cols-3 gap-x-40 gap-y-10 py-4 sm:max-lg:grid-cols-2 pv:max-sm:grid-cols-1 pv:max-sm:p-4">
        {dataLevel.map((item, index) => {
          return (
            <CardLevelSOF
              img={item.img}
              title={item.title}
              description={item.description}
              key={index}
            />
          );
        })}
      </div>
      <div className="flex flex-col justify-center items-center pt-10 pb-20">
        <p className="text-2xl font-bold">WHICH LEVEL ARE YOU ?</p>
        <div className="flex justify-center">
          <button
            className="bg-gradient-to-r  from-[#5cdee5] to-[#024ead] px-8 py-2 rounded-lg"
            onClick={() => {
              handleOpenModal();
            }}
          >
            <p className="text-white font-extrabold text-xl underline">
              Take a short test !
            </p>
          </button>
        </div>
      </div>

      <div className="w-full overflow-y-auto">
        <ServiceTableDesktop
          data={servicePackagesData.filter(
            (item) => item.serviceName === "Children Swimming Lesson"
          )}
        />
      </div>

      {/* <div className=" bg-[#2f6da9] w-full p-4 rounded-lg grid grid-cols-3 gap-x-20 lg:max-2xl:gap-2  gap-y-10 py-4 sm:max-lg:gap-2 sm:max-lg:grid-cols-2 pv:max-sm:grid-cols-1 pv:max-sm:p-4 ">
        {dataSOF.map((item, index) => {
          return (
            <CardSOF
              key={index}
              Free={item.Free}
              LessonWeek={item.LessonWeek}
              Unlimited={item.Unlimited}
              price={item.price}
              time={item.time}
            />
          );
        })}
      </div> */}
      <div className="flex justify-center items-center gap-4 pv:max-md:flex-col ">
        <div className=" flex justify-center items-center py-4">
          <div className="bg-black bg-opacity-40 rounded-lg p-2">
            <button
              className="bg-gradient-to-r from-[#ffd959] to-[#ff984e] w-full  py-4 px-4 rounded-lg"
              onClick={() => {
                navigate("../" + path.CONTACTUS);
              }}
            >
              <p className="text-white font-bold text-xl uppercase drop-shadow-lg">
                Contacts for current class schedule
              </p>
            </button>
          </div>
        </div>
        <div className=" flex justify-center items-center py-4">
          <div className="bg-black bg-opacity-40 rounded-lg p-2">
            <button
              className="bg-gradient-to-r from-[#ffd959] to-[#ff984e] w-full  py-4 px-4 rounded-lg"
              onClick={() => {
                // setIsModalCSL(!isModalCSL);
                // navigate("../" + path.ORDER, { state: { stage: ["2"] } });
              }}
            >
              <p className="text-white font-bold text-xl uppercase drop-shadow-lg">
                Register Now
              </p>
            </button>
          </div>
        </div>
      </div>
      {modalVisible ? (
        <ModalQuiz
          visible={modalVisible}
          onCancel={handleCloseModal}
          questions={quizSet}
          onComplete={handleCompleteQuiz}
        />
      ) : null}
      {isModalOpen ? (
        <Modal
          open={isModalOpen}
          onOk={() => setIsModalOpen(false)}
          onCancel={() => setIsModalOpen(false)}
          footer={[
            <button
              className="px-4 py-2 bg-secondary1 rounded-2xl text-white font-roboto_bold"
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              <p className="text-black">OK</p>
            </button>,
          ]}
        >
          <div className="flex flex-col gap-4 w-full items-center justify-center">
            <p className="text-2xl font-bold">
              Your current leve is : {quizResult.name}
            </p>
            <img
              className=" h-[300px] w-[300px]"
              src={quizResult.pictureUrl}
            ></img>
          </div>
        </Modal>
      ) : null}

      {isModalCSL ? (
        <ModalInfor
          isShowModal={isModalCSL}
          handle={handleCSLClick}
          title={"Children Swimming Lesson"}
          stage={["2"]}
        />
      ) : null}
      {isModalCSL ? (
        <ModalInfor
          isShowModal={isModalCSL}
          handle={handleCSLClick}
          title={"Children Swimming Lesson"}
          stage={["2"]}
        />
      ) : null}
    </div>
  );
};

export default ChildrenSwimingLesson;
