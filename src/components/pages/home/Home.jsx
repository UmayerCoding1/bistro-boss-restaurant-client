import React from "react";
import Banner from './banner/Banner';
import Category from './category/Category';
import ChefService from "./chef-service/ChefService";
import PopularMenu from "./popular-menu/PopularMenu";
import Call from "./call/Call";
import ChefRecommends from "./chef-recommends/ChefRecommends";
import Featured from "./feature/Featured";
import Testimonials from "./testimonials/Testimonials";
import useTitle from "../../../hooks/useTitele";


const Home = () => {
  useTitle(' | Home')
  return (
    <div>
      <Banner/>
      <div className="p-2 max-w-[1050px] mx-auto">
        <Category/>
        <ChefService/>
        <PopularMenu/>
        <Call/>
        <ChefRecommends/>
        <Featured/>
        <Testimonials/>
      </div>
      
    </div>
  );
};

export default Home;
