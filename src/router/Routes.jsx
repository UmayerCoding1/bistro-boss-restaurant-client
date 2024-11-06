import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../components/pages/home/Home";
import OurMenu from "../components/pages/our-menu/OurMenu";
import Shop from "../components/pages/our-shop/Shop";
import Login from "../components/pages/login/Login";
import SignUp from "../components/pages/signup/SignUp";
import Secret from "../components/shared/secret/Secret";
import PrivetRoutes from "./PrivetRoutes";
import Dashboard from "../layout/Dashboard";
import Cart from "../components/pages/dashboard/cart/Cart";
import AllUsers from "../components/pages/dashboard/all-users/AllUsers";
import AddItems from "../components/pages/dashboard/add-item/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../components/pages/dashboard/manage-items/ManageItems";
import UpdateItem from "../components/pages/dashboard/update-item/UpdateItem";
import Payment from "../components/pages/dashboard/payment/Payment";
import PaymentHistory from "../components/pages/dashboard/payment/payment-history/PaymentHistory";
import AdminHome from "../components/pages/dashboard/admin-home/AdminHome";
import UserHome from "../components/pages/dashboard/user/user-home/UserHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/our-menu",
        element: <OurMenu />,
      },
      {
        path: "/order/:category",
        element: <Shop />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: '/secret',
        element: <PrivetRoutes><Secret/></PrivetRoutes>
      }
    ],
  },


  {
    path:'dashboard',
    element: <PrivetRoutes><Dashboard/></PrivetRoutes>,
    children:[
      {
        path:'userHome',
        element: <PrivetRoutes><UserHome/></PrivetRoutes>
      },
      {
        path: 'cart',
        element:<PrivetRoutes><Cart/></PrivetRoutes> 
      },
      {
        path: 'payment',
        element: <Payment/>
      },
      {
        path:'payment-history',
        element: <PaymentHistory/>
      },

      // admin router
      {
        path:'adminHome',
        element: <AdminRoute><AdminHome/></AdminRoute>
      },
      {
         path: 'all-user',
         element: <AllUsers/>
      },
      {
        path:'add-item',
        element:<AdminRoute><AddItems/></AdminRoute>
      },
      {
        path:'manage-items',
        element: <AdminRoute><ManageItems/></AdminRoute>
      },
      {
        path:'update-item/:id',
        element:<AdminRoute><UpdateItem/></AdminRoute>,
        loader: ({params}) => fetch(`https://bistro-boss-restaurant-jet.vercel.app/${params.id}`)
      }
    ],
  }
]);

export default router;
