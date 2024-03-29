import { createBrowserRouter } from "react-router-dom";
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import Contact from './Contact.jsx'
import Aboutus from './Aboutus.jsx'
import Api from './Api.jsx'
import Login from './Login.jsx'
const router = createBrowserRouter([
    {
        path:"/",
        element: <><Navbar/><Home/></>
    },
    {
        path:"/contactus",
        element: <><Navbar/><Contact/></>
    },
    {
        path:"/aboutus",
        element: <><Navbar/><Aboutus/></>
    },
    {
        path:"/api",
        element: <><Navbar/><Api/></>
    },
    {
        path:"/login",
        element: <><Login/><Api/></>
    },
])
export default router;