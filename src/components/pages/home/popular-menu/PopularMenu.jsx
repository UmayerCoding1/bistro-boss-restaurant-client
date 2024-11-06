import React, { useEffect, useState } from "react";
import SectionTitle from "../../../shared/section-title/SectionTitle";
import MenuItem from "../../../shared/menu-item/MenuItem";
import useMenu from "../../../../hooks/useMenu";

const PopularMenu = () => {
  const [menus,loading,refetch] = useMenu();
  const popular = menus.filter((item) => item.category === "popular");

  return (
    <section className="mb-16  lg:mb-24">
      <SectionTitle subHeading={"Popular Item"} heading={"Form Our Menu"} />

      <div className="lg:grid grid-cols-2 gap-5">
        {popular.map((menu) => (
          <MenuItem key={menu._id} menu={menu} />
        ))}
      </div>
      <div className="flex  items-center justify-center">
        <button className="btn border-0 border-b-4 border-black font-Cinzel font-bold mt-10 ">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
