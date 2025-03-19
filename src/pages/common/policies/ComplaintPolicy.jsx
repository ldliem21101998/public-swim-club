/** @format */

import { withTranslation } from "react-i18next";

const ComplaintPolicy = ({ t }) => {
  return (
    <div className="h-auto w-full flex flex-col p-6 gap-5">
      <h1 className="uppercase text-4xl font-bold">{t("com_policy_title")}</h1>
      <div className="flex flex-col gap-5">
        <div className="text-justify font-normal leading-8">
          {t("com_policy_description_1")}
        </div>
        <div className="text-justify font-normal leading-8">
          {t("com_policy_description_2")}
        </div>
        <div className="text-justify font-normal leading-8">
          {t("com_policy_description_3")}
        </div>
        <div className="text-justify font-normal leading-8">
          {t("com_policy_description_4")}
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-2xl">{t("com_policy_title_2")}</h2>
          <div className="">
            <span className="underline">{t("com_policy_step_1")}</span>
            <span> </span>
            <span>{t("com_policy_step_1_desc")}</span>
          </div>
          <div className="">
            <span className="underline">{t("com_policy_step_2")}</span>
            <span> </span>
            <span>{t("com_policy_step_2_desc")}</span>
          </div>
          <p className="">
            <span className="underline">{t("com_policy_step_3")}</span>
            <span> </span>
            <span>{t("com_policy_step_3_desc")}</span>
          </p>
        </div>
        <div className="my-12 text-center border-b-2"></div>
        <div className="flex flex-col items-center justify-center text-black">
          <h2 className="mb-12 text-2xl font-bold">
            {t("com_policy_sp_contact")}
          </h2>
          <ul>
            <li className="mb-2 flex justify-between">
              <span className="w-24 mr-8">{t("com_policy_name")}</span>
              <span> Aquatics HUB</span>
            </li>
            <li className="mb-2 flex justify-between">
              <span className="w-24 mr-8">{t("com_policy_phone")}</span>
              <span>0969685445</span>
            </li>
            <li className="mb-2 flex justify-between">
              <span className="w-24 mr-8">Email</span>
              <span>contact@aquaticshub.vn</span>
            </li>
            <li className="mb-2 flex items-center justify-between">
              <span className="w-24 mr-8">{t("com_policy_address")}</span>
              <span className="w-[420px] text-right">
                98 To Ngoc Van Street, Quang An Ward, Tay Ho District, Hanoi,
                Vietnam
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(ComplaintPolicy);
