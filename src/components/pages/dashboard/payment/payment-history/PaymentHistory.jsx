import React from 'react';
import useAuth from '../../../../../hooks/useAuth';
import useAxiosSecure from '../../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../../../shared/section-title/SectionTitle';

const PaymentHistory = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data:payments=[]}= useQuery({
        queryKey:['payments',user.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/payments/${user.email}`)            
            return res.data
        }
        
    })
    
    
    return (
        <div>
         <SectionTitle subHeading={'at a glancel'} heading={'payment history'}/>
           

           <div>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Total price</th>
        <th>transaction Id</th>
        <th>status</th>
      </tr>
    </thead>
    <tbody>
     
     {
        payments.map((item,i) => 
            <tr key={item._id} className="bg-base-200">
        <th>{i+1}</th>
        <td>${item.price}</td>
        <td>{item.transactionId}</td>
        <td ><span className='bg-red-400 text-white p-2 rounded-lg cursor-pointer'>{item.status}</span></td>
      </tr>
        )
     }
      
    </tbody>
  </table>
</div>
           </div>
        </div>
    );
};

export default PaymentHistory;