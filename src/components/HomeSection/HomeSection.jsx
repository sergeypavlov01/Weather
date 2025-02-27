import sunAndCloudsIcon from "../../../public/icons/big-icons/sun-and-clouds.svg";
import cloudyIcon from "../../../public/icons/big-icons/clouds.svg";
import sunnyIcon from "../../../public/icons/big-icons/sunny.svg";
import moonIcon from "../../../public/icons/big-icons/moon-and-stars.svg";
import moonAndCloudyIcon from "../../../public/icons/big-icons/moon-and-cloudy.svg";
import cloudsRainIcon from "../../../public/icons/big-icons/clouds-rain.svg";
import { RangeTemp } from "../RangeTemp/RangeTemp";
import { WeatherCards } from "../WeatherCards/WeatherCards";
import "./HomeSection.scss";

export const HomeSection = ({ today }) => {
    const arrDaysWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayWeek = new Date().getDay()
    
    const localTime = new Date(today.location.localtime).getHours()

    const isNight = localTime >= 0 && localTime < 6;
    const isDay = localTime >= 6 && localTime < 18;

    const conditionWeather = {
        ['Day Cloudy']: cloudyIcon,
        ['Day Overcast']: cloudyIcon,
        ['Day Sunny']: sunnyIcon,
        ['Day Clear']: sunnyIcon,
        ['Day Partly cloudy']: sunAndCloudsIcon,
        ['Day Light rain']: cloudsRainIcon,
        ['Evening Cloudy']: cloudyIcon,
        ['Evening Overcast']: cloudyIcon,
        ['Evening Clear']: moonIcon,
        ['Evening Partly cloudy']: sunAndCloudsIcon,
        ['Evening Light rain']: cloudsRainIcon,
        ['Night Light rain']: cloudsRainIcon,
        ['Night Clear']: moonIcon,
        ['Night Overcast']: cloudyIcon,
        ['Night Partly cloudy']: moonAndCloudyIcon,
    }

    console.log(today)

    return (
        <section className="home">
            <div className="home__image">
                <div className="home__image-inner container">
                    <div className="home__icon">
                        <img
                            src={isDay 
                                    ? conditionWeather[`Day ${today.current.condition.text}`]
                                    : isNight 
                                        ? conditionWeather[`Night ${today.current.condition.text}`]
                                        : conditionWeather[`Evening ${today.current.condition.text}`]
                                }
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
                    <h1 className="home__title">{`${Math.round(today.current.temp_c)}°`}</h1>
                    <RangeTemp today={today}/>
                    <p className="home__subtitle">{`${today.current.condition.text}, ${arrDaysWeek[currentDayWeek]}`}</p>
                    <WeatherCards today={today}/>
                </div>
            </div>
        </section>
    );
};
