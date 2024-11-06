import React from "react";
import useTitle from "../../../hooks/useTitele";
import Cover from "../../shared/cover/Cover";
import bannerBg from "./../../../assets/menu/banner3.jpg";
import dessertBg from './../../../assets/menu/dessert-bg.jpeg'
import pizzaBg from './../../../assets/menu/pizza-bg.jpg';
import saladsBg from './../../../assets/menu/salad-bg.jpg';  
import soupBg from './../../../assets/menu/soup-bg.jpg';  
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../shared/section-title/SectionTitle";
import MenuCategory from "./menu-category/MenuCategory";

const OurMenu = () => {
  useTitle(" | Menu");
  const [menu] = useMenu();
  const dessert = menu.filter(item => item.category === 'dessert')
  const salad = menu.filter(item => item.category === 'salad');
  const offered = menu.filter(item => item.category === 'offered');
  const soup = menu.filter(item => item.category === 'soup');
  const pizza = menu.filter(item => item.category === 'pizza');
  return (
    <div>
     <section>
         <Cover 
        img={bannerBg}
        coverTitle={"our menu"}
        coderDes={"would you like to try a dish?"}
      />

    <div className="p-2 max-w-[1050px] mx-auto">
        {/* offered  menu item*/}
        <SectionTitle subHeading={"Don't Miss"} heading={"TODAY'S OFFER"}/>
        <MenuCategory item={offered} />

        {/* dessert menu item */}
        <MenuCategory item={dessert} title={'dessert'} coverImg={dessertBg} des={'Indulge your sweet tooth with decadent desserts! From rich chocolate lava cakes to creamy tiramisu, satisfy your cravings with delightful treats that offer a perfect balance of flavor and texture.'}/>

        {/* pizza menu item */}
        <MenuCategory item={pizza} title={'pizza'} coverImg={pizzaBg} des={"Pizza, a timeless favorite, offers endless possibilities! From classic Margherita to loaded pepperoni, each slice bursts with flavor. Whether thin crust or deep dish, it's the perfect comfort food for any occasion."}/>
        
        {/* salads menu item */}
        <MenuCategory item={salad} title={'salads'} coverImg={saladsBg} des={"Salads are a refreshing, healthy choice, packed with vibrant flavors! From crisp greens to zesty dressings and hearty toppings, they offer endless variety, making them perfect for a light meal or side dish."}/>
        
        {/* soup menu item */}
        <MenuCategory item={soup} title={'soup'} coverImg={soupBg} des={"Warm up with a bowl of comforting soup! From hearty chicken noodle to creamy tomato bisque, soups are perfect for any season, offering a nutritious and flavorful way to satisfy your appetite."}/>
    </div>
     </section>
   
    
    </div>
  );
};

export default OurMenu;
