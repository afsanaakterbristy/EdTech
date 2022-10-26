import { createBrowserRouter } from "react-router-dom";
import AllCourses from "../components/AllCourses/AllCourses";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Blog from "../components/Blog/Blog";
import CoursesCategory from "../CoursesCategory/CoursesCategory";

import Main from "../layout/Main";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Courses from "../components/Courses/Courses";
import Profile from "../components/Profile/Profile";

import PremiumCheckOut from "../components/PremiumCheckOut/PremiumCheckOut";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://assignment-server-kappa.vercel.app/courses')
                
            },
            {
                path: '/courses',
                element: <PrivateRoutes><Courses></Courses></PrivateRoutes>,
                loader: () => fetch('https://assignment-server-kappa.vercel.app/courses')
                
            },
            {
                path: '/category/:id',
                element:<PrivateRoutes><CoursesCategory></CoursesCategory></PrivateRoutes>,
                loader: ({params}) =>fetch(`https://assignment-server-kappa.vercel.app/category/${params.id}`)
                
            },
            {
                path: '/allcourses/:id',
                element:<PrivateRoutes> <AllCourses></AllCourses></PrivateRoutes>,
                loader:({params})=>fetch(`https://assignment-server-kappa.vercel.app/allcategory/${params.id}`)
            },
           {
                path: '/blog',
                element:<Blog></Blog>
            },
           {
                path: '/login',
                element:<Login></Login>
            },
           {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: '/profile',
                element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
                
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoutes><PremiumCheckOut></PremiumCheckOut></PrivateRoutes>,
                loader:({params})=>fetch(`https://assignment-server-kappa.vercel.app/allcategory/${params.id}`)
            },
            
            
        ]
          
    },
   
]);