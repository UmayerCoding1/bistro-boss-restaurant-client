import React from 'react';
import { Currency } from '../../../provider/IconProvider';

const MenuItem = ({menu}) => {
    const {image,name,price,recipe}= menu;
    
    
    return (
        <div className='flex space-x-4 mt-4 '>
            <img className='w-[100px]' style={{borderRadius: '0px 200px 200px 200px'}} src={image} alt="" />
            <div>
                <h3 className='font-Cinzel text-xl font-bold'>{name} ---------</h3>
                <p className='text-xs text-gray-500'>{recipe}</p>
            </div>
            <p className='flex items-center text-yellow-500'><Currency/>{price}</p>
        </div>
    );
};

export default MenuItem;