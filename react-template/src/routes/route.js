import Volunteer from "../pages/volunteer/volunteer";
import Donation from "../pages/donate/donation"
import BasicLayout from "../layouts/basiclayout";
import Home from "../pages/home/home";


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

];
const routes =[...routesClient];

export default routes;

