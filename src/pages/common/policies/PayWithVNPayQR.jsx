/** @format */

import { useState } from "react";
import { Icon } from "@iconify/react";

import ImagePolicy05 from "../../../assets/policies/policy_guide_05.png";
import ImagePolicy07 from "../../../assets/policies/policy_guide_07.png";
import ImagePolicy08 from "../../../assets/policies/policy_guide_08.png";
import ImagePolicy09 from "../../../assets/policies/policy_guide_09.png";
import ImagePolicy10 from "../../../assets/policies/policy_guide_10.png";
import { withTranslation } from "react-i18next";

const PayWithVNPayQR = ({ t }) => {
  const [stage, setStage] = useState(0);

  const handleOnChangeStage = (stage) => {
    setStage(stage);
  };

  const handleOnChangeImage = () => {
    switch (stage) {
      case 0:
        return ImagePolicy07;
      case 1:
        return ImagePolicy08;
      case 2:
        return ImagePolicy09;
      case 3:
        return ImagePolicy10;
      default:
        return ImagePolicy05;
    }
  };

  const handleNextStage = () => {
    setStage(stage + 1);
  };

  const handlePreviousStage = () => {
    setStage(stage - 1);
  };

  return (
    <div className="px-8 py-12 w-fit rounded-xl bg-white flex flex-col md:w-[100%] lg:justify-center lg:items-center lg:flex-row drop-shadow-2xl">
      <div className="w-full flex flex-col justify-center md:flex-row md:justify-between md:items-center lg:w-[40%] lg:mr-6 ">
        <Icon
          icon={"oui:arrow-left"}
          className={`text-secondary2 p-2 w-32 h-12 cursor-pointer hidden rounded-lg md:block 2xl:p-0 2xl:h-20 2xl:w-36 hover:bg-slate-100 ${
            stage == 0 ? "invisible	" : ""
          }`}
          onClick={() => {
            handlePreviousStage();
          }}
        ></Icon>
        <img
          src={handleOnChangeImage()}
          alt="VN PAY-QR"
          className="mx-2 scale-75 lg:scale-100"
        />
        <Icon
          icon={"oui:arrow-right"}
          className={`text-secondary2 p-2 w-32 h-12 cursor-pointer hidden rounded-lg md:block 2xl:p-0 2xl:h-20 2xl:w-36 hover:bg-slate-100 ${
            stage == 3 ? "invisible	" : ""
          }`}
          onClick={() => {
            handleNextStage();
          }}
        ></Icon>
      </div>
      <div className="lg:grow-1 flex flex-col justify-between items-start">
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
            className={`flex flex-col justify-center ${
              stage == 0 ? "text-xl font-bold text-[#0f2471]" : ""
            }`}
          >
            <span className={`${stage == 0 ? "mb-4" : ""}`}>
              {t("pay_policy_confirm_vnpay_qr")}
            </span>

            {stage == 0 && (
              <span className="w-[220px] md:w-[520px] lg:w-[800px]  text-justify text-base font-bold text-black">
                {t("pay_policy_confirm_desc_vnpay_qr")}
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
            className={`w-[220px] md:w-[520px] lg:w-[800px] flex flex-col justify-center ${
              stage == 1 ? "text-xl font-bold text-[#0f2471]" : ""
            }`}
          >
            <span className={`${stage == 1 ? "mb-4" : ""}`}>
              {t("pay_policy_select_method_vnpay_qr")}
            </span>

            {stage == 1 && (
              <span className="whitespace-normal text-justify text-base font-bold text-black">
                {t("pay_policy_select_method_desc_vnpay_qr")}
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
            className={`w-[220px] md:w-[520px] lg:w-[800px] flex flex-col justify-center ${
              stage == 2 ? "text-xl font-bold text-[#0f2471]" : ""
            }`}
          >
            <span className={`${stage == 2 ? "mb-4" : ""}`}>
              {t("pay_policy_scan_vnpay_qr")}
            </span>

            {stage == 2 && (
              <span className="whitespace-normal text-justify text-base font-bold text-black">
                {t("pay_policy_scan_desc_vnpay_qr")}

                <br />
                <br />
                <em>{t("pay_policy_scan_note_vnpay_qr")}</em>
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
            className={`w-[220px] md:w-[520px] lg:w-[800px] flex flex-col justify-center ${
              stage == 3 ? "text-xl font-bold text-[#0f2471]" : ""
            }`}
          >
            <span className={`${stage == 3 ? "mb-4" : ""}`}>
              {t("pay_policy_reCheck_vnpay_qr")}
            </span>

            {stage == 3 && (
              <span className="whitespace-normal text-justify text-base font-bold text-black">
                {t("pay_policy_reCheck_desc_vnpay_qr")}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(PayWithVNPayQR);

// w-[40px] mr-10 w-10 h-8 rounded-full flex justify-center items-center text-white bg-[#0f2471]
