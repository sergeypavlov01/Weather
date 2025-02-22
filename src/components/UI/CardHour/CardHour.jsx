import "./CardHour.scss"
import cardIcon from "../../../../public/icons/big-icons/moon-and-cloudy.svg";

export const CardHour = (props) => {
    const currentHour = new Date().getHours();

    return (
        <div className="card">
            <p className="card__time">{props.hour}</p>
            <div className="card__icon">
                <img 
                src={cardIcon} 
                alt=""
                className="card__icon-image"
                width='50'
                height='45'
                />
            </div>
            <p className="card__temp">{props.temp}</p>
        </div>
    )
}