import { useState } from "react";
import axios from "axios";
import "./WeatherApp.css";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleClick = async () => {
    if (!city) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ed89cd5608e1b7ca6735196ee848e8fd`
      );
      setWeather(res.data);
    } catch (err) {
      setError("City not found ❌");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-container">
      <h2>🌦 Weather App</h2>

      <input
        type="text"
        value={city}
        placeholder="Enter city name"
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={handleClick}>Get Weather</button>

      {loading && <div className="loader"></div>}

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-info">
          <h3>{weather.name}</h3>

          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather-icon"
          />

          <p className="temp">{(weather.main.temp - 273.15).toFixed(1)} °C</p>

          <p className="desc">{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
