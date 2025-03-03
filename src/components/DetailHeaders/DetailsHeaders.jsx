import "./DetailsHeaders.scss"

export const DetailsHeaders = ({ date }) => {
    const dateNow = date.getDate();
    const currentMonth = date.getMonth();
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October', 
        'November'
    ] 

    return (
        <div className="details__headers">
                <div className="details__headers-inner container-max">
                    <ul className="details__headers-list">
                        <li className="details__headers-item">
                            <div className="details__headers-date">
                                <p className="details__headers-title">{dateNow}</p>
                                <div className="details__headers-date-info">
                                    <h1 className="details__headers-subtitle">
                                        {months[currentMonth]}
                                    </h1>
                                    <p className="details__headers-desc details__headers-today">
                                        Today
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="details__headers-item">
                            <p className="details__headers-desc details__headers-p">
                                pressure mb 
                            </p>
                        </li>
                        <li className="details__headers-item">
                            <p className="details__headers-desc details__headers-h">
                                humidity
                            </p>
                        </li>
                        <li className="details__headers-item">
                            <p className="details__headers-desc details__headers-ws">
                                wind speed kph/h
                            </p>
                        </li>
                        <li className="details__headers-item">
                            <p className="details__headers-desc details__headers-fl">
                                feels like
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
    )
}