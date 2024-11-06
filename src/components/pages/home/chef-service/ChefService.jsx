import React from "react";
import { ChefS } from "../../../../provider/ImageProvider";

const ChefService = () => {
  return (
    <div className="w-full h-[180px] bg-red-400 relative lg:h-96 lg:mb-20">
      <img className="h-full" src={ChefS} alt="" />
      <div className="flex items-center justify-center flex-col font-Cinzel bg-white w-[80%] p-4 h-[90%] rounded-lg absolute top-2 left-10 lg:h-72 lg:left-28 lg:top-10">
        <h2 className="text-4xl ">Bistro Boss</h2>
        <p className="text-xs p-2">
          At Bistro Boss Restaurant, our chef crafts flavorful dishes, <br />{" "}
          blending classic techniques with fresh, local ingredients to <br />{" "}
          create unforgettable culinary experiences.
        </p>
      </div>
    </div>
  );
};

export default ChefService;
