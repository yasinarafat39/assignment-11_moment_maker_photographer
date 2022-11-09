import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../components/Pages/Home/Home";
import Login from "../../components/Pages/Login/Login";
import Register from "../../components/Pages/Register/Register";
import AllService from "../../components/Pages/AllService/AllService";
import Error from "../../components/Pages/Error";
import ServiceDetailsPage from "../../components/Pages/Home/Services/ServiceDetailsPage";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/services')
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
                loader: () => fetch('http://localhost:5000/services/all')
            },
            {
                path: '/services/:id',
                element: <ServiceDetailsPage></ServiceDetailsPage>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            }

        ]
    }
])