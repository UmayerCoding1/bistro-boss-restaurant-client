import React from "react";
import { Currency } from "../../../../../provider/IconProvider";
import { RiDeleteBinLine } from "react-icons/ri";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
const CartItem = ({ item, num,handleItemDelete }) => {
  const { image, name, price, _id } = item;
  const axiosSecure = useAxiosSecure();



  return (
    <tr>
      <th>{num}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>
        <span className="flex items-center">
          <Currency />
          {price}
        </span>
      </td>
      <th>
        <button
          onClick={() => handleItemDelete(_id)}
          className="btn  btn-error text-white btn-xs "
        >
          <RiDeleteBinLine />
        </button>
      </th>
    </tr>
  );
};

export default CartItem;
