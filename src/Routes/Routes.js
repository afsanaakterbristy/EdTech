import { createBrowserRouter } from "react-router-dom";
import AllCourses from "../components/AllCourses/AllCourses";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Blog from "../components/Blog/Blog";
import CoursesCategory from "../CoursesCategory/CoursesCategory";

import Main from "../layout/Main";

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
                path: '/category/:id',
                element:<CoursesCategory></CoursesCategory>,
                loader: ({params}) =>fetch(`http://localhost:5000/category/${params.id}`)
                
            },
            {
                path: '/allcourses/:id',
                element:<AllCourses></AllCourses>
            },
           {
                path: '/blog',
                element:<Blog></Blog>
            },
            
        ]
          
    },
   
]);