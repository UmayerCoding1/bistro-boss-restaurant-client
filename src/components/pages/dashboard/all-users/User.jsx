import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { Group } from "../../../../provider/IconProvider";

const User = ({ user, num ,handleUserDelete,handleMakeAdmin}) => {
  const { name, email ,_id} = user;
  return (
    <tr>
      <th>{num}</th>
      <td>
        <div className="flex items-center gap-3">
          <p>{name}</p>
        </div>
      </td>
      <td className="text-center">{email}</td>
      <td>
        {user.role === 'admin'? 'Admin' : 
        <button onClick={() => handleMakeAdmin(user)} className="text-orange-500 text-2xl"><Group/></button>
        }
      </td>
      <td>
      <button
          onClick={() => handleUserDelete(_id)}
          className="btn  btn-error text-white btn-xs "
        >
          <RiDeleteBinLine />
        </button>
      </td>
      <th>
        
      </th>
    </tr>
  );
};

export default User;
