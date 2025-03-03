import { RangeTemp } from "../RangeTemp/RangeTemp";
import { WeatherCards } from "../WeatherCards/WeatherCards";
import { conditionWeather } from "../../utils/icons";
import "./HomeSection.scss";

export const HomeSection = ({ today }) => {
    const arrDaysWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayWeek = new Date().getDay()
    
    const localTime = new Date(today.location.localtime).getHours()

    const isNight = localTime >= 0 && localTime < 6;
    const isDay = localTime >= 6 && localTime < 18;

    // console.log('RENDER HOME SECTION')
    // console.log(today)

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
