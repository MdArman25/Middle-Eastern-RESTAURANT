import { Toaster } from "react-hot-toast";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import BackToTop from "../../../Hooks/usetop";

const Home = () => {
    return (
        <div>
               <Toaster></Toaster>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
            <BackToTop></BackToTop>
        </div>
    );
};

export default Home;