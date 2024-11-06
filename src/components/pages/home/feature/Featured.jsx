import React from "react";
import SectionTitle from "../../../shared/section-title/SectionTitle";
import featuredImg from "./../../../../assets/home/featured.jpg";
import './featured.css'
const Featured = () => {
  return (
    <div className="mb-20 w-full bg-fixed   featured-item h-[700px] relative  lg:h-[600px] md:mb-24 ">
      <SectionTitle subHeading={"Check it out"} heading={"Featured Item"} />
      <div className="md:flex justify-center bg-slate-400 bg-opacity-60 items-center w-full h-[77%] py-8 px-16">
        <div >
          <img className=" lg:h-full " src={featuredImg} alt="" />
        </div>
        

        <div className="text-white  ] ml-4 p-2">
          <p>October 12,2024</p>
          <p className="uppercase">WHERE CAN I GET SOME?</p>
          <p>
            Tender, marinated chicken breast grilled to perfection, infused with
            zesty lemon and fragrant herbs. Served with a side of roasted
            vegetables and garlic mashed potatoes. This flavorful and healthy
            dish offers a perfect balance of tangy and savory for a delightful
            dining experience.
          </p>

          <button className="btn btn-outline text-yellow-400 border-0 border-b-4 mt-2">Order Now</button>
        </div>

        {/* <div className="absolute z-0 w-full h-[90%] bg-[#25242458]"></div> */}
      </div>
    </div>
  );
};

export default Featured;
