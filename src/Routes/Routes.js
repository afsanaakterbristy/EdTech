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

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/courses')
                
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses')
                
            },
            {
                path: '/category/:id',
                element:<CoursesCategory></CoursesCategory>,
                loader: ({params}) =>fetch(`http://localhost:5000/category/${params.id}`)
                
            },
            {
                path: '/allcourses/:id',
                element:<PrivateRoutes> <AllCourses></AllCourses></PrivateRoutes>,
                loader:({params})=>fetch(`http://localhost:5000/allcategory/${params.id}`)
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
            
        ]
          
    },
   
]);