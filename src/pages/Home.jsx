import { HomeSection } from "../components/HomeSection/HomeSection";
import { Loader } from "../components/UI/Loader/Loader";
import { useState, useEffect, useContext } from "react";
import { useFetching } from "../hooks/useFetching";
import WeatherService from "../API/WeatherService";
import { CityContext } from "../components/context";

export const Home = () => {
    const [todayForecast, setTodayForecast] = useState(null);
    const { city } = useContext(CityContext);
    const [fetchPosts, isLoadingForecast, error] = useFetching(async () => {
        const response = await WeatherService.getTodayForecast(city);
        const json = await response.json();
        if (response.status >= 200 && response.status <= 299) {
            setTodayForecast(json);
        } else {
            throw new Error('Ошибка с запросом');
        }
    });

    useEffect(() => {
        fetchPosts();
    }, [city]);

    return (
        <>
            {error && <Error errorMessage={error} />}
            {isLoadingForecast && <Loader />}
            {todayForecast && <HomeSection today={todayForecast}/>}
        </>
    )
};
