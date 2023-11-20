import Cover from "../Shared/cover/Cover";
import bannerimg  from '../../assets/menu/banner3.jpg';
import dessert  from '../../assets/menu/dessert-bg.jpeg';
import pizza  from '../../assets/menu/pizza-bg.jpg';
import salad  from '../../assets/menu/salad-bg.jpg';
import soup  from '../../assets/menu/soup-bg.jpg';

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import MenuCategory from "../../components/SectionTitle/OurMenu/MenuCategory";
import { Link } from "@mui/material";
const Ourmenu = () => {
    const [menu]=useMenu()
    const dessertItems = menu?.filter(item => item.category === 'dessert');
    const saladItems = menu?.filter(item => item.category === 'salad');
    const pizzaItems = menu?.filter(item => item.category === 'pizza');
    const soupItems = menu?.filter(item => item.category === 'soup');
    const offeredItems = menu?.filter(item => item.category === 'offered');
    
    return (
        <div >
       <Cover img={bannerimg} tittle='Our Menu' subtittle='Would you like to try a dish?'></Cover> 
       {/*saladItems  */}

    
       <SectionTitle heading={'OFFEREDS'} subHeading="---Don't miss---"></SectionTitle>
<MenuCategory  items={offeredItems}></MenuCategory>
{/*pizzaItems  */}
 
       <SectionTitle heading={'PIZZAS'} subHeading="---Don't miss---"></SectionTitle>
<MenuCategory img={pizza}  items={pizzaItems} tittle={'pizza'}></MenuCategory>

{/* soupItems */}
 
       <SectionTitle heading={'SOUPS'} subHeading="---Don't miss---"></SectionTitle>
<MenuCategory img={soup} items={soupItems} tittle={'soup'}></MenuCategory>
{/* offeredItems */}
 
<SectionTitle heading={'SALADS'} subHeading="---Don't miss---"></SectionTitle>
<MenuCategory img={salad} items={saladItems} tittle={'salad'}></MenuCategory>
{/*  dessertItems*/}
 
       <SectionTitle heading={'DESSERTS'} subHeading="---Don't miss---"></SectionTitle>
<MenuCategory img={dessert}items={dessertItems} tittle={'dessert'}></MenuCategory>
    </div>
    );
};

export default Ourmenu;
