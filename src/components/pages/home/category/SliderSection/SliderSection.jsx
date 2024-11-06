import React from "react";

const SliderSection = ({ img, title }) => {
  return (
    <div className=" w-full h-96 relative">
      <img className="mb-2 w-full h-full object-cover" src={img} alt="" />
      <h3 className="text-4xl uppercase absolute bottom-3 left-1/3">{title}</h3>
    </div>
  );
};

export default SliderSection;
