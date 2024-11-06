import React from 'react';
import MenuItem from '../../../shared/menu-item/MenuItem';
import Cover from '../../../shared/cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({item,title,des,coverImg}) => {
 console.log(title);
 

    return (
        
        <div className=' pt-10'>
        {title &&  <Cover 
        img={coverImg}
        coverTitle={title}
        coderDes={des}
      />}
        <div className="lg:grid grid-cols-2 gap-5">
        {item.map((menu) => (
          <MenuItem key={menu._id} menu={menu} />
        ))}
      </div>
      <Link to={`/order/${title}`}>:
      <button className="btn border-0 border-b-4 border-black font-Cinzel font-bold mt-10 ">
           Order Now
          </button>
      </Link>
        </div>
    );
};

export default MenuCategory;