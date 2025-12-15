export default function WeatherCard({ data }) {
    return (
        <div className="weather-card">
            <h2>{data.name}</h2>

            <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt="weather icon"
            />

            <p className="condition">{data.weather[0].main}</p>

            <div className="details">
                <p>🌡 {data.main.temp} °C</p>
                <p>💧 {data.main.humidity}%</p>
                <p>🌬 {data.wind.speed} km/h</p>
            </div>
        </div>
    );
}
