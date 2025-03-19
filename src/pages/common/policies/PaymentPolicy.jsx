/** @format */

import { useState } from "react";
import { useLocation } from "react-router-dom";

import ImagePolicy01 from "../../../assets/policies/policy_guide_01.png";
import ImagePolicy02 from "../../../assets/policies/policy_guide_02.png";
import ImagePolicy03 from "../../../assets/policies/policy_guide_03.png";
import ImagePolicy04 from "../../../assets/policies/policy_guide_04.png";
import ImagePolicy05 from "../../../assets/policies/policy_guide_05.png";
import ImagePolicy06 from "../../../assets/policies/policy_guide_06.png";
import ImagePolicy11 from "../../../assets/policies/policy_guide_11.png";
import ImagePolicy12 from "../../../assets/policies/policy_guide_12.png";

import PayWithVNPayQR from "./PayWithVNPayQR";
import PayWithBankCard from "./PayWithBankCard";
import { withTranslation } from "react-i18next";

const PaymentPolicy = ({ t }) => {
  const [payments, setPayments] = useState([
    {
      active: true,
      method: "VN PAY-QR",
      component: <PayWithVNPayQR />,
    },
    {
      active: false,
      method: <p> {t("pay_policy_method_2")}</p>,
      component: <PayWithBankCard />,
    },
    {
      active: false,
      method: <p> {t("pay_policy_method_3")}</p>,
      component: (
        <span className="w-[90%] p-4 mt-8 text-lg rounded-xl font-bold bg-white lg:w-full">
          {t("pay_policy_similar_1")}
        </span>
      ),
    },
    {
      active: false,
      method: "VN PAY E-Wallet",
      component: (
        <span className="w-[90%] p-4 mt-8 text-lg rounded-xl font-bold bg-white lg:w-full">
          {t("pay_policy_similar_2")}
        </span>
      ),
    },
  ]);

  const handleOnChangePaymentMethod = (index) => {
    for (let i = 0; i < payments.length; i++) {
      if (i == index) {
        payments[index].active = true;
      } else {
        payments[i].active = false;
      }
    }

    setPayments([...payments]);
  };

  return (
    <div className="h-auto w-full flex flex-col gap-14 p-6">
      <div className="flex flex-col gap-5">
        <h1 className="uppercase text-3xl font-bold">
          {t("pay_policy_title_1")}
        </h1>
        <span className="text-justify font-normal leading-8">
          {t("pay_policy_desc_1")}
        </span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <span className="text-2xl text-justify mb-4 fond-bold text-center">
          {t("pay_policy_title_2")}
        </span>
        <img
          src={ImagePolicy11}
          alt="Bank Connect"
          className="w-full h-auto max-w-[1320px] max-h-[300px]"
        />
        <img
          src={ImagePolicy12}
          alt="Bank Connect"
          className="w-full h-auto max-w-[1320px] max-h-[300px]"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <span className="text-2xl text-justify mb-4 fond-bold text-center">
          {t("pay_policy_title_3")}
        </span>
        <img
          src={ImagePolicy04}
          alt="Bank Connect"
          className="w-full h-auto max-w-[1725px] max-h-[650px]"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <span className="text-2xl text-justify mb-4 fond-bold text-center">
          {t("pay_policy_title_4")}
        </span>
        <img
          src={ImagePolicy01}
          alt="Bank Connect"
          className="w-full h-auto max-w-[850px] max-h-[103px]"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <span className="text-2xl text-justify mb-4 fond-bold text-center">
          {t("pay_policy_title_5")}
        </span>
        <img
          src={ImagePolicy06}
          alt="Bank Connect"
          className="w-full h-auto max-w-[806px] max-h-[650px]"
        />
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-evenly mb-4">
        {payments.map((payment, index) => {
          return (
            <span
              key={index}
              className={`py mb-2 w-fit cursor-pointer text-xl lg:mb-0 lg:hover:scale-125 ${
                payment.active ? "lg:scale-125 border-b-2 shadow-xl" : ""
              }`}
              onClick={() => {
                handleOnChangePaymentMethod(index);
              }}
            >
              {payment.method}
            </span>
          );
        })}
      </div>
      <div className="flex items-center justify-center">
        {payments.map((payment) => {
          if (payment.active) {
            return payment.component;
          }
        })}
      </div>
      <div className="w-[80%] my-12 mx-auto text-center border-b-2"></div>
      <div className="flex flex-col items-center justify-center text-black">
        <h2 className="mb-12 text-2xl font-bold">{t("pay_policy_support")}</h2>
        <ul>
          <li className="mb-2 flex justify-between">
            <span className="w-24 mr-8">{t("pay_policy_email")}</span>{" "}
            <span>hotro@vnpay.vn</span>
          </li>
          <li className="mb-2 flex justify-between">
            <span className="w-24 mr-8">{t("pay_policy_switchboard")}</span>
            <span>*3388 or 1900 55 55 77</span>
          </li>
          {/* <li className="mb-2 flex">
            <span className="w-24 mr-8">Fanpage</span>
            <span>facebook.com/VNPAYQR.vn</span>
          </li> */}
          <li className="mb-2 flex justify-between">
            <span className="w-24 mr-8">Zalo OA</span>
            <span>zalo.me/4134983655549474109</span>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default withTranslation()(PaymentPolicy);
