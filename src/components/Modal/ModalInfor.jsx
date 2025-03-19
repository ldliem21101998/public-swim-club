import { Input } from "antd";
import { Modal, DatePicker, Radio } from "antd";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { path } from "../../utils/common/constant.js";
import React, { useState } from "react";

import {
  handleDatePickerOnChange,
  formatDateToYYYYMMDD
} from "../../utils/common/date.js";

const ModalInfor = ({ isShowModal, handle, title, stage }) => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    if (validate()) {
      // console.log("formData", formData);
      navigate("../" + path.ORDER, {
        state: { stage: stage, data: formData }
      });
    } else {
      return;
    }
  };
  const validate = () => {
    let tempErrors = {};
    if (!formData.first_name) tempErrors.first_name = "First Name is required";
    if (!formData.last_name) tempErrors.last_name = "Last Name is required";
    if (!formData.phone) {
      tempErrors.phone = "Phone Number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      tempErrors.phone = "Phone Number must be 10 digits";
    }
    if (!formData.gender) tempErrors.gender = "Gender is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is not valid";
    }
    if (!formData.address) tempErrors.address = "Address is required";
    if (!formData.date_of_birth)
      tempErrors.date_of_birth = "Date of Birth is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleCancel = () => {
    handle();
  };

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    gender: "male",
    date_of_birth: formatDateToYYYYMMDD(new Date()),
    payment_method: "vnp",
    package: "",
    ip: "127.0.0.1"
  });

  return (
    <>
      <Modal
        open={isShowModal}
        onCancel={() => handleCancel()}
        footer={null}
        width={800}
        title={<p className="text-xl">{title}</p>}
      >
        <div>
          <div className="grid grid-cols-2 gap-4">
            {/* First Name và Last Name cùng một hàng */}
            <div className="flex gap-4 col-span-2">
              <div className="flex-1">
                <label>First Name</label>
                <Input
                  placeholder="First Name"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      first_name: e.target.value
                    })
                  }
                />
                {errors.first_name && (
                  <p className="text-red-500">{errors.first_name}</p>
                )}
              </div>
              <div className="flex-1">
                <label>Last Name</label>
                <Input
                  placeholder="Last Name"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      last_name: e.target.value
                    })
                  }
                />
                {errors.last_name && (
                  <p className="text-red-500">{errors.last_name}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="col-span-2">
              <label>Email</label>
              <Input
                placeholder="Email"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value
                  })
                }
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            {/* Address */}
            <div className="col-span-2">
              <label>Address</label>
              <Input
                placeholder="Address"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    address: e.target.value
                  })
                }
              />
              {errors.address && (
                <p className="text-red-500">{errors.address}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label>Phone Number</label>
              <Input
                placeholder="Phone Number"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value
                  })
                }
              />
              {errors.phone && <p className="text-red-500">{errors.phone}</p>}
            </div>

            {/* Date of Birth */}
            <div>
              <p>Date of birth</p>
              <DatePicker
                name="date_of_birth"
                className="w-full"
                allowClear={true}
                placeholder="DD-MM-YYYY"
                placement="bottomLeft"
                value={dayjs(formData.date_of_birth, "YYYYMMDD")}
                onChange={(date) => {
                  const startD = handleDatePickerOnChange(date);
                  setFormData({
                    ...formData,
                    date_of_birth: startD
                  });
                }}
              />
            </div>

            {/* Gender */}
            <div className="flex flex-col col-span-2">
              <label>Gender</label>
              <Radio.Group
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    gender: e.target.value
                  })
                }
                value={formData.gender}
              >
                <Radio value={"male"}>Male</Radio>
                <Radio value={"female"}>Female</Radio>
              </Radio.Group>
            </div>
          </div>

          {/* Submit button */}
          <div className="flex justify-end pt-4">
            <button
              className="bg-black px-8 py-2 rounded-lg"
              onClick={() => {
                handleSubmit();
              }}
            >
              <p className="text-white font-bold">Next</p>
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalInfor;
