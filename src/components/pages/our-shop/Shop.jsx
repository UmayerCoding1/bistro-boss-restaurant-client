import React, { useState } from "react";
import Cover from "../../shared/cover/Cover";
import banner from "./../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu";
import OfferedItem from "../home/chef-recommends/OfferedItem";
import { useParams } from "react-router-dom";
import useTitle from "../../../hooks/useTitele";
const Shop = () => {
  useTitle('| our shop')
  const categories = ['salads' ,'pizza', 'soup','dessert'];
  const {category} = useParams();
  const initialIndex = categories.indexOf(category);
    const [tabIndex,setTabIndex]=useState(initialIndex);
    const [menus] = useMenu();
    console.log(category);
    
    
    
    const salad = menus.filter(item => item.category === 'salad');
    const pizza = menus.filter(item => item.category === 'pizza');
    const soup = menus.filter(item => item.category === 'soup');
    const dessert = menus.filter(item => item.category === 'dessert')
    
    
    
  return (
    <div>
      <Cover
        img={banner}
        coverTitle={"our shop"}
        coderDes={"would you like to try a dish?"}
      />

      <div className="p-2 max-w-[1050px] mx-auto">
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Salads</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soup</Tab>
    <Tab>Dessert</Tab>
    
  </TabList>
 

  <TabPanel>
    <div className='grid grid-cols-1 gap-10 lg:grid-cols-3'>
       {
        salad.map(item => <OfferedItem key={item._id} item={item} type={'true'}/>)
    } 
    </div>
    
  </TabPanel>
  
  <TabPanel>
    <div className='grid grid-cols-1 gap-10 lg:grid-cols-3'>
       {
        pizza.map(item => <OfferedItem key={item._id} item={item} type={'true'}/>)
    } 
    </div>
    
  </TabPanel>

  <TabPanel>
    <div className='grid grid-cols-1 gap-10 lg:grid-cols-3'>
       {
        soup.map(item => <OfferedItem key={item._id} item={item} type={'true'}/>)
    } 
    </div>
    
  </TabPanel>

  <TabPanel>
    <div className='grid grid-cols-1 gap-10 lg:grid-cols-3'>
       {
        dessert.map(item => <OfferedItem key={item._id} item={item} type={'true'}/>)
    } 
    </div>
    
  </TabPanel>

 
  
</Tabs>
      </div>
    </div>
  );
};

export default Shop;
