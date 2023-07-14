
import { IRoute } from "./models/models";
import BlogsPage from "./Pages/BlogsPage/BlogsPage";
import BreedsPage from "./Pages/BreedsPage/BreedsPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import HomePage from "./Pages/HomePage/HomePage";
import LikedPage from "./Pages/LikedPage/LikedPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import QuarriesPage from "./Pages/CreatePage/CreatePage";

import { HOME_ROUTE, BLOGS_ROUTE, BREEDS_ROUTE, CONTACT_ROUTE, CREATE_ROUTE, LIKED_ROUTE} from "./utils/consts";



export const NavbarRoutesArr:IRoute[] = [
    {
        path: HOME_ROUTE,
        element: <HomePage/>
    },
    {
        path: BLOGS_ROUTE,
        element: <BlogsPage/>
    },
    {
        path: BREEDS_ROUTE,
        element: <BreedsPage/>
    },{
        path: CONTACT_ROUTE,
        element: <ContactPage/>
    },
    {
        path: CREATE_ROUTE,
        element: <QuarriesPage/>
    },
    {
        path: LIKED_ROUTE,
        element: <LikedPage/>
    },
    {
        path: "*",
        element: <NotFoundPage/>
    },
   
]