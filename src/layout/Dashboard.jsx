import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  Booking,
  Calendar,
  CloseIcon,
  Group,
  Home,
  MANU,
  MenuIcon,
  Res,
  Review,
  ShoppingCart,
  Wallet,
} from "../provider/IconProvider";
import { LogoImg } from "../provider/ImageProvider";
import useCart from "../hooks/useCart";
import { FaEnvelope } from "react-icons/fa6";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  // TODO: get isAdmin value from the database
  
  return (
    <div className="lg:flex font-Cinzel p-0 m-0">
      {showMenu ? (
        ""
      ) : (
        <button
          onClick={() => {
            setShowMenu(!showMenu);
          }}
          className="text-2xl p-2 lg:hidden"
        >
          <MANU />
        </button>
      )}
      {showMenu ? (
        <div className=" bg-[#d19f54e7]  p-5 lg:min-h-screen lg:w-64 ">
          <button
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className="text-2xl "
          >
            <CloseIcon />
          </button>
          <div className="flex items-center shadow-lg p-1 bg-[#f1c583f6]">
            <img className="w-6 lg:w-10" src={LogoImg} alt="" />
            <h2 className="font-Cinzel text-xs mt-3 pl-1 lg:text-lg">
              <span className="font-bold">BISTRO BOSS</span> <br /> Restaurant
            </h2>
          </div>
          <ul className="menu">
            <li className=" pb-2 font-medium">
              <NavLink to={"/dashboard/userHome"}>
                {" "}
                <Home />
                USER HOME
              </NavLink>
            </li>
            <li className=" pb-2 font-medium">
              <NavLink to={"/dashboard/reservation"}>
                {" "}
                <Calendar />
                RESERVATION
              </NavLink>
            </li>
            <li className=" pb-2 font-medium">
              <NavLink to={"/dashboard/payment-history"}>
                {" "}
                <Wallet />
                PAYMENT HISTORY
              </NavLink>
            </li>
            <li className=" pb-2 font-medium">
              <NavLink to={"/dashboard/cart"}>
                {" "}
                <ShoppingCart />
                MY CART
              </NavLink>
            </li>
            <li className=" pb-2 font-medium">
              <NavLink to={"/dashboard/add-review"}>
                {" "}
                <Review />
                ADD REVIEW
              </NavLink>
            </li>
            <li className=" pb-2 font-medium">
              <NavLink to={"/dashboard/my-booking"}>
                {" "}
                <Booking />
                MY BOOKING
              </NavLink>
            </li>
          </ul>
          <hr />

          <ul className="menu">
            <li className="pb-2 font-medium">
              <NavLink to={"/"}>
                {" "}
                <Home />
                HOME
              </NavLink>
            </li>
            <li className="pb-2 uppercase  font-medium">
              <NavLink to={"/order/salads"}>
                {" "}
                <Wallet />
                Shop{" "}
              </NavLink>
            </li>
            <li className="pb-2 uppercase  font-medium">
              <NavLink to={"/our-menu"}>
                {" "}
                <Calendar />
                Menu
              </NavLink>
            </li>
            <li className="pb-2 uppercase  font-medium">
              <NavLink to={"/contact"}>
                {" "}
                <ShoppingCart />
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}

      <div>
        <div className="  bg-[#d19f54e7] p-5 lg:min-h-screen lg:w-64 lg:block ">
          <div className="flex items-center shadow-lg p-1 bg-[#f1c583f6]">
            <img className="w-6 lg:w-10" src={LogoImg} alt="" />
            <h2 className="font-Cinzel text-xs mt-3 pl-1 lg:text-lg">
              <span className="font-bold">BISTRO BOSS</span> <br /> Restaurant
            </h2>
          </div>
          {isAdmin ? (
            <>
              <ul className="menu">
                <li className=" pb-2 font-medium">
                  <NavLink to={"/dashboard/adminHome"}>
                    {" "}
                    <Home />
                    ADMIN HOME
                  </NavLink>
                </li>
                <li className=" pb-2 font-medium">
                  <NavLink to={"/dashboard/add-item"}>
                    {" "}
                    <Res />
                    ADD ITEM
                  </NavLink>
                </li>
                <li className=" pb-2 font-medium">
                  <NavLink to={"/dashboard/manage-items"}>
                    {" "}
                    <MenuIcon />
                    MANAGE ITEMS
                  </NavLink>
                </li>
                <li className=" pb-2 font-medium">
                  <NavLink to={"/dashboard/manage-booking"}>
                    {" "}
                    <Booking />
                    MANAGE BOOKING
                  </NavLink>
                </li>
                <li className=" pb-2 font-medium">
                  <NavLink to={"/dashboard/all-user"}>
                    {" "}
                    <Group />
                    ALL USER
                  </NavLink>
                </li>
              </ul>
            </>
          ) : (
            <>
              <ul className="menu">
                <li className=" pb-2 font-medium">
                  <NavLink to={"/dashboard/userHome"}>
                    {" "}
                    <Home />
                    USER HOME
                  </NavLink>
                </li>
                <li className=" pb-2 font-medium">
                  <NavLink to={"/dashboard/reservation"}>
                    {" "}
                    <Calendar />
                    RESERVATION
                  </NavLink>
                </li>
                <li className=" pb-2 font-medium">
                  <NavLink to={"/dashboard/payment-history"}>
                    {" "}
                    <Wallet />
                    PAYMENT HISTORY
                  </NavLink>
                </li>
                <li className=" pb-2 font-medium">
                  <NavLink to={"/dashboard/cart"}>
                    {" "}
                    <ShoppingCart />
                    MY CART ({cart.length})
                  </NavLink>
                </li>
                <li className=" pb-2 font-medium">
                  <NavLink to={"/dashboard/add-review"}>
                    {" "}
                    <Review />
                    ADD REVIEW
                  </NavLink>
                </li>
                <li className=" pb-2 font-medium">
                  <NavLink to={"/dashboard/my-booking"}>
                    {" "}
                    <Booking />
                    MY BOOKING
                  </NavLink>
                </li>
              </ul>
            </>
          )}
          <hr />

          <ul className="menu">
            <li className="pb-2 font-medium">
              <NavLink to={"/"}>
                {" "}
                <Home />
                HOME
              </NavLink>
            </li>
            <li className="pb-2 uppercase  font-medium">
              <NavLink to={"/order/salads"}>
                {" "}
                <Wallet />
                Shop{" "}
              </NavLink>
            </li>
            <li className="pb-2 uppercase  font-medium">
              <NavLink to={"/our-menu"}>
                {" "}
                <Calendar />
                Menu
              </NavLink>
            </li>
            <li className="pb-2 uppercase  font-medium">
              <NavLink to={"/contact"}>
                {" "}
                <FaEnvelope />
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-base-200 lg:flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
