import React, { useState } from "react";
import { Modal, Button, Alert } from "antd";

const ModalQuiz = ({ visible, onCancel, questions = [], onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    Array(questions.length).fill("0")
  );

  const [showAlert, setShowAlert] = useState(false);

  const handleAnswerSelect = (index, answer) => {
    setUserAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = answer;
      return newAnswers;
    });
  };

  const handleNextQuestion = () => {
    if (!userAnswers[currentQuestionIndex]) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      //   if (userAnswers[currentQuestionIndex] == "0") {
      //     // onComplete(userAnswers);
      //   }

      //   else {
      //     setShowAlert(false);
      //     setCurrentQuestionIndex(currentQuestionIndex + 1);
      //   }
    }
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleCancel = () => {
    // Clear user answers when modal is canceled
    setUserAnswers(Array(questions.length).fill("0"));
    setCurrentQuestionIndex(0);
    onCancel();
  };

  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;
  const isQuizCompleted = currentQuestionIndex === questions.length;

  const splitStringByDelimiter = (inputString, delimiter) => {
    return inputString.split(delimiter).map((substring) => substring.trim());
  };
  return (
    <div>
      <Modal
        width={800}
        visible={visible}
        onOk={handleCancel}
        onCancel={handleCancel}
        footer={[
          <Button
            key="previous"
            disabled={isFirstQuestion}
            onClick={handlePreviousQuestion}
          >
            Previous
          </Button>,
          isQuizCompleted ? (
            <Button
              className="bg-blue-500 text-white"
              key="complete"
              type="primary"
              onClick={() => {
                onComplete(userAnswers);
                
              }}
            >
              Complete
            </Button>
          ) : (
            <Button
              className="bg-blue-500 text-white"
              key="next"
              type="primary"
              onClick={() => {
                isLastQuestion ? onComplete(userAnswers) : handleNextQuestion();
              }}
            >
              {isLastQuestion ? "Complete" : "Next"}
            </Button>
          ),
        ]}
      >
        {showAlert && (
          <Alert
            message="Please select an answer before proceeding"
            type="warning"
            showIcon
            closable
            onClose={() => setShowAlert(false)}
            className="my-4 w-[80%] mx-auto"
          />
        )}
        <div>
          <div className="absolute bottom-6 left-6">
            <span className="text-sm">
              {currentQuestionIndex + 1}/{questions.length}
            </span>
          </div>
          <div>
            <p className="text-2xl font-bold my-2">
              Question {currentQuestionIndex + 1}:
            </p>
            <ul>
              {splitStringByDelimiter(
                questions[currentQuestionIndex]?.question,
                "/"
              ).map((item, index) => {
                return <li className="text-xl">{item}</li>;
              })}
            </ul>
            <ul>
              {questions[currentQuestionIndex]?.options.map(
                (option, index) =>
                  option !== "" && (
                    <li key={index}>
                      <label className="block cursor-pointer py-1 px-2 rounded-md transition-colors hover:bg-blue-300">
                        <input
                          type="checkbox"
                          className="mr-2 cursor-pointer appearance-none w-4 h-4 rounded-full border border-gray-300 checked:bg-purple-500 checked:border-transparent focus:outline-none"
                          checked={
                            userAnswers[currentQuestionIndex] ===
                            (option == "Yes" ? "1" : "0")
                          }
                          onChange={(e) => {
                            handleAnswerSelect(
                              currentQuestionIndex,
                              option == "Yes" ? "1" : "0"
                            );
                          }}
                        />
                        <span className="text-xl">{option}</span>
                      </label>
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalQuiz;
