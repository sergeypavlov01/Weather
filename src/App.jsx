import { Header } from "./components/Header/Header";
import { HomeSection } from "./components/HomeSection/HomeSection";
import WeatherService from "./API/WeatherService";
import { useFetching } from "./hooks/useFetching";
import { useEffect, useState } from "react";

export const App = () => {
    const [city, setCity] = useState("Moscow");
    const [todayForecast, setTodayForecast] = useState(null);
    const [fetchPosts, isLoadingForecast, error] = useFetching(async () => {
        const response = await WeatherService.getTodayForecast(city);
        const json = await response.json();
        setTodayForecast(json);
    });

    useEffect(() => {
        fetchPosts();
    }, [city]);

    const setEnterCity = (newCity) => {
        setCity(newCity);
    };

    return (
        <div className="weather-app">
            <Header
                isLoadedError={error}
                city={city}
                changeCity={setEnterCity}
            />
            <main className="main">
                {isLoadingForecast ? (
                    <h1 className="loading">Пожалуйста подождите.<br/>Идет загрузка...</h1>
                ) : (
                    <HomeSection today={todayForecast} />
                )}
            </main>
        </div>
    );
};
