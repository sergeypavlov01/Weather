import { useState } from "react";
import { Header } from "../Header/Header";
import { CityContext } from "../context";
import { AppRouter } from "../AppRouter/AppRouter";

export const WeatherApp = () => {
    const [city, setCity] = useState(localStorage.getItem('city') ?? 'Moscow');
    const setNewCity = (newCity) => {
        setCity(newCity);
    };

    if (!localStorage.getItem('city')) {
        localStorage.setItem('city', city);
    }

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
