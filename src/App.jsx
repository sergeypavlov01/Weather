import { Route, BrowserRouter as Router, Routes } from "react-router";
import { WeatherApp } from "./components/WeatherApp/WeatherApp";

export const App = () => {
    return (
        <Router>
            <WeatherApp />
        </Router>
    );
};
