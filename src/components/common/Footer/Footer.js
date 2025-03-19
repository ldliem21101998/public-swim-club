/** @format */

import React, { useState } from "react";
import { Divider } from "antd";
import { Icon } from "@iconify/react";
import ImgZalo from "../../../assets/Logo-Zalo-Arc.webp";
import { useNavigate } from "react-router-dom";
import { path } from "../../../utils/common/constant";
import logoVNPAY from "../../../assets/logo VNPAY-QR_bg_white.png";
const Footer = (props) => {
  const navigate = useNavigate();
  const policy = [
    { key: 1, description: "Information security policy" },

    { key: 2, description: "Complaint response policy" },
    { key: 3, description: "Payment policy" },
    { key: 4, description: "Exchange, cancellation and refund policy" },
    { key: 5, description: "Online purchasing policy" }
  ];

  return (
    <>
      <div className="h-auto w-full bg-black py-6">
        <div className="grid grid-cols-4 gap-6 w-[90%] mx-auto md:max-xl:grid-cols-2 sm:max-md:grid-cols-1 ph:max-sm:grid-cols-1 pv:max-ph:grid-cols-1 pv:max-pvmax:grid-cols-1 pvmax:max-ph:grid-cols-1">
          <div className="text-white w-full mx-auto flex flex-col gap-4  ">
            <div className="flex flex-col gap-4  justify-end ">
              <p className="text-lg font-semibold">Policy</p>
              <div className="flex w-full flex-col gap-3 text-sm">
                <p
                  key={6}
                  className="cursor-pointer hover:underline"
                  onClick={() =>
                    navigate("../" + path.POLICY, {
                      state: {
                        policyId: "6"
                      }
                    })
                  }
                >
                  General Policy
                </p>
                <p
                  key={1}
                  className="cursor-pointer hover:underline"
                  onClick={() =>
                    navigate("../" + path.POLICY, {
                      state: {
                        policyId: "1"
                      }
                    })
                  }
                >
                  Information security policy
                </p>
                <p
                  key={2}
                  className="cursor-pointer hover:underline"
                  onClick={() =>
                    navigate("../" + path.POLICY, {
                      state: {
                        policyId: "2"
                      }
                    })
                  }
                >
                  Complaint response polic
                </p>
                <p
                  key={3}
                  className="cursor-pointer hover:underline"
                  onClick={() =>
                    navigate("../" + path.POLICY, {
                      state: {
                        policyId: "3"
                      }
                    })
                  }
                >
                  Payment policy
                </p>
                <p
                  key={4}
                  className="cursor-pointer hover:underline"
                  onClick={() =>
                    navigate("../" + path.POLICY, {
                      state: {
                        policyId: "4"
                      }
                    })
                  }
                >
                  Exchange, cancellation and refund policy
                </p>
                <p
                  key={5}
                  className="cursor-pointer hover:underline"
                  onClick={() =>
                    navigate("../" + path.POLICY, {
                      state: {
                        policyId: "5"
                      }
                    })
                  }
                >
                  Online purchasing policy
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4  justify-end ">
              <p className="text-lg font-semibold">Service</p>
              <p
                className="cursor-pointer hover:underline text-sm"
                onClick={() => navigate("../" + path.SWIMMINGCOURSE)}
              >
                Swim Course
              </p>
            </div>
          </div>

          <div className="text-white  flex flex-col gap-4 w-full mx-auto">
            <div className="">
              <p className="text-lg font-semibold">Swim Pool</p>
              <p className="text-sm leading-6">
                Swim Academy is passionate about sports and physical
                activity.Our school was created out of passion for water sports
                and personal development.
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <p className="text-lg font-semibold">Location</p>
            </div>
            <p className="text-xl">Goodlife., Ltd</p>
            <p className="text-sm">
              98 To Ngoc Van, Ward Quang An, District Tay Ho, Hanoi
            </p>
          </div>

          <div className="text-white  flex flex-col gap-4 w-full mx-auto ">
            <div className="flex flex-col gap-1 ">
              <p className="text-lg font-semibold text-start">Contact</p>
              <p className="text-sm">Email : contact@aquaticshub.vn</p>
              <p className="text-sm">Aquatics : 0969685445</p>
              <p className="text-sm">Aqua cafe : 0949685445</p>
            </div>

            <div className="flex flex-col gap-2 ">
              <p className="text-lg font-semibold text-start">
                Business Registration
              </p>
              <p className="text-sm leading-6">
                Business registration number: 0110496704 issued by Hanoi City
                <br />
                Business Registration Office on 22/02/2024
              </p>
              <p className="text-sm leading-6">
                Business eligibility license: 217 /GCN-SVHTT issued by Hanoi
                <br />
                Department of Culture and Sports on 07/06/2024
              </p>
            </div>

            <div className="flex flex-col gap-2 ">
              <p className="text-lg font-semibold">Accept Payments</p>
              <div className="flex justify-start  pv:max-ph:pb-12 ph:max-lg:pb-12">
                <img
                  alt="logoVNPAY"
                  className="h-16 sm:w-48 mt-1  -left-8 object-cover "
                  src={logoVNPAY}
                ></img>
              </div>
            </div>
          </div>

          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.146944107559!2d105.81925937387743!3d21.066792486473876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aafa14a5f107%3A0xfb112d523e036451!2zOTggxJAuIFTDtCBOZ-G7jWMgVsOibiwgUXXhuqNuZyBBbiwgVMOieSBI4buTLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1715311990382!5m2!1svi!2s"
            className="w-full h-full pv:max-xl:h-[300px]"
          ></iframe> */}
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2555.7156032656844!2d105.82208049496072!3d21.066535656398678!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab00070724df%3A0xe595a4f40c85035a!2sAquatics%20Hub!5e0!3m2!1svi!2sus!4v1730687996767!5m2!1svi!2sus"
            className="w-full h-full pv:max-xl:h-[300px]"
          ></iframe>
        </div>
        <Divider className="bg-white"></Divider>

        <div className=" flex justify-center">
          <p className="text-white text-sm">v{process.env.REACT_APP_VERSION}</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
