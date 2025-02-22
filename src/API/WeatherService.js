export default class WeatherService {
    static apiKey = "0b76a0235aa64eedade81512250202";

    static async getTodayForecast(city) {
        const response = await fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=${city}&days=1&aqi=no&alerts=no`
        );

        return response;
    }
}
