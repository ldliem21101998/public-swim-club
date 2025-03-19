import { withTranslation } from "react-i18next";

const GeneralPolicy = ({ t }) => {
  return (
    <div className="p-6 flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <h2 className="font-bold text-4xl uppercase">{t("general_policy")}</h2>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-2xl">{t("general_policy")}</h2>
          <p className="font-bold text-xl">{t("general_policy_section1")}</p>
          <ul className="list-disc pl-5">
            <li>
              {t("general_policy_section1_list1_item1")}:{" "}
              <span className="font-bold uppercase">
                {t("general_policy_section1_list1_item2")}
              </span>
            </li>
            <li>
              {t("general_policy_section1_list2_item1")}{" "}
              <span className="font-bold">
                {t("general_policy_section1_list2_item2")}
              </span>
            </li>
            <li>{t("general_policy_section1_list3_item1")}</li>
            <li>{t("general_policy_section1_list4_item1")}</li>
            <li>{t("general_policy_section1_list5_item1")}</li>
            <li>{t("general_policy_section1_list6_item1")}</li>
            <li>{t("general_policy_section1_list7_item1")}</li>
          </ul>

          <h2 className="font-bold text-xl">{t("general_policy_section2")}</h2>
          <p>{t("general_policy_section2_description")}</p>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-xl">{t("general_policy_section3")}</h2>
          <p>{t("general_policy_section3_description")}</p>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-xl">{t("general_policy_section4")}</h2>
          <p>{t("general_policy_section4_description1")}</p>
          <p>{t("general_policy_section4_description2")}</p>
          <p>{t("general_policy_section4_description3")}</p>
          <ul className="list-disc pl-5">
            <li>
              {t("general_policy_section4_list1_item1")}:{" "}
              <span className="font-bold uppercase">
                {t("general_policy_section1_list1_item2")}
              </span>
            </li>
            <li>
              {t("general_policy_section4_list2_item1")}{" "}
              <span className="font-bold">
                {t("general_policy_section1_list2_item2")}
              </span>
            </li>
            <li>{t("general_policy_section4_list3_item1")}</li>
            <li>{t("general_policy_section4_list4_item1")}</li>
            <li>{t("general_policy_section4_list5_item1")}</li>
            <li>{t("general_policy_section4_list6_item1")}</li>
            <li>{t("general_policy_section4_list7_item1")}</li>
          </ul>
          <p>{t("general_policy_section4_description4")}</p>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(GeneralPolicy);
