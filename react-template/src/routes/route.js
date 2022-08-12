import Volunteer from "../pages/volunteer/volunteer";
import Donation from "../pages/donate/donation"
import About from "../pages/About/About";
import Home from "../pages/home/home";
import New from "../pages/New/New"
import BasicLayout from "../layouts/basiclayout";


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
        component:About,
        layout:BasicLayout,
        path:"/about",
        
    },

    {
        component:New,
        layout:BasicLayout,
        path:"/news",
        
    },
];
const routes =[...routesClient];

export default routes;

