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

            const morningForecast = weatherData.forecast.forecastday[0].hour[9];
            const afternoonForecast =
                weatherData.forecast.forecastday[0].hour[15];
            const eveningForecast =
                weatherData.forecast.forecastday[0].hour[21];
            const nigthForecast = weatherData.forecast.forecastday[0].hour[3];

            setDate(new Date(weatherData.location.localtime))

            setDetails([
                {
                    id: 1,
                    timesDay: "Morning",
                    minTemp: getMinTemp(6, 11, weatherData),
                    maxTemp: getMaxTemp(6, 11, weatherData),
                    icon: detailsIcon[`${morningForecast.condition.text}`],
                    pressure: morningForecast.pressure_mb,
                    humidity: morningForecast.humidity,
                    humidity: morningForecast.humidity,
                    windSpeed: morningForecast.wind_kph,
                    feelsLike: morningForecast.feelslike_c,
                },
                {
                    id: 2,
                    timesDay: "Afternoon",
                    minTemp: getMinTemp(12, 17, weatherData),
                    maxTemp: getMaxTemp(12, 17, weatherData),
                    icon: detailsIcon[`${afternoonForecast.condition.text}`],
                    pressure: afternoonForecast.pressure_mb,
                    humidity: afternoonForecast.humidity,
                    humidity: afternoonForecast.humidity,
                    windSpeed: afternoonForecast.wind_kph,
                    feelsLike: afternoonForecast.feelslike_c,
                },
                {
                    id: 3,
                    timesDay: "Evening",
                    minTemp: getMinTemp(18, 23, weatherData),
                    maxTemp: getMaxTemp(18, 23, weatherData),
                    icon: detailsIcon[`${eveningForecast.condition.text}`],
                    pressure: eveningForecast.pressure_mb,
                    humidity: eveningForecast.humidity,
                    humidity: eveningForecast.humidity,
                    windSpeed: eveningForecast.wind_kph,
                    feelsLike: eveningForecast.feelslike_c,
                },
                {
                    id: 4,
                    timesDay: "Nigth",
                    minTemp: getMinTemp(0, 5, weatherData),
                    maxTemp: getMaxTemp(0, 5, weatherData),
                    icon: detailsIcon[`${nigthForecast.condition.text}`],
                    pressure: nigthForecast.pressure_mb,
                    humidity: nigthForecast.humidity,
                    humidity: nigthForecast.humidity,
                    windSpeed: nigthForecast.wind_kph,
                    feelsLike: nigthForecast.feelslike_c,
                },
            ]);
        }
    );

    const navigate = useNavigate();

    useEffect(() => {
        if (detailsError) {
            navigate('/error', { state:  detailsError})
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
                    {date && <DetailsHeaders date={date}/>}
                    <DetailsLists details={details} />
                </>
            ) : null}
        </section>
    );
};
