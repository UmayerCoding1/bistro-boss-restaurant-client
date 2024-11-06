import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Currency, Update } from '../../../../provider/IconProvider';
import { Link } from 'react-router-dom';

const Item = ({item,num,handleUpdateItem,handleItemDelete}) => {
    const {image,name,price,_id}=item;
    return (
        <tr>
        <th>{num}</th>
        <td>
          <div className="flex items-center gap-3">
            <img className='w-24 rounded-lg h-20' src={image} alt="" />
          </div>
        </td>
        <td className="">{name}</td>
        <td>
          <p className='flex items-center'><Currency/> {price}</p>
        </td>
       
        <td>
        <Link to={`/dashboard/update-item/${_id}`}>
        <button
            className=" rounded-lg  bg-orange-400  text-white btn-xs "
          >
            <Update />
          </button>
        </Link>
        </td>

        <td>
        <button
            onClick={() => {handleItemDelete(_id,name)}}
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

export default Item;