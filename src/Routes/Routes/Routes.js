import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import CarItems from "../../Pages/CarItems/CarItems/CarItems";
import CustomRoute from "../../Pages/CustomRoute/CustomRoute";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/category/:categoryName',
                element: <CarItems></CarItems>,
                loader: ({params}) => fetch(`http://localhost:5000/category?categoryName=${params.categoryName}`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '*',
                element: <CustomRoute></CustomRoute>
            }
        ]
    }
])

export default router;