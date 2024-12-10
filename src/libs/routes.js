import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Works from "../pages/Works";

export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/works',
        component: Works
    },
    {
        path: '/contact',
        component: Contact
    }
]