import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import { apiPostContact } from "../../services/contact";
import { path } from "../../utils/common/constant";

const ContactForm = () => {
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    message: "",
    service: "Pool Party Service",
  });

  const navigate = useNavigate();
  const handleSubmit = async (infoContact) => {
    await apiPostContact({
      name: infoContact.name,
      email: infoContact?.email,
      message: infoContact?.message,
      service: infoContact.service,
    })
      .then((res) => {
        if (res.status === 200) {
          notification.success({
            message: `Information sent successfully`,
            placement: "topRight",
            duration: 2,
          });
          navigate("../" + path.HOME);
        }
      })
      .catch((err) => {
        notification.error({
          message: "please fill information ",
          placement: "topRight",
          duration: 2,
        });
      });
  };

  return (
    <div className="flex-1">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Your Name (required)"
          value={formdata.name}
          onChange={(e) => setformdata({ ...formdata, name: e.target.value })}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Your Email (required)"
          value={formdata.email}
          onChange={(e) => setformdata({ ...formdata, email: e.target.value })}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Your Message (required)"
          value={formdata.message}
          onChange={(e) =>
            setformdata({ ...formdata, message: e.target.value })
          }
          required
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
      <div className="mb-4">
        <select
          value={formdata.service}
          onChange={(e) =>
            setformdata({ ...formdata, service: e.target.value })
          }
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {/* <option value="">Select a service (required)</option> */}
          <option value="Pool Party Service">Pool Party Service</option>
          <option value="Lane & Pool Rental Service">
            Lane & Pool Rental Service
          </option>
          <option value="Flow machine">Flow machine</option>
        </select>
      </div>
      <button
        className="bg-black text-white font-semibold px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
        onClick={() => {
          handleSubmit(formdata);
        }}
      >
        SUBMIT
      </button>
    </div>
  );
};

export default ContactForm;
