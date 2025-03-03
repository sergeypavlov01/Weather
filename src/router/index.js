import { Details } from "../pages/Details";
import { Home } from "../pages/Home";
import { ErrorPage } from "../pages/ErrorPage";
import { NoMatchPage } from "../pages/NoMatchPage";

export const navigationRoutes = [
    { id: 1, path: '/', element: <Home /> },
    { id: 2, path: '/home', element: <Home /> },
    { id: 3, path: '/details', element: <Details /> },
    { id: 4, path: '/error', element: <ErrorPage /> },
    { id: 5, path: '*', element: <NoMatchPage /> },
]