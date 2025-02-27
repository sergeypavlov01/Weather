import { BrowserRouter } from "react-router";
import { WeatherApp } from "./components/WeatherApp/WeatherApp";

export const App = () => {
    return (
        <BrowserRouter>
            <WeatherApp />
        </BrowserRouter>
    );
};
