import React, { useEffect, useState } from "react";
import { Collapse } from "antd";
import imgdown from "../../../assets/icondown.png";
import { Table, notification, Popconfirm } from "antd";
import { useLocation } from "react-router-dom";
import {
  dataSourcePay,
  dataSourceClub,
  dataSourceAdult,
  dataSourceChildrenSwimmingLesson,
  dataColdPlunge,
} from "../../../models/Mockdata";
import {
  apiCreatePublicSwimming,
  apiCreateChildrenSwimming,
  apiCreateAdultSwimming,
  apiCreateClubSwimming,
} from "../../../services/service";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { path } from "../../../utils/common/constant";
const Order = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const lkey = location.state.stage;
  const data = location.state.data;
  const [formdata, setformdata] = useState({
    address: data?.address,
    date_of_birth: data?.date_of_birth,
    email: data?.email,
    first_name: data?.first_name,
    gender: data?.gender,
    ip: data?.ip,
    last_name: data?.last_name,
    payment_method: data?.payment_method,
    phone: data?.phone,
  });
  const [urlvnp, seturlvnp] = useState("");

  const [informationService, setInformationService] = useState({
    tiket_type: "N/A",
    plan: "N/A",
    price: "",
    details: "N/A",
    features: "No",
  });

  const columnsPay = [
    {
      title: "Ticket Type",
      dataIndex: "tiket_type",
      key: "tiket_type",
    },
    {
      title: (
        <div className="">
          <p className="">Price</p>
          <p className="">(VND)</p>
        </div>
      ),
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Details",
      dataIndex: "details",
      key: "details",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (e, record) => {
        return (
          <a
            className="text-blue-500 hover:underline hover:text-blue-800"
            onClick={() => {
              handleAddtocartPSM(record);
            }}
          >
            Add to cart
          </a>
        );
      },
    },
  ];
  const columnsSOF = [
    {
      title: "Plan",
      dataIndex: "plan",
      key: "plan",
    },
    {
      title: "Features",
      dataIndex: "features",
      key: "features",
    },
    {
      title: (
        <div className="">
          <p className="">Price</p>
          <p className="">(VND)</p>
        </div>
      ),
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (e, record) => {
        return (
          <a
            className="text-blue-500 hover:underline hover:text-blue-800"
            onClick={() => {
              handleAddtocartChildrenSwimming(record);
            }}
          >
            Add to cart
          </a>
        );
      },
    },
  ];
  const columnsClub = [
    {
      title: "Plan",
      dataIndex: "plan",
      key: "plan",
    },
    {
      title: "Features",
      dataIndex: "features",
      key: "features",
    },
    {
      title: (
        <div className="">
          <p className="">Price</p>
          <p className="">(VND)</p>
        </div>
      ),
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (e, record) => {
        return (
          <a
            className="text-blue-500 hover:underline hover:text-blue-800"
            onClick={() => {
              handleAddtocartClub(record);
            }}
          >
            Add to cart
          </a>
        );
      },
    },
  ];
  const columnsAdult = [
    {
      title: "Plan",
      dataIndex: "plan",
      key: "plan",
    },
    {
      title: "Features",
      dataIndex: "features",
      key: "features",
    },
    {
      title: (
        <div className="">
          <p className="">Price</p>
          <p className="">(VND)</p>
        </div>
      ),
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (e, record) => {
        return (
          <a
            className="text-blue-500 hover:underline hover:text-blue-800"
            onClick={() => {
              handleAddtocartAdult(record);
            }}
          >
            Add to cart
          </a>
        );
      },
    },
  ];

  const [key, setkey] = useState([]);

  const checkKey = (arr, key) => {
    return arr.includes(key);
  };
  const items = [
    {
      key: "1",
      label: (
        <div className="flex justify-between">
          <div className="flex items-center justify-center">
            <p className="text-white font-bold text-3xl pv:max-md:text-xl">
              Pay as you go
            </p>
          </div>
          <div className="">
            <img
              className={`${
                checkKey(key, "1")
                  ? "rotate-90 duration-300 ease-linear"
                  : "rotate-0 duration-300 ease-linear"
              }   h-[40px] w-[40px] `}
              src={imgdown}
            ></img>
          </div>
        </div>
      ),
      children: (
        <div className="">
          <Table
            dataSource={dataSourcePay}
            columns={columnsPay}
            pagination={false}
            className="custome_table "
          />
        </div>
      ),
      showArrow: false,
      style: {
        backgroundColor: "#11734b",
      },
    },
    {
      key: "2",

      label: (
        <div className="flex justify-between">
          <div className="flex items-center justify-center">
            <p className="text-white font-bold text-3xl pv:max-md:text-xl">
              School of Fish Swimming Lessons - Children
            </p>
          </div>
          <div className="">
            <img
              className={`${
                checkKey(key, "2")
                  ? "rotate-90 duration-300 ease-linear"
                  : "rotate-0 duration-300 ease-linear"
              }   h-[40px] w-[40px] `}
              src={imgdown}
            ></img>
          </div>
        </div>
      ),
      children: (
        <div className="">
          <Table
            dataSource={dataSourceChildrenSwimmingLesson}
            columns={columnsSOF}
            pagination={false}
            className="custome_table"
          />
        </div>
      ),
      showArrow: false,
      style: {
        backgroundColor: "#003070",
      },
    },
    {
      key: "3",
      label: (
        <div className="flex justify-between">
          <div className="flex items-center justify-center">
            <p className="text-white font-bold text-3xl pv:max-md:text-xl">
              Flying fish club
            </p>
          </div>
          <div className="">
            <img
              className={`${
                checkKey(key, "3")
                  ? "rotate-90 duration-300 ease-linear"
                  : "rotate-0 duration-300 ease-linear"
              }   h-[40px] w-[40px] `}
              src={imgdown}
            ></img>
          </div>
        </div>
      ),
      children: (
        <div className="">
          <Table
            dataSource={dataSourceClub}
            columns={columnsClub}
            pagination={false}
            className="custome_table"
          />
        </div>
      ),
      showArrow: false,
      style: {
        backgroundColor: "#5a3286",
      },
    },
    {
      key: "4",

      label: (
        <div className="flex justify-between">
          <div className="flex items-center justify-center">
            <p className="text-white font-bold text-3xl pv:max-md:text-xl">
              Swiming courses Course-Adult
            </p>
          </div>
          <div className="">
            <img
              className={`${
                checkKey(key, "4")
                  ? "rotate-90 duration-300 ease-linear"
                  : "rotate-0 duration-300 ease-linear"
              }   h-[40px] w-[40px] `}
              src={imgdown}
            ></img>
          </div>
        </div>
      ),
      children: (
        <div className="">
          <Table
            dataSource={dataSourceAdult}
            columns={columnsAdult}
            pagination={false}
            className="custome_table"
          />
        </div>
      ),
      showArrow: false,
      style: {
        backgroundColor: "#ffd966",
      },
    },
    {
      key: "5",

      label: (
        <div className="flex justify-between">
          <div className="flex items-center justify-center">
            <p className="text-white font-bold text-3xl pv:max-md:text-xl">
              Cold Plunge
            </p>
          </div>
          <div className="">
            <img
              className={`${
                checkKey(key, "4")
                  ? "rotate-90 duration-300 ease-linear"
                  : "rotate-0 duration-300 ease-linear"
              }   h-[40px] w-[40px] `}
              src={imgdown}
            ></img>
          </div>
        </div>
      ),
      children: (
        <div className="">
          <Table
            dataSource={dataColdPlunge}
            columns={columnsAdult}
            pagination={false}
            className="custome_table"
          />
        </div>
      ),
      showArrow: false,
      style: {
        backgroundColor: "#0a53a8",
      },
    },
  ];
  useEffect(() => {
    setkey(lkey);
  }, []);

  const onChange = (key) => {
    setkey(key);
  };

  const handleAddtocartPSM = async (record) => {
    setInformationService(record);
    if (formdata !== undefined) {
      await apiCreatePublicSwimming({ ...formdata, package: record?.key })
        .then((res) => {
          notification.success({
            message: "Service created successfully",
            placement: "topRight",
            duration: 2,
          });
          seturlvnp(res.data.data);
        })
        .catch((err) => {
          notification.info({
            message: "Please fill in all information",

            placement: "topRight",
            duration: 2,
          });
        });
    }
  };
  const handleAddtocartChildrenSwimming = async (record) => {
    setInformationService(record);
    if (formdata !== undefined) {
      await apiCreateChildrenSwimming({ ...formdata, package: record?.key })
        .then((res) => {
          notification.success({
            message: "Service created successfully",
            placement: "topRight",
            duration: 2,
          });
          seturlvnp(res.data.data);
        })
        .catch((err) => {
          notification.info({
            message: "Please fill in all information",

            placement: "topRight",
            duration: 2,
          });
        });
    }
  };
  const handleAddtocartClub = async (record) => {
    setInformationService(record);
    if (formdata !== undefined) {
      await apiCreateClubSwimming(
        setformdata({ ...formdata, package: record?.key })
      )
        .then((res) => {
          notification.success({
            message: "Service created successfully",
            placement: "topRight",
            duration: 2,
          });
          seturlvnp(res.data.data);
        })
        .catch((err) => {
          notification.info({
            message: "Please fill in all information",

            placement: "topRight",
            duration: 2,
          });
        });
    }
  };
  const handleAddtocartAdult = async (record) => {
    setInformationService(record);
    if (formdata !== undefined) {
      await apiCreateAdultSwimming({ ...formdata, package: record?.key })
        .then((res) => {
          seturlvnp(res.data.data);
        })
        .catch((err) => {
          notification.info({
            message: "Please fill in all information",

            placement: "topRight",
            duration: 2,
          });
        });
    }
  };
  return (
    <div className="w-[90%] mx-auto  pv:max-md:w-[100%] grid-cols-3 grid gap-4 py-20">
      <Collapse
        items={items}
        activeKey={key}
        onChange={onChange}
        className="col-span-2"
      />

      <div className="bg-[#ececec] shadow-lg  p-4 h-[500px] rounded-2xl sticky top-[20%] left-0 flex flex-col gap-6  ">
        <div className="flex flex-col ">
          <p className="text-2xl font-bold">Personal Information</p>
          <div className="flex gap-4 ">
            <div className="flex flex-col gap-2">
              <p className="">
                <span className="text-lg font-bold">Full Name: </span>
                {formdata?.first_name} {formdata?.last_name}
              </p>

              <p className="">
                <span className="text-lg font-bold">Email: </span>
                {formdata?.email}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="">
                <span className="text-lg font-bold">Phone: </span>
                {formdata?.phone}
              </p>
              <p className="">
                <span className="text-lg font-bold">Gender: </span>
                {formdata?.gender}
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <p className="text-2xl font-bold">Service Information </p>
          <div>
            <p className="">
              {" "}
              <span className="text-lg font-bold">Ticket Type :</span>
              {informationService?.tiket_type}
            </p>
            <p className="">
              {" "}
              <span className="text-lg font-bold">Plan :</span>
              {informationService?.plan}
            </p>
            <p className="">
              <span className="text-lg font-bold">Price :</span>
              <span className="text-sectionTitle font-bold">
                {informationService?.price} VND
              </span>
            </p>
            <p className="">
              <span className="text-lg font-bold">Features :</span>
              {informationService?.features}
            </p>
            <p className="">
              <span className="text-lg font-bold">Details :</span>
              {informationService?.details}
            </p>
          </div>
        </div>
        <div className="flex py-4 justify-center items-center">
          <Popconfirm
            title="Confirm purchase of service"
            description="Check the information again before confirming"
            onConfirm={() => {
              window.location.href = urlvnp;
            }}
            okText="Yes"
            cancelText="No"
          >
            <button className=" px-6 py-2 bg-black text-white rounded-md">
              <p className="">Complete</p>
            </button>
          </Popconfirm>
        </div>
      </div>
    </div>
  );
};
export default Order;
