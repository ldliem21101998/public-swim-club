import React from "react";

const ServiceTableDesktop = ({ data }) => {
  return (
    <table className="w-full border-collapse text-left table-auto">
      <thead className="bg-gray-50">
        <tr className="text-sm">
          <th className="px-6 py-4 font-semibold text-gray-900">Package</th>
          <th className="px-6 py-4 font-semibold text-gray-900">Price</th>
          <th className="px-6 py-4 font-semibold text-gray-900">Schedule</th>
          <th className="px-6 py-4 font-semibold text-gray-900">Time</th>
          <th className="px-6 py-4 font-semibold text-gray-900">Benefits</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {data.map((item, index) => (
          <tr
            key={index}
            className="transition-colors hover:bg-gray-50/50 text-sm pv:max-md:text-[1w]"
          >
            <td className="px-6 py-4">
              <div className="font-medium text-gray-900">
                {item.packageName}
              </div>
            </td>
            <td className="px-6 py-4">
              <div className="font-semibold text-gray-900">
                {`${item.price.toLocaleString("vi-VN")} đ`}
              </div>
            </td>
            <td className="px-6 py-4">
              <div className="text-gray-600">{item.schedule}</div>
            </td>
            <td className="px-6 py-4">
              <div className="text-gray-600">{item.time}</div>
            </td>
            <td className="px-6 py-4">
              <ul className="space-y-2">
                {item.benefits.split("\n").map((benefit, index) =>
                  // (
                  //   <div className="flex items-start gap-2">
                  //     <svg
                  //       className="h-5 w-5 flex-shrink-0 text-red-500 mt-0.5"
                  //       xmlns="http://www.w3.org/2000/svg"
                  //       viewBox="0 0 24 24"
                  //       fill="none"
                  //       stroke="currentColor"
                  //       strokeWidth="2"
                  //       strokeLinecap="round"
                  //       strokeLinejoin="round"
                  //     >
                  //       <polyline points="6 6 18 18" />
                  //       <polyline points="6 18 18 6" />
                  //     </svg>
                  //     <span className="text-gray-600">No</span>
                  //   </div>
                  // )
                  benefit === "No" ? null : (
                    <li key={index} className="flex items-start gap-2">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  )
                )}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ServiceTableDesktop;
