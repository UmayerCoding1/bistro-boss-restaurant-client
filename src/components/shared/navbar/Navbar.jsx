import React, { useContext, useState } from "react";
import { LogoImg } from "../../../provider/ImageProvider";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  ShoppingCart,
  SignOut,
  CloseIcon,
} from "../../../provider/IconProvider";
import { AuthContext } from "../../../provider/AuthProvider";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  const navItem = (
    <>
      <li className="font-extrabold mt-5 text-center text-[10px] lg:mr-3 lg:mt-0 ">
        <NavLink to={"/"}>HOME</NavLink>
      </li>
      <li className="font-extrabold mt-5 text-center text-[10px] lg:mr-3 lg:mt-0 ">
        <NavLink to={"/our-menu"}>OUR MENU</NavLink>
      </li>
      <li className="font-extrabold mt-5 text-center text-[10px] lg:mr-3 lg:mt-0 ">
        <NavLink to={"/order/salads"}>OUR SHOP</NavLink>
      </li>

      {
         user && isAdmin &&  <li className="font-extrabold mt-5 text-center text-[10px] lg:mr-3 lg:mt-0 ">
                 <NavLink to={"dashboard/adminHome"}>DASHBOARD</NavLink>
               </li>
      }
      {
        user && !isAdmin &&  <li className="font-extrabold mt-5 text-center text-[10px] lg:mr-3 lg:mt-0 ">
                <NavLink to={"dashboard/userHome"}>DASHBOARD</NavLink>
              </li>
      }
      <li className="font-extrabold mt-5 text-center text-[10px] lg:mr-3 lg:mt-0 ">
        <NavLink to={"/contact"}>CONTACT US</NavLink>
      </li>
    </>
  );

  return (
    <header className="fixed z-10  navbar-bg w-full">
      <nav className="flex items-center justify-between  text-white py-2 px-1 lg:p-2">
        <div className="flex items-center">
          <button
            onClick={() => setShowNav(!showNav)}
            className={
              showNav
                ? "hidden text-2xl mr-3 lg:hidden"
                : "text-2xl mr-3 lg:hidden"
            }
          >
            <Menu />
          </button>
          <button
            onClick={() => setShowNav(!showNav)}
            className={showNav ? "text-2xl mr-3 lg:hidden" : " hidden"}
          >
            <CloseIcon />
          </button>
          <img className="w-6 lg:w-10" src={LogoImg} alt="" />
          <h2 className="font-Cinzel text-xs mt-3 pl-1 lg:text-lg">
            <span className="font-bold">BISTRO BOSS</span> <br /> Restaurant
          </h2>
        </div>

        <div className="flex items-center font-Inter">
          <ul className="hidden  lg:flex">{navItem}</ul>
          <div className="relative">
            <Link to={"/dashboard/cart"}>
              <button className="ml-4 text-green-500 bg-[#4e0f4f] p-2 rounded-full text-2xl">
                <ShoppingCart />
              </button>
            </Link>
            <span className="w-5 h-5 flex items-center justify-center  bg-red-500 rounded-full absolute left-11 top-0 right-0 text-xs">
              {cart.length}
            </span>
          </div>
          {user ? (
            <div className="flex items-center relative">
              <button onClick={logOut} className="btn btn-error mx-3">
                <SignOut /> SIGN OUT
              </button>
              <img
                className="w-10 h-10 mr-5 rounded-full"
                src={user?.photoURL}
                alt=""
              />
            </div>
          ) : (
            <div className="flex items-center relative">
              <Link to={"/login"}>
                <button className="btn btn-primary mx-3">
                  <SignOut />
                  SIGN IN
                </button>
              </Link>
            </div>
          )}
        </div>

        {showNav ? (
          <div className="w-full py-5 navbar-bgm bg-black absolute top-[65px] shadow-md shadow-[#7ef5fd5d] left-0">
            <div className="flex  justify-center">
              <ul>{navItem}</ul>
            </div>
          </div>
        ) : (
          ""
        )}
      </nav>
    </header>
  );
};

export default Navbar;
