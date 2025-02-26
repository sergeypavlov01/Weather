import "./RangeTemp.scss";

export const RangeTemp = ({ today }) => {
    return (
        <div className="temperature-range">
            <div className="temperature-range__max">
                <span className="temperature-range__icon temperature-range__icon-top"></span>
                <p className="temperature-range__desc">{`${Math.round(today.forecast.forecastday[0].day.maxtemp_c)}°`}</p>
            </div>
            <div className="temperature-range__line"></div>
            <div className="temperature-range__min">
                <span className="temperature-range__icon temperature-range__icon-bottom"></span>
                <p className="temperature-range__desc">{`${Math.round(today.forecast.forecastday[0].day.mintemp_c)}°`}</p>
            </div>
        </div>
    );
};
