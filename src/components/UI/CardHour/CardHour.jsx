import "./CardHour.scss"
import cardIcon from "../../../../public/icons/big-icons/moon-and-cloudy.svg";

export const CardHour = ({ hour, temp, image }) => {
    const currentHour = new Date().getHours();

    return (
        <div className="card">
            <p className="card__time">{hour}</p>
            <div className="card__icon">
                <img 
                src={image} 
                alt=""
                className="card__icon-image"
                width='50'
                height='45'
                />
            </div>
            <p className="card__temp">{temp}</p>
        </div>
    )
}