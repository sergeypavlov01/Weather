import { Details } from "../pages/Details";
import { Home } from "../pages/Home";
import { ErrorPage } from "../pages/ErrorPage";
import { NoMatchPage } from "../pages/NoMatchPage";

export const navigationRoutes = [
    { id: 1, path: '/', element: <Home /> },
    { id: 2, path: '/details', element: <Details /> },
    { id: 3, path: '/error', element: <ErrorPage /> },
    { id: 4, path: '*', element: <NoMatchPage /> },
]