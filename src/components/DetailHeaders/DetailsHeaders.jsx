import "./DetailsHeaders.scss"

export const DetailsHeaders = () => {
    return (
        <div className="details__headers">
                <div className="details__headers-inner container-max">
                    <ul className="details__headers-list">
                        <li className="details__headers-item">
                            <div className="details__headers-date">
                                <h1 className="details__headers-title">3</h1>
                                <div className="details__headers-month">
                                    <h2 className="details__headers-subtitle">
                                        February
                                    </h2>
                                    <p className="details__headers-desc">
                                        Today
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="details__headers-item">
                            <p className="details__headers-desc">
                                pressure mm Hg
                            </p>
                        </li>
                        <li className="details__headers-item">
                            <p className="details__headers-desc">
                                humidity %
                            </p>
                        </li>
                        <li className="details__headers-item">
                            <p className="details__headers-desc">
                                wind speed m/s
                            </p>
                        </li>
                        <li className="details__headers-item">
                            <p className="details__headers-desc">
                                feels like
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
    )
}