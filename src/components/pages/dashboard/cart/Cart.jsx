import React from "react";
import { Currency, ShoppingCart } from "../../../../provider/IconProvider";
import useCart from "../../../../hooks/useCart";
import useAuth from "../../../../hooks/useAuth";
import SectionTitle from "../../../shared/section-title/SectionTitle";
import CartItem from "./cartitem/CartItem";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleItemDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
          refetch();
        });
      }
    });
  };
  return (
    <div>
      <SectionTitle
        subHeading={"my cart"}
        heading={`${user.displayName.slice(0, 6)}... add more`}
      />
      <dir className="bg-white mx-5 p-2 lg:px-20">
        <div className="lg:flex items-center justify-between">
          <h2 className="text-xl font-bold ">Total orders: {cart.length}</h2>
          <h2 className="text-xl font-bold  flex  items-center">
            Total Price:
            <Currency /> {parseFloat(totalPrice)}
          </h2>
          {cart.length ? (
            <Link to={"/dashboard/payment"}>
              <button
                disabled={!cart.length}
                className="btn bg-[#BB8506] text-white hover:bg-emerald-500 "
              >
                Pay
              </button>
            </Link>
          ) : (
            <button
              disabled={!cart.length}
              className="btn bg-[#BB8506] text-white hover:bg-emerald-500 "
            >
              Pay
            </button>
          )}
        </div>

        <div className="overflow-x-auto mt-5 rounded-lg">
          <table className="table ">
            {/* head */}
            <thead className="bg-[#BB8506] text-white ">
              <tr>
                <th></th>
                <th>Item image</th>
                <th>item name</th>
                <th>price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, i) => (
                <CartItem
                  key={item._id}
                  item={item}
                  num={i + 1}
                  handleItemDelete={handleItemDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      </dir>
    </div>
  );
};

export default Cart;
