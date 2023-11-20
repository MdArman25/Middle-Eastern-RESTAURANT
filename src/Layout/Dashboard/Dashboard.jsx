import {
  FaAd,
  FaBook,
  FaCalendar,
  FaHistory,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaUtensils,
  FaVoicemail,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useUsers from "../../Hooks/useUsers";
import useAdmin from "../../Hooks/useAdmin";
const Dashboard = () => {
  const [data,refetch] = useCart();
  const [users] =useUsers()


  const [isAdmin] = useAdmin();
  // const isAdmin =true
  console.log(isAdmin);
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
          {isAdmin ? (
            <div>
              {" "}
              <li>
                <NavLink to="/dashboard/AdminHome">
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/AddItems">
                  <FaUtensils></FaUtensils>
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/ManageItems">
                  <FaList></FaList>
                  Manage Items
                </NavLink>
            
              </li>
              <li>
                <NavLink to="/dashboard/Booking">
                  <FaBook></FaBook>
                  Manage Booking
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/Users">
                  <FaUser></FaUser>
                  All Users ({users?.length})
                  
                </NavLink>
              </li>
            </div>
          ) : (
            <div>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome>
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar></FaCalendar>
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart>
                  My Cart {data?.length}{" "}
                </NavLink>
                {/* ({cart.length}) */}
              </li>
              <li>
                <NavLink to="/dashboard/Payment-History">
                  <FaHistory></FaHistory>
                  Payment History 
                </NavLink>
             
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <FaAd></FaAd>
                  Add a Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaList></FaList>
                  My Bookings
                </NavLink>
              </li>
            </div>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaSearch></FaSearch>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
              <FaVoicemail></FaVoicemail>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
