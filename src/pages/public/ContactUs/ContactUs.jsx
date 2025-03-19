import React from "react";
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import { ContactForm } from "../../../components";
import { apiPostContact } from "../../../services/contact";

const ContactUs = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center md:px-16 px-6 py-10">
      <div className="w-full">
        <h1 className="text-4xl font-bold text-sectionTitle mb-10">
          Contact us
        </h1>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 w-full">
        <div className="flex flex-col md:flex-row gap-8">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

const ContactInfo = () => {
  return (
    <div className="flex-1">
      <h2 className="text-xl font-bold mb-4">Aquatics HUB</h2>
      <ul className="space-y-4">
        <li className="flex items-center">
          <Phone className="w-5 h-5 mr-2" />
          <span>Aquatics: 096 968 5445</span>
        </li>
        <li className="flex items-center">
          <Phone className="w-5 h-5 mr-2" />
          <span>Aqua Cafe: 094 968 5445</span>
        </li>
        <li className="flex items-center">
          <Mail className="w-5 h-5 mr-2" />
          <span>Email: contact@aquaticshub.vn</span>
        </li>
        <li className="flex items-center">
          <MapPin className="w-6 h-6 mr-2" />
          <span>
            Address: 98 To Ngoc Van, Ward Quang An, District Tay Ho, Hanoi
          </span>
        </li>
      </ul>
    </div>
  );
};
