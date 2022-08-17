import Volunteer from "../pages/volunteer/volunteer";
import Donation from "../pages/donate/donation"
import Home from "../pages/home/home";
import BasicLayout from "../layouts/basiclayout";
import LogIn from "../pages/Log In/Log-In";

const routesClient = [

    {
        component:Home,
        layout:BasicLayout,
        path:"/",
        
    },

    {
        component:Donation,
        layout:BasicLayout,
        path:"/donation",
        
    },
    {
        component:Volunteer,
        layout:BasicLayout,
        path:"/volunteer",
        
    },
    {
        component:LogIn,
        layout:BasicLayout,
        path:"/login",
        
    },
];
const routes =[...routesClient];

export default routes;

