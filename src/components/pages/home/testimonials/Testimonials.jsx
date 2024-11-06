import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../shared/section-title/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';



const Testimonials = () => {
    const [reviews,setReviews]=useState([]);
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        axiosSecure('/reviews')
        .then(res => setReviews(res.data))
    },[])
    return (
        <div>
            <SectionTitle subHeading={'What Our Clients Say'} heading={'TESTIMONIALS'}/>
            
           
            <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
             {
                reviews.map(review =><SwiperSlide key={review._id}>
                    <div className='flex flex-col items-center my-16 mx-24'>
                    <Rating
      style={{ maxWidth: 170 }}
      value={review.rating}
      readOnly
    />
                        <p>{review.details}</p>
                        <h3 className='text-3xl py-2 text-orange-400'>{review.name}</h3>
                    </div>
                </SwiperSlide> )
             }
      </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;