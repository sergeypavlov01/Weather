import "./City.scss";

export const City = ({ city }) => {
    return (
        <div className="header__city city">
            <h1 className="city__title title title--active">{city}</h1>
        </div>
    );
};
