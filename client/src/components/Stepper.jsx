import React from "react";

const Stepper = ({ complete }) => {
  return (
    <>
      <div className="flex items-center max-w-screen-lg mx-auto my-10">
        <div className="flex items-center w-full">
          <div
            className={`w-8 h-8 shrink-0 mx-[-1px]  p-1.5 flex items-center justify-center rounded-full ${
              0 <= complete ? "bg-blue-600" : "bg-gray-300"
            }`}
          >
            <span className="text-base text-white font-bold">1</span>
          </div>
          <div className={`w-full h-1 mx-4 rounded-lg  ${0 <= complete ?"bg-blue-600":"bg-gray-300"}`} />
        </div>
        <div className="flex items-center w-full">
          <div
            className={`w-8 h-8 shrink-0 mx-[-1px]  p-1.5 flex items-center justify-center rounded-full ${
              1 <= complete ? "bg-blue-600" : "bg-gray-300"
            }`}
          >
            <span className="text-base text-white font-bold">2</span>
          </div>
          <div className={`w-full h-1 mx-4 rounded-lg  ${1 <= complete ?"bg-blue-600":"bg-gray-300"}`} />

        </div>
        <div className="flex items-center">
          <div
            className={`w-8 h-8 shrink-0 mx-[-1px]  p-1.5 flex items-center justify-center rounded-full ${
              2 <= complete ? "bg-blue-600" : "bg-gray-300"
            }`}
          >
            <span className="text-base text-white font-bold">3</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stepper;
