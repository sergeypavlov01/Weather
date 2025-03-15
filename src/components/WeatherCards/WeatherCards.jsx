import "./WeatherCards.scss";
import { CardHour } from "../UI/CardHour/CardHour";
import { useEffect, useState } from "react";

export const WeatherCards = ({ today }) => {
    const localTime = new Date(today.location.localtime).getHours();
    const hourlyTempToday = today.forecast.forecastday[0].hour;
    const hourlyTempTommorow = today.forecast.forecastday[1].hour;

    const [forecasts, setForecasts] = useState([]);

    useEffect(() => {
        const forecastData = [];

        for (let i = 0; i < 6; i++) {
            const hour = (localTime + i) % 24;
            const isTommorow = localTime + i >= 24;
            const hourlyData = isTommorow ? hourlyTempTommorow : hourlyTempToday

            forecastData.push({
                id: i + 1,
                hour: `${hour}:00`,
                temp: `${Math.round(hourlyData[hour].temp_c)}°`,
                image: hourlyData[hour].condition.icon,
            })
        }

        setForecasts(forecastData);
    }, [localTime, hourlyTempToday, hourlyTempTommorow])

    return (
        <div className="cards">
            {forecasts.map((forecast) => {
                return (
                    <CardHour
                        key={forecast.id}
                        hour={forecast.hour}
                        temp={forecast.temp}
                        image={forecast.image}
                    />
                );
            })}
        </div>
    );
};
