import React, { useState } from 'react';
import SectionTitle from '../../../shared/section-title/SectionTitle';
import OfferedItem from './OfferedItem';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';


const ChefRecommends = () => {
    const [offered,setOffered]= useState([]);
    const axiosSecure = useAxiosSecure();
    useState(() => {
        axiosSecure('/menus')
        .then(res => setOffered(res.data.filter(item => item.category === 'offered')))
    },[]);

    console.log(offered);
    
    return (
        <section>
            <SectionTitle subHeading={'Should Try'} heading={'CHEF RECOMMENDS'}/>
            <div className='grid grid-cols-1 gap-10 lg:grid-cols-3'>
               {
                offered.map(item => <OfferedItem key={item._id} item={item}/>)
               }
            </div>
        </section>
    );
};

export default ChefRecommends;