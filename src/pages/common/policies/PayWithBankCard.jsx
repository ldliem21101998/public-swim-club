/** @format */

import { useState } from "react";

import ImagePolicy13 from "../../../assets/policies/policy_guide_13.png";
import ImagePolicy14 from "../../../assets/policies/policy_guide_14.png";
import { withTranslation } from "react-i18next";

const PayWithBankCard = ({ t }) => {
  const [stage, setStage] = useState(0);
  const handleOnChangeStage = (stage) => {
    setStage(stage);
  };

  return (
    <div className="px-8 py-12 w-[90%] max-w-[100%] rounded-xl bg-white flex drop-shadow-2xl">
      <div className="w-[40%] mr-6 flex flex-col justify-center items-center">
        <img src={ImagePolicy13} alt="VN PAY-QR" className="scale-75" />
        <img src={ImagePolicy14} alt="VN PAY-QR" className="scale-75" />
      </div>
      <div className="grow-1 flex flex-col justify-evenly items-start">
        <div className="mb-4 flex items-center">
          <span
            className={`w-[40px] mr-10 flex justify-center items-center cursor-pointer ${
              stage == 0
                ? "w-8 h-10 rounded-full text-white bg-[#0f2471] shadow-xl"
                : "w-8 h-10 border-2 border-[#0f2471] text-[#0f2471] rounded-full"
            }`}
            onClick={() => {
              handleOnChangeStage(0);
            }}
          >
            {1}
          </span>
          <div
            className={`w-[220px] lg:w-[800px] flex flex-col justify-center ${
              stage == 0 ? "text-xl font-bold text-[#0f2471]" : ""
            }`}
          >
            <span className={`${stage == 0 ? "mb-4" : ""}`}>
              {t("pay_policy_confirm_bankCard")}
            </span>

            {stage == 0 && (
              <span className="whitespace-normal text-justify text-base font-bold text-black">
                {t("pay_policy_confirm_desc_bankCard")}
              </span>
            )}
          </div>
        </div>
        <div className="mb-4 flex items-center">
          <span
            className={`w-[40px] mr-10 flex justify-center items-center cursor-pointer ${
              stage == 1
                ? "w-8 h-10 rounded-full text-white bg-[#0f2471] shadow-xl"
                : "w-8 h-10 border-2 border-[#0f2471] text-[#0f2471] rounded-full"
            }`}
            onClick={() => {
              handleOnChangeStage(1);
            }}
          >
            {2}
          </span>
          <div
            className={`w-[220px] lg:w-[800px] flex flex-col justify-center ${
              stage == 1 ? "text-xl font-bold text-[#0f2471]" : ""
            }`}
          >
            <span className={`${stage == 1 ? "mb-4" : ""}`}>
              {t("pay_policy_select_method_bankCard")}
            </span>

            {stage == 1 && (
              <span className="whitespace-normal text-justify text-base font-bold text-black">
                {t("pay_policy_select_method_desc_bankCard")}
              </span>
            )}
          </div>
        </div>
        <div className="mb-4 flex items-center">
          <span
            className={`w-[40px] mr-10 flex justify-center items-center cursor-pointer ${
              stage == 2
                ? "w-8 h-10 rounded-full text-white bg-[#0f2471] shadow-xl"
                : "w-8 h-10 border-2 border-[#0f2471] text-[#0f2471] rounded-full"
            }`}
            onClick={() => {
              handleOnChangeStage(2);
            }}
          >
            {3}
          </span>
          <div
            className={`w-[220px] lg:w-[800px] flex flex-col justify-center ${
              stage == 2 ? "text-xl font-bold text-[#0f2471]" : ""
            }`}
          >
            <span className={`${stage == 2 ? "mb-4" : ""}`}>
              {t("pay_policy_verification_bankCard")}
            </span>

            {stage == 2 && (
              <span className="whitespace-normal text-justify text-base font-bold text-black">
                {t("pay_policy_verification_desc_bankCard")}

                <br />
                <br />
                <em>{t("pay_policy_verification_note_bankCard")}</em>
              </span>
            )}
          </div>
        </div>
        <div className="mb-4 flex items-center">
          <span
            className={`w-[40px] mr-10 flex justify-center items-center cursor-pointer ${
              stage == 3
                ? "w-8 h-10 rounded-full text-white bg-[#0f2471] shadow-xl"
                : "w-8 h-10 border-2 border-[#0f2471] text-[#0f2471] rounded-full"
            }`}
            onClick={() => {
              handleOnChangeStage(3);
            }}
          >
            {4}
          </span>
          <div
            className={`w-[220px] lg:w-[800px] flex flex-col justify-center ${
              stage == 3 ? "text-xl font-bold text-[#0f2471]" : ""
            }`}
          >
            <span className={`${stage == 3 ? "mb-4" : ""}`}>
              {t("pay_policy_reCheck")}
            </span>

            {stage == 3 && (
              <span className="whitespace-normal text-justify text-base font-bold text-black">
                {t("pay_policy_reCheck_desc_bankCard")}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(PayWithBankCard);
