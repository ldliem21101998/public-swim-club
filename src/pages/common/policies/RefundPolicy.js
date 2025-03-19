import { withTranslation } from "react-i18next";

const RefundPolicy = ({ t }) => {
  return (
    <div className="h-auto w-full flex flex-col gap-5 p-6">
      <h1 className="uppercase text-4xl font-bold drop-shadow-xl">
        {t("ref_policy_title_1")}
      </h1>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold">{t("ref_policy_subtitle_1")}</h2>
          <p className="text-justify">{t("ref_policy_desc_1")}</p>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold">{t("ref_policy_subtitle_2")}</h2>
          <p className="">{t("ref_policy_desc_2")}</p>
          <p className="">{t("ref_policy_desc_3")}</p>
          <p className="">{t("ref_policy_desc_4")}</p>
          <p className="">{t("ref_policy_desc_5")}</p>
          <div className="flex flex-col gap-5 italic">
            <h2 className="font-bold text-xl">{t("note")}</h2>
            <p className="">{t("ref_policy_desc_6")}</p>
            <p className="">{t("ref_policy_desc_7")}</p>
            <p className="">{t("ref_policy_desc_8")}</p>
            <p className="">{t("ref_policy_desc_9")}</p>
            <p className="">{t("ref_policy_desc_10")}</p>
            <p className="">{t("ref_policy_desc_11")}</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold">{t("ref_policy_subtitle_3")}</h2>
          <div className="flex flex-col gap-5 text-justify">
            <p className="text-xl font-semibold">
              {t("ref_policy_subtitle_4")}
            </p>
            <p className="">{t("ref_policy_desc_12")}</p>
            <p className="">{t("ref_policy_desc_13")}</p>
          </div>
          <div className="flex flex-col gap-5 text-justify">
            <p className="text-xl font-semibold">
              {t("ref_policy_subtitle_5")}
            </p>
            <p className="">{t("ref_policy_desc_14")}</p>
            <p className="">{t("ref_policy_desc_15")}</p>
          </div>
          <div className="flex flex-col gap-5 text-justify">
            <p className="text-xl font-semibold">{t("ref_policy_desc_16")}</p>
            <p className="">{t("ref_policy_desc_17")}</p>
            <p className="">{t("ref_policy_desc_18")}</p>
            <p className="">{t("ref_policy_desc_19")}</p>
          </div>
          <ul className="flex flex-col gap-5 text-justify">
            <p className="text-xl font-semibold">
              {t("ref_policy_subtitle_6")}
            </p>
            <div className="">
              <span className="inline-block underline mr-2">
                {t("ref_policy_step_1")}
                Step 1:{" "}
              </span>
              <span>{t("ref_policy_desc_20")}</span>
            </div>
            <li className="">
              <span className="inline-block underline mr-2">
                {t("ref_policy_step_2")}
                Step 2:{" "}
              </span>
              <span>{t("ref_policy_desc_21")}</span>
            </li>
            <li className="">
              <span className="inline-block underline mr-2">
                {t("ref_policy_step_3")}Step 3:{" "}
              </span>
              <span>{t("ref_policy_desc_22")}</span>
            </li>
            <li className="">
              <span className="inline-block underline mr-2">
                {t("ref_policy_step_4")}Step 4:{" "}
              </span>
              <span>{t("ref_policy_desc_23")}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(RefundPolicy);
