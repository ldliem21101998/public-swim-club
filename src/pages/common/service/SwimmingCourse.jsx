import { withTranslation } from "react-i18next";

const SwimmingCourse = ({ t }) => {
  return (
    <div className="mx-10 mt-10 pv:max-ph:mx-0 pt-[90px] pb-[60px] flex flex-col">
      <div className="p-6 flex flex-col gap-5 ">
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-3xl uppercase">
            {t("sc_policy_title")}
          </h2>
          <p className="text-lg leading-7">
            {t("sc_policy_section1_description")}
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-xl font-bold">{t("sc_policy_section1_title")}</p>
        </div>
        <div className="flex flex-col gap-5">
          <div className="">
            <p className="text-xl font-bold">{t("sc_policy_section_2")}</p>
          </div>
          <div className="">
            <p className="leading-7 text-lg">
              {t("sc_policy_section_2_desciption_1")}
              <br></br>
              {t("sc_policy_section_2_desciption_2")} <br></br>
              {t("sc_policy_section_2_desciption_3")}
              <br></br>
              {t("sc_policy_section_2_desciption_4")}
              <br></br>
              {t("sc_policy_section_2_desciption_5")}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="text-xl font-bold">
            <p className="">{t("sc_policy_section_3")}</p>
          </div>
          <div className="">
            <p className="leading-7 text-lg">
              {t("sc_policy_section_3_desciption_1")}
              <br></br>
              {t("sc_policy_section_3_desciption_2")}.<br></br>
              {t("sc_policy_section_3_desciption_3")}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="">
            <p className="text-xl font-bold">{t("sc_policy_section_4")}</p>
          </div>
          <div className="">
            <p className="leading-7 text-lg">
              {t("sc_policy_section_4_description_1")}
              <br></br>
              {t("sc_policy_section_4_description_2")}
              <br></br>
              {t("sc_policy_section_4_description_3")}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="">
            <p className="text-xl font-bold">{t("sc_policy_section_5")}</p>
          </div>
          <div className="">
            <p className="leading-7 text-lg">
              {t("sc_policy_section_5_description_1")}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="">
            <p className="font-bold text-xl">{t("sc_policy_section_6")}</p>
          </div>
          <div className="">
            <p className="leading-7 text-lg">
              {t("sc_policy_section_6_description_1")}

              <br></br>
              {t("sc_policy_section_6_description_2")}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="text-xl font-bold">
            <p className="">{t("sc_policy_section_7")}</p>
          </div>
          <div className="">
            <p className="leading-7 text-lg">
              {t("sc_policy_section_7_description_1")}
              <br></br>
              {t("sc_policy_section_7_description_2")}
              <br></br>
              {t("sc_policy_section_7_description_3")}
              <br></br>
              {t("sc_policy_section_7_description_4")}

              <br></br>
              {t("sc_policy_section_7_description_5")}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="">
            <p className="text-xl font-bold">{t("sc_policy_section_8")}</p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-lg leading-7">
              {t("sc_policy_section_8_description_1")}{" "}
              <b>{t("sc_policy_section_8_description_2")} </b>{" "}
              {t("sc_policy_section_8_description_3")}
              <a href="https://aquaticshub.vn/ " className="hover:underline">
                {" "}
                https://aquaticshub.vn.
              </a>
            </p>
            <div className="flex flex-col gap-3">
              <p className="text-lg leading-7">
                {t("sc_policy_section_8_description_4")}
              </p>
              <p className="text-lg leading-7">
                {t("sc_policy_section_8_description_5")}
              </p>
              <p className="text-lg leading-7">
                {t("sc_policy_section_8_description_6")}
              </p>
            </div>
            <div className="">
              <p className="text-lg leading-7">
                <b> {t("sc_policy_section_8_description_7")} </b>{" "}
                {t("sc_policy_section_8_description_8")}
              </p>
            </div>
            <div className="">
              <p className="text-lg leading-7">
                <b>{t("sc_policy_section_8_description_9")}</b>{" "}
                {t("sc_policy_section_8_description_10")}
              </p>
            </div>
            <div className="">
              <p className="text-lg leading-7">
                <b>{t("sc_policy_section_8_description_11")} </b>{" "}
                {t("sc_policy_section_8_description_12")}{" "}
                <b>{t("sc_policy_section_8_description_13")}</b>{" "}
                {t("sc_policy_section_8_description_14")}
              </p>
              <p className="">{t("sc_policy_section_8_description_15")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(SwimmingCourse);
