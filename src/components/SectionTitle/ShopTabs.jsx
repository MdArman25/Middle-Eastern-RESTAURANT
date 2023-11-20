import FoodCard from "./FoodCard";


const ShopTabs =({items}) => {
    return (
        <div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-10 mt-10'>
            {
                items?.map(item=><FoodCard key={item} item={item}></FoodCard>)
            }
</div>
        </div>
    );
};

export default ShopTabs;