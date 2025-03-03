import { DetailsList } from "../DetailsList/DetailsList";

export const DetailsLists = ( { details } ) => {
    console.log(details)
    
    return (
        <div className="details__lists">
            <div className="container-rigth">
                {details.map((detail) => {
                    return <DetailsList
                        key={detail.id}
                        timesDay={detail.timesDay}
                        minTemp={detail.minTemp}
                        maxTemp={detail.maxTemp}
                        icon={detail.icon}
                        pressure={detail.pressure}
                        humidity={detail.humidity}
                        windSpeed={detail.windSpeed}
                        feelsLike={detail.feelsLike}
                    />
                })}
            </div>
        </div>
    );
};
