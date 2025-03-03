import { useState } from "react";
import { Header } from "../Header/Header";
import { CityContext } from "../context";
import { AppRouter } from "../AppRouter/AppRouter";

export const WeatherApp = () => {
    const [city, setCity] = useState("Moscow");
    const setNewCity = (newCity) => {
        setCity(newCity);
    };

    localStorage.setItem('city', city);

    return (
        <CityContext.Provider value={{ city, setNewCity }}>
            <div className="weather-app">
                <Header />
                <main className="main">
                    <AppRouter />
                </main>
            </div>
        </CityContext.Provider>
    );
};
