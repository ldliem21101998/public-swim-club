/** @format */

import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  InfoSecPolicy,
  OnlinePurchasePolicy,
  GeneralPolicy,
  RefundPolicy,
  PaymentPolicy,
  ComplaintPolicy,
} from "./policies";
import { withTranslation } from "react-i18next";

const PolicyPage = ({ t }) => {
  const location = useLocation();
  const [policy, setPolicy] = useState(location.state?.policyId ?? "6");

  const handleOnChangePolicy = (event) => {
    setPolicy(event.target.value);
  };

  const renderPolicy = () => {
    switch (policy) {
      case "1":
        return <InfoSecPolicy />;
      case "2":
        return <ComplaintPolicy />;
      case "3":
        return <PaymentPolicy />;
      case "4":
        return <RefundPolicy />;
      case "5":
        return <OnlinePurchasePolicy />;
      case "6":
        return <GeneralPolicy />;
      default:
        return <div></div>;
    }
  };

  const policies = [
    {
      key: 6,
      value: "6",
      label: <p className="">{t("select_General_policy")}</p>,
    },
    {
      key: 1,
      value: "1",
      label: <p className="">{t("select_info_sec_policy")}</p>,
    },

    {
      key: 1,
      value: "2",
      label: <p className="">{t("select_dispute_and_complaint")}</p>,
    },
    {
      key: 3,
      value: "3",
      label: <p className="">{t("select_payment_policy")}</p>,
    },
    {
      key: 4,
      value: "4",
      label: <p className="">{t("select_exchange_cancellation")}</p>,
    },
    {
      key: 5,
      value: "5",
      label: <p className="">{t("select_online_purchasing_policy")}</p>,
    },
  ];
  // bg-[#8ed1fc]
  return (
    <div className="mx-10 mt-10 pt-[90px] pb-[60px] flex flex-col">
      <div className="mb-10 w-full flex justify-end">
        <select
          id="policies"
          className="mr-6 px-4 py-2 outline-none rounded-lg appearance-none drop-shadow-xl cursor-pointer"
          onChange={(event) => {
            handleOnChangePolicy(event);
          }}
        >
          {policies.map((item, index) => {
            return (
              <option
                key={`${item.key}_${index}`}
                value={item.value}
                selected={item.value == policy}
              >
                {item.label}
              </option>
            );
          })}
        </select>
      </div>
      {renderPolicy()}
    </div>
  );
};

export default withTranslation()(PolicyPage);
