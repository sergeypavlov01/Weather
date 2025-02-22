import "./RangeTemp.scss";

export const RangeTemp = () => {
    return (
        <div className="temperature-range">
            <div className="temperature-range__max">
                <span className="temperature-range__icon temperature-range__icon-top"></span>
                <p className="temperature-range__desc">21°</p>
            </div>
            <div className="temperature-range__line"></div>
            <div className="temperature-range__min">
                <span className="temperature-range__icon temperature-range__icon-bottom"></span>
                <p className="temperature-range__desc">-8°</p>
            </div>
        </div>
    );
};
