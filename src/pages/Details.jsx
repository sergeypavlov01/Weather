import { DetailsHeaders } from "../components/DetailHeaders/DetailsHeaders";
import { DetailsLists } from "../components/DetailsLists/DetailsLists";
import { useFetching } from "../hooks/useFetching";
import { detailsIcon } from "../utils/icons";
import WeatherService from "../API/WeatherService";
import { useEffect, useState } from "react";
import { Loader } from "../components/UI/Loader/Loader";
import { useNavigate } from "react-router";

export const Details = () => {
    const [details, setDetails] = useState(null);
    const [date, setDate] = useState("");
    const [fetchDetails, isDetailsLoading, detailsError] = useFetching(
        async () => {
            const response = await WeatherService.getTodayForecast(
                localStorage.getItem("city")
            );
            const weatherData = await response.json();

            console.log(weatherData)

            const morningForecast = weatherData.forecast.forecastday[0].hour[9];
            const afternoonForecast =
                weatherData.forecast.forecastday[0].hour[15];
            const eveningForecast =
                weatherData.forecast.forecastday[0].hour[21];
            const nightForecast = weatherData.forecast.forecastday[0].hour[3];

            const getConditionText = (forecast, hour) => {
                const conditionText = forecast.condition.text.trim();
                const isDay = hour >= 6 && hour < 18
                const timeOfDay = isDay ? 'Day' : 'Night';

                if (conditionText === 'Partly Cloudy') {
                    return `Partly Cloudy ${timeOfDay}`
                }

                return conditionText
            }

            setDate(new Date(weatherData.location.localtime));

            setDetails([
                {
                    id: 1,
                    timesDay: "Morning",
                    minTemp: getMinTemp(6, 11, weatherData),
                    maxTemp: getMaxTemp(6, 11, weatherData),
                    icon: detailsIcon[getConditionText(morningForecast, 9)],
                    pressure: morningForecast.pressure_mb,
                    humidity: morningForecast.humidity,
                    windSpeed: morningForecast.wind_kph,
                    feelsLike: Math.round(morningForecast.feelslike_c),
                },
                {
                    id: 2,
                    timesDay: "Afternoon",
                    minTemp: getMinTemp(12, 17, weatherData),
                    maxTemp: getMaxTemp(12, 17, weatherData),
                    icon: detailsIcon[getConditionText(afternoonForecast, 15)],
                    pressure: afternoonForecast.pressure_mb,
                    humidity: afternoonForecast.humidity,
                    windSpeed: afternoonForecast.wind_kph,
                    feelsLike: Math.round(afternoonForecast.feelslike_c),
                },
                {
                    id: 3,
                    timesDay: "Evening",
                    minTemp: getMinTemp(18, 23, weatherData),
                    maxTemp: getMaxTemp(18, 23, weatherData),
                    icon: detailsIcon[getConditionText(eveningForecast, 21)],
                    pressure: eveningForecast.pressure_mb,
                    humidity: eveningForecast.humidity,
                    windSpeed: eveningForecast.wind_kph,
                    feelsLike: Math.round(eveningForecast.feelslike_c),
                },
                {
                    id: 4,
                    timesDay: "Nigth",
                    minTemp: getMinTemp(0, 5, weatherData),
                    maxTemp: getMaxTemp(0, 5, weatherData),
                    icon: detailsIcon[getConditionText(nightForecast, 3)],
                    pressure: nightForecast.pressure_mb,
                    humidity: nightForecast.humidity,
                    windSpeed: nightForecast.wind_kph,
                    feelsLike: Math.round(nightForecast.feelslike_c),
                },
            ]);
        }
    );

    const navigate = useNavigate();

    useEffect(() => {
        if (detailsError) {
            navigate("/error", { state: detailsError });
        } else {
            fetchDetails();
        }
    }, [detailsError]);

    function getMaxTemp(start, end, data) {
        const temps = [];

        for (let i = start; i <= end; i++) {
            temps.push(data.forecast.forecastday[0].hour[i].temp_c);
        }

        return Math.round(Math.max(...temps));
    }

    function getMinTemp(start, end, data) {
        const temps = [];

        for (let i = start; i <= end; i++) {
            temps.push(data.forecast.forecastday[0].hour[i].temp_c);
        }

        return Math.round(Math.min(...temps));
    }

    return (
        <section className="details">
            {isDetailsLoading ? (
                <Loader />
            ) : details ? (
                <>
                    {date && <DetailsHeaders date={date} />}
                    <DetailsLists details={details} />
                </>
            ) : null}
        </section>
    );
};
