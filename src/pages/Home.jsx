import { HomeSection } from "../components/HomeSection/HomeSection";
import { Loader } from "../components/UI/Loader/Loader";
import { useState, useEffect, useContext } from "react";
import { useFetching } from "../hooks/useFetching";
import WeatherService from "../API/WeatherService";
import { CityContext } from "../components/context";
import { useNavigate } from "react-router";

export const Home = () => {
    const [todayForecast, setTodayForecast] = useState(null);
    const { city } = useContext(CityContext);
    const [fetchForecasts, isLoadingForecast, forecastError] = useFetching(async () => {
        const response = await WeatherService.getTodayForecast(city);
        const forecast = await response.json();

        if (response.status >= 200 && response.status <= 299) {
            setTodayForecast(forecast);
        } else {
            throw new Error('Ошибка с запросом');
        }
    });

    // console.log('RENDER HOME')

    const navigate = useNavigate();

    useEffect(() => {
        if (forecastError) {
            navigate('/error', { state: forecastError })   
        } else {
            fetchForecasts();
        }
    }, [forecastError, city]);

    return (
        <>
            { isLoadingForecast ? (
                <Loader />
            ) : todayForecast ? (
                <HomeSection today={todayForecast} />
            ) : null}
        </>
    );
};
