import "./WeatherCards.scss";
import { CardHour } from "../UI/CardHour/CardHour";
import { useEffect, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import WeatherService from "../../API/WeatherService";

export const WeatherCards = () => {
    const [forecasts, setForecasts] = useState([
        { id: 1, hour: "13:00", temp: "-3°" },
        { id: 2, hour: "14:00", temp: "-1°" },
        { id: 3, hour: "15:00", temp: "-1°" },
        { id: 4, hour: "16:00", temp: "-0°" },
        { id: 5, hour: "17:00", temp: "-3°" },
        { id: 6, hour: "18:00", temp: "-1°" },
    ]);

    return (
        <div className="cards">
            {forecasts.map((forecast) => {
                return (
                    <CardHour
                        key={forecast.id}
                        hour={forecast.hour}
                        temp={forecast.temp}
                    />
                );
            })}
        </div>
    );
};
