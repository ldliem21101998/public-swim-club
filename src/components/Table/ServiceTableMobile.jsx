const ServiceTableMobile = ({ data }) => {
  return (
    <div className="space-y-6">
      {data.map((item, index) => (
        <div
          key={index}
          className="rounded-xl border border-gray-200 bg-white overflow-hidden"
        >
          <div className="bg-gray-50 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                {item.packageName}
              </h3>
              <span className="text-xl font-semibold text-gray-900">
                {`${item.price.toLocaleString("vi-VN")} đ`}
              </span>
            </div>
          </div>
          <div className="p-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-500">
                  Schedule
                </label>
                <p className="mt-1 text-gray-900">{item.schedule}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">
                  Time
                </label>
                <p className="mt-1 text-gray-900">{item.time}</p>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">
                Benefits
              </label>
              <ul className="mt-2 space-y-2">
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
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceTableMobile;
