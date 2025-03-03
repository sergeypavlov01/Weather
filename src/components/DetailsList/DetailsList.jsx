import "./DetailsList.scss";
import weatherSunAndCloudsIcon from "../../../public/icons/frame-icons/sun-and-clouds.svg";
import { DetailsIcon } from "../UI/DetailsIcon/DetailsIcon";

export const DetailsList = (props) => {
    const { timesDay, minTemp, maxTemp, icon, pressure, humidity, windSpeed, feelsLike } = props;

    return (
        <ul className="details__list">
            <li className="details__item details__times-day-item">
                <div className="details__times-day">
                    <p className="details__times-day-text">{timesDay}</p>
                    <p className="details__times-day-subtitle">{`${minTemp}°...${maxTemp}°`}</p>
                </div>
            </li>
            <li className="details__item details__icon-item">
                <DetailsIcon icon={icon} />
            </li>
            <li className="details__item details__pressure-item">
                <p className="details__pressure-text">{pressure}</p>
            </li>
            <li className="details__item details__humidity-item">
                <p className="details__humidity-text">{`${humidity}%`}</p>
            </li>
            <li className="details__item details__wind-speed-item">
                <p className="details__wind-speed-text">{windSpeed}</p>
            </li>
            <li className="details__item details__feels-like-item">
                <p className="details__feels-like-text">{`${feelsLike}°`}</p>
            </li>
        </ul>
    );
};
