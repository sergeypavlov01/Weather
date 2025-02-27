import { useContext } from "react";
import { CityContext } from "../../context";
import "./City.scss";

export const City = () => {
    const { city } = useContext(CityContext)

    return (
        <div className="header__city city">
            <h1 className="city__title title title--active">{city}</h1>
        </div>
    );
};
