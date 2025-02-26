import { useState } from "react";
import { Header } from "../Header/Header";
import { Route, Routes } from "react-router";
import { Home } from "../../pages/Home";
import { Details } from "../../pages/Details";

export const WeatherApp = () => {
    const [city, setCity] = useState("Moscow");
    const setEnterCity = (newCity) => {
        setCity(newCity);
    };

    return (
        <div className="weather-app">
            <Header city={city} changeCity={setEnterCity} />
            <main className="main">
                <Routes>
                    <Route path="/" element={<Home city={city} />} />
                    <Route path="/details" element={<Details />} />
                </Routes>
            </main>
        </div>
    );
};
