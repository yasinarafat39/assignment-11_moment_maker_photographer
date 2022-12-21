import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../components/Pages/Home/Home";
import Login from "../../components/Pages/Login/Login";
import Register from "../../components/Pages/Register/Register";
import AllService from "../../components/Pages/AllService/AllService";
import Error from "../../components/Pages/Error";
import ServiceDetailsPage from "../../components/Pages/Home/Services/ServiceDetailsPage";
import MyReview from "../../components/Pages/MyReview/MyReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddService from "../../components/Pages/AddService/AddService";
import BlogPage from "../../components/Pages/BlogPage/BlogPage";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://moment-maker-photographer-server.vercel.app/services')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/services/all',
                element: <AllService></AllService>,
                loader: () => fetch('https://moment-maker-photographer-server.vercel.app/services/all')
            },
            {
                path: '/services/:id',
                element: <ServiceDetailsPage></ServiceDetailsPage>,
                loader: ({ params }) => fetch(`https://moment-maker-photographer-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/blog',
                element: <BlogPage></BlogPage>
            }

        ]
    }
])