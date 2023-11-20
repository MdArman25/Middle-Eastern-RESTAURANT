import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Ourmenu from "../pages/Ourmenu/Ourmenu";
import OurShop from "../pages/OurShop/OurShop";
import Login from "../pages/User/Login";
import SignUp from "../pages/User/SignUp";
import PrivateRoute from "../Layout/PrivateRoute";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Cart from "../pages/Dashborad/Cart";
import Users from "../pages/Dashborad/AllUsers/Users";
import AdminRoute from "./AdminRoute";
import AddItems from "../pages/Dashborad/Additeams";
import ManageItems from "../pages/Dashborad/ManageIteam/ManageIteam";
import UpdateIteams from "../pages/Dashborad/UpdateIteams";
import axios from "axios";
import UserHome from "../pages/Dashborad/ManageIteam/User/UserHome";
import Payment from "../pages/Dashborad/Payment/Payment";
import PaymentHistory from "../pages/Dashborad/Payment/PaymentHistory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "our_menu",
        element: <Ourmenu></Ourmenu>,
      },
      {
        path: "shop/:category",
        element: <PrivateRoute><OurShop></OurShop></PrivateRoute>,
      },
      {
        path: "Login",
        element: <Login></Login>,
      },
      {
        path: "singup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element:<PrivateRoute> <Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      // admin
      {
        path: "Users",
        element: <AdminRoute><Users></Users></AdminRoute>,
      },
      {
        path:'/dashboard/userHome',
        element:<UserHome></UserHome>
      },
      {
        path:'/dashboard/Payment',
        element:<Payment></Payment>
      },
      {
        path:'/dashboard/Payment-History',
        element:<PaymentHistory></PaymentHistory>,
        
      },
      {
        path:'/dashboard/AddItems',
        element:<AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path:'/dashboard/ManageItems',
        element:<AdminRoute><PrivateRoute><ManageItems></ManageItems></PrivateRoute></AdminRoute>
      },
      {
        path:'/dashboard/updateItem/:id',
        element:<PrivateRoute><UpdateIteams></UpdateIteams></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/menus/${params.id}`)
      }
      // {
      //   path: 'updateItem/:id',
      //   element: <AdminRoute><UpdateIteams></UpdateIteams></AdminRoute>,
      //   loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
      // },

    ],
  },
]);
