/** @format */

import OnlinePurchasePolicy_step1 from "../../../assets/policies/OnlinePurchasePolicy_step1.png";
import OnlinePurchasePolicy_Step1_1 from "../../../assets/policies/OnlinePurchasePolicy_Step1_1.png";
import OnlinePurchasePolicy_Step2 from "../../../assets/policies/OnlinePurchasePolicy_Step2.png";
import OnlinePurchasePolicy_Step2_1 from "../../../assets/policies/OnlinePurchasePolicy_Step2_1.png";
import OnlinePurchasePolicy_Step2_2 from "../../../assets/policies/OnlinePurchasePolicy_Step2_2.png";
import OnlinePurchasePolicy_Step3 from "../../../assets/policies/OnlinePurchasePolicy_Step3.png";
import OnlinePurchasePolicy_Step3_1 from "../../../assets/policies/OnlinePurchasePolicy_Step3_1.png";
import { withTranslation } from "react-i18next";

const OnlinePurchasePolicy = ({ t }) => {
  return (
    <div className="p-6 flex flex-col gap-5">
      <h1 className="uppercase text-4xl font-bold drop-shadow-xl">
        {t("onl_pur_policy")}
      </h1>
      <p>
        {t("onl_pur_policy_title1")}{" "}
        <a href="https://aquaticshub.vn/">https://aquaticshub.vn/</a>,{" "}
        {t("onl_pur_policy_title2")}
      </p>
      <div className="flex flex-col gap-5">
        <h3>
          {t("onl_pur_policy_step1_title1")}{" "}
          <a href="https://aquaticshub.vn/">https://aquaticshub.vn/</a>.{" "}
          {t("onl_pur_policy_step1_title2")}
        </h3>
        <div>{t("onl_pur_policy_step1_detail1")}</div>
        <div>{t("onl_pur_policy_step1_detail2")}</div>
        <img
          className="w-[50%] mx-auto object-cover"
          alt="step1"
          src={OnlinePurchasePolicy_step1}
        />
        <div>{t("onl_pur_policy_step1_detail3")}</div>
        <img
          className="w-[50%] mx-auto object-cover"
          alt="step1"
          src={OnlinePurchasePolicy_Step1_1}
        />
      </div>

      <div className="flex flex-col gap-5">
        <h3>{t("onl_pur_policy_step2_title")}</h3>
        <ul className="list-disc pl-5">
          <li>{t("onl_pur_policy_step2_list1")}</li>
          <li>{t("onl_pur_policy_step2_list2")}</li>
          <li>{t("onl_pur_policy_step2_list3")}</li>
          <li>{t("onl_pur_policy_step2_list4")}</li>
          <li>{t("onl_pur_policy_step2_list5")}</li>
          <li>{t("onl_pur_policy_step2_list6")}</li>
        </ul>
        <img
          className="w-[50%] mx-auto object-cover"
          alt="step2"
          src={OnlinePurchasePolicy_Step2}
        />
        <img
          className="w-[50%] mx-auto object-cover"
          alt="step2"
          src={OnlinePurchasePolicy_Step2_1}
        />
        <img
          className="w-[50%] mx-auto object-cover"
          alt="step2"
          src={OnlinePurchasePolicy_Step2_2}
        />
      </div>

      <div className="flex flex-col gap-5">
        <h3>{t("onl_pur_policy_step3_title")}</h3>
        <img
          className="w-[50%] mx-auto object-cover"
          alt="step2"
          src={OnlinePurchasePolicy_Step3}
        />
      </div>

      <div className="flex flex-col gap-5">
        <h3>{t("onl_pur_policy_step4_title")}</h3>
        <img
          className="w-[50%] mx-auto object-cover"
          alt="step2"
          src={OnlinePurchasePolicy_Step3_1}
        />
      </div>

      <div className="flex flex-col gap-5">
        <h2 className="font-bold text-xl">{t("note")}</h2>
        <p className="italic">– {t("onl_pur_policy_step5_note1")}</p>
        <p className="italic">– {t("onl_pur_policy_step5_note2")}</p>
      </div>
    </div>
  );
};

export default withTranslation()(OnlinePurchasePolicy);
