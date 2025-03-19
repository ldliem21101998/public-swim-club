import React, { useState } from "react";
import { Modal, Button, Alert } from "antd";
import imglevel from "../../assets/dolphin.jpg";
const ModalLevel = ({ visible, onCancel, questions = [] }) => {
  //   const [showAlert, setShowAlert] = useState(false);

  //   const handleAnswerSelect = (index, answer) => {
  //     setUserAnswers((prevAnswers) => {
  //       const newAnswers = [...prevAnswers];
  //       newAnswers[index] = answer;
  //       return newAnswers;
  //     });
  //   };

  //   const handleNextQuestion = () => {
  //     if (!userAnswers[currentQuestionIndex]) {
  //       setShowAlert(true);
  //     } else {
  //       setShowAlert(false);
  //       setCurrentQuestionIndex(currentQuestionIndex + 1);
  //       //   if (userAnswers[currentQuestionIndex] == "0") {
  //       //     // onComplete(userAnswers);
  //       //   }

  //       //   else {
  //       //     setShowAlert(false);
  //       //     setCurrentQuestionIndex(currentQuestionIndex + 1);
  //       //   }
  //     }
  //   };

  //   const handlePreviousQuestion = () => {
  //     setCurrentQuestionIndex(currentQuestionIndex - 1);
  //   };

  //   const handleCancel = () => {
  //     // Clear user answers when modal is canceled
  //     setUserAnswers(Array(questions.length).fill("0"));
  //     setCurrentQuestionIndex(0);
  //     onCancel();
  //   };

  //   const isLastQuestion = currentQuestionIndex === questions.length - 1;
  //   const isFirstQuestion = currentQuestionIndex === 0;
  //   const isQuizCompleted = currentQuestionIndex === questions.length;

  //   const splitStringByDelimiter = (inputString, delimiter) => {
  //     return inputString.split(delimiter).map((substring) => substring.trim());
  //   };
  return (
    <div>
      <Modal
        width={800}
        visible={visible}
        onOk={handleCancel}
        onCancel={handleCancel}
        footer={[]}
      >
        <div className="flex flex-col gap-4">
          <p className=""> Level của bạn là</p>
          <img className="" src={imglevel}></img>
        </div>
      </Modal>
    </div>
  );
};

export default ModalLevel;
