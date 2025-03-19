import { withTranslation } from "react-i18next";

const InfoSecPolicy = ({ t }) => {
  return (
    <div className="p-6 flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <h2 className="font-bold text-4xl uppercase">{t("info_sec_policy")}</h2>
        <p>
          {t("info_sec_policy_section1_description")}{" "}
          <a href="https://aquaticshub.vn/">https://aquaticshub.vn/</a>.
        </p>
        <p>{t("info_sec_policy_section1_detail")}</p>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-xl">
            {t("info_sec_policy_section2_item1_title")}
          </h2>
          <p>
            {t("info_sec_policy_section2_item1_detail1")}
            <a href="https://aquaticshub.vn/"> https://aquaticshub.vn/ </a>
            {t("info_sec_policy_section2_item1_detail2")}
          </p>
          <ul className="list-disc pl-5">
            <li>{t("info_sec_policy_section2_item1_list1")}</li>
            <li>{t("info_sec_policy_section2_item1_list2")}</li>
            <li>{t("info_sec_policy_section2_item1_list3")}</li>
          </ul>

          <p className="my-6">
            Website:
            <a href="https://aquaticshub.vn/"> https://aquaticshub.vn/</a>
          </p>
          <h2 className="font-bold text-xl">
            {t("info_sec_policy_section2_item1_detail3")}
          </h2>
          <ul className="list-disc pl-5">
            <li>
              {t("signup_firstname")} - {t("signup_lastname")}
            </li>
            <li>{t("signup_address")}</li>
            <li>{t("sign_phone")}</li>
            <li>Email</li>
            <li>
              {t("login_username")}, {t("sign_password")}
            </li>
            <li>{t("info_sec_policy_section2_item1_list4")}</li>
          </ul>
          <p>{t("info_sec_policy_section2_item1_detail4")}</p>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-xl">
            {t("info_sec_policy_section2_item2_title")}
          </h2>
          <p>{t("info_sec_policy_section2_item2_description")}</p>
          <ul className="list-disc pl-5">
            <li>{t("info_sec_policy_section2_item2_list1")}</li>
            <li>{t("info_sec_policy_section2_item2_list2")}</li>
            <li>{t("info_sec_policy_section2_item2_list3")}</li>
            <li>{t("info_sec_policy_section2_item2_list4")}</li>
            <li>{t("info_sec_policy_section2_item2_list5")}</li>
            <li>
              {t("info_sec_policy_section2_item2_list6")}{" "}
              <a href="https://aquaticshub.vn/">https://aquaticshub.vn/</a>.
            </li>
          </ul>
          <p>{t("info_sec_policy_section2_item2_detail")}</p>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-xl">
            {t("info_sec_policy_section2_item3_title")}
          </h2>
          <p>
            {t("info_sec_policy_section2_item3_detail")}{" "}
            <a href="https://aquaticshub.vn/">https://aquaticshub.vn/</a>.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-xl">
            {t("info_sec_policy_section2_item4_title")}
          </h2>
          <p>
            {t("info_sec_policy_section2_item4_detail1")}{" "}
            <a href="https://aquaticshub.vn/">https://aquaticshub.vn/</a>{" "}
            {t("info_sec_policy_section2_item4_detail2")}
          </p>
          <p>- {t("info_sec_policy_section2_item4_list1")}</p>
          <p>- {t("info_sec_policy_section2_item4_list2")}</p>
          <p>- {t("info_sec_policy_section2_item4_list3")}</p>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-xl">
            {t("info_sec_policy_section2_item5_title")}
          </h2>
          <p>
            {t("info_sec_policy_section2_item5_detail1")}{" "}
            <a href="https://aquaticshub.vn/">https://aquaticshub.vn/</a>{" "}
            {t("info_sec_policy_section2_item5_detail2")}{" "}
            <a href="https://aquaticshub.vn/">https://aquaticshub.vn/</a>{" "}
            {t("info_sec_policy_section2_item5_detail3")}
          </p>
          <ul className="list-disc pl-5">
            <li>{t("info_sec_policy_section2_item5_list1")}</li>
            <li>{t("info_sec_policy_section2_item5_list2")}</li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-xl">
            {t("info_sec_policy_section2_item6_title")}
          </h2>
          <ul className="list-disc pl-5">
            <li>{t("info_sec_policy_section2_item6_list1")}</li>
            <li>{t("info_sec_policy_section2_item6_list2")}</li>
            <li>{t("info_sec_policy_section2_item6_list3")}</li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-xl">
            - {t("info_sec_policy_section2_item7_title")}
          </h2>
          <p>
            {t("info_sec_policy_section2_item7_detail1")}{" "}
            <a href="https://aquaticshub.vn/">https://aquaticshub.vn/</a>{" "}
          </p>
          <p>
            {t("info_sec_policy_section2_item7_detail2")}{" "}
            <a href="https://aquaticshub.vn/">https://aquaticshub.vn/</a>{" "}
            {t("info_sec_policy_section2_item7_detail3")}
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-xl">
            - {t("info_sec_policy_section2_item8_title")}
          </h2>
          <p>
            {t("info_sec_policy_section2_item8_detail1")}{" "}
            <a href="https://aquaticshub.vn/">https://aquaticshub.vn/</a>{" "}
            {t("info_sec_policy_section2_item8_detail2")}
          </p>
          <ul className="list-disc pl-5">
            <li>{t("info_sec_policy_section2_item8_list1")}</li>
            <li>{t("info_sec_policy_section2_item8_list2")}</li>
            <li>{t("info_sec_policy_section2_item8_list3")}</li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-xl">{t("note")}</h2>
          <ul className="list-disc pl-5 italic">
            <li>{t("info_sec_policy_section2_item9_detail1")}</li>
            <li>{t("info_sec_policy_section2_item9_detail2")}</li>
            <li>{t("info_sec_policy_section2_item9_detail3")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(InfoSecPolicy);
