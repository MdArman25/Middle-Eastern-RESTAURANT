import Cover from "../Shared/cover/Cover";
import coverImg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../Hooks/useMenu";
import "react-tabs/style/react-tabs.css";
// import FoodCard from "../../components/SectionTitle/FoodCard";
import ShopTabs from "../../components/SectionTitle/ShopTabs";
import { useParams } from "react-router-dom";


const OurShop = () => {
  const [menu]=useMenu()
  const categories =['salad','pizza','soup','dessert','drinks']
  const {category}=useParams()
  const intialIndex =categories?.indexOf(category)
  // console.log(intialIndex);
  const [tabIndex, setTabIndex] = useState(intialIndex);

  const dessertItems = menu?.filter(item => item.category === 'dessert');
  const saladItems = menu?.filter(item => item.category === 'salad');
  const pizzaItems = menu?.filter(item => item.category === 'pizza');
  const soupItems = menu?.filter(item => item.category === 'soup');
  const drinksItems = menu?.filter(item => item.category === 'drinks');
  
  return (
    <div>
      <Cover img={coverImg} tittle={"Our SHOP"}></Cover>
      <p>{category}</p>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
      
            <li className="flex gap-6 justify-center">
              <Tab>SALAD</Tab>
              <Tab>PIZZA</Tab>
              <Tab>SOUPS</Tab>
              <Tab>DESSERTS</Tab>
              <Tab>DRINKS</Tab>
            </li>
   
        </TabList>
<TabPanel >
<ShopTabs items={saladItems}></ShopTabs>
        </TabPanel>
        <TabPanel>
        <ShopTabs items={pizzaItems}></ShopTabs>
        </TabPanel>
        <TabPanel>
        <ShopTabs items={soupItems}></ShopTabs>
        </TabPanel>
        <TabPanel>
        <ShopTabs items={dessertItems}></ShopTabs>
        </TabPanel>
        <TabPanel>
        <ShopTabs items={drinksItems}></ShopTabs>
        </TabPanel>

      </Tabs>
    </div>
  );
};

export default OurShop;
