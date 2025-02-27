import { Route, Routes } from "react-router";
import { navigationRoutes } from "../../router";

export const AppRouter = () => {
    return (
        <Routes>
            {navigationRoutes.map((route) => {
                return <Route
                            key={route.id}
                            path={route.path}
                            element={route.element}
                        />;
            })}
        </Routes>
    );
};
