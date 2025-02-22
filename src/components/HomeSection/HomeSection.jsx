import { useEffect, useState } from "react";
import sunAndClouds from "../../../public/icons/big-icons/sun-and-clouds.svg";
import { RangeTemp } from "../RangeTemp/RangeTemp";
import { WeatherCards } from "../WeatherCards/WeatherCards";
import "./HomeSection.scss";

export const HomeSection = ({ today }) => {
    const [currentTemp, setIsCurrentTemp] = useState(null);

    useEffect(() => {
        console.log(today)
    }, [today])

    return (
        <section className="home">
            <div className="home__image">
                <div className="home__image-inner container">
                    <div className="home__icon">
                        <img
                            src={sunAndClouds}
                            className="home__icon-image"
                            alt=""
                            width="363"
                            height="261"
                        />
                    </div>
                </div>
            </div>
            <div className="home__body">
                <div className="home__body-inner container">
                    <h1 className="home__title">{'1'}</h1>
                    <RangeTemp />
                    <p className="home__subtitle">Cloudy Tuesday</p>
                    <WeatherCards />
                </div>
            </div>
        </section>
    );
};
