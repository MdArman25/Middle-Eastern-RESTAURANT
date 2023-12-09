import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";
import { ToastContainer } from "react-toastify";
import BackToTop from "../Hooks/usetop";


const Main = () => {
    const location = useLocation()
console.log(location);
const login = location.pathname.includes('login')
const singup = location.pathname.includes('singup')
console.log(login,singup);
    return (
        <div className="">
          
           {login||singup || <NavBar></NavBar>}
            <Outlet></Outlet>
            {login||singup || <Footer></Footer>}
           
        </div>
    );
};

export default Main;