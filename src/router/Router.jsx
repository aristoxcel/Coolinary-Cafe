import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import ErrorPage from "../pages/ErrorPage";
import Main from "../layout/Main";
import AllFoods from "../pages/All Foods/AllFoods";
import Gallery from "../pages/Gallery/Gallery";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import MyAddFood from "../pages/MyAddFood/MyAddFood";
import AddFood from "../pages/AddFood/AddFood";
import MyOrder from "../pages/MyOrder/MyOrder";



export const router =createBrowserRouter([
    {
      path:'/',
      element:<Main/>,
      errorElement:<ErrorPage/>,
      children:[
        {path:'/', element:<Home></Home>},
        {path:'/login', element: <Login></Login>},
        {path:'/register', element: <Register></Register>},
        {path:'/allFoods', element: <AllFoods></AllFoods>},
        {path:'/gallery', element: <Gallery></Gallery>},
        {path:'/about', element: <AboutUs></AboutUs>},
        {path:'/contact', element: <Contact></Contact>},
        {path:'/my-added-food', element: <MyAddFood></MyAddFood>},
        {path:'/add-food', element: <AddFood></AddFood>},
        {path:'/my-order', element: <MyOrder></MyOrder>},

      ]
    }
  ])