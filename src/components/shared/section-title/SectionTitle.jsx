import React from "react";

const SectionTitle = ({subHeading, heading }) => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col my-10 font-Cinzel">
        <p className="text-[#D99904] mb-3">---{subHeading}---</p>
        <span className="w-72 h-1 bg-gray-200 block"></span>
        <h2 className="text-4xl text-black my-2 uppercase ">{heading}</h2>
        <span className="w-72 h-1 bg-gray-200 block"></span>
      </div>
    </div>
  );
};

export default SectionTitle;
