import "./WeatherCards.scss";
import { CardHour } from "../UI/CardHour/CardHour";
import { useEffect, useState } from "react";

export const WeatherCards = ({ today }) => {
    const localTime = new Date(today.location.localtime).getHours();
    const hourlyTemp = today.forecast.forecastday[0].hour;

    const [forecasts, setForecasts] = useState([]);

    useEffect(() => {
        console.log('useEffect ЦИКЛ')
        const forecastData = [];

        for (let i = 0; i < 6; i++) {
            const hour = (localTime + i) % 24;
            forecastData.push({
                id: i + 1,
                hour: `${hour}:00`,
                temp: `${Math.round(hourlyTemp[hour].temp_c)}°`,
                image: hourlyTemp[hour].condition.icon,
            })
        }

        setForecasts(forecastData);
    }, [localTime, hourlyTemp])

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
