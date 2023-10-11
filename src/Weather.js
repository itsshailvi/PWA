import React, { useState } from "react";
import { fetchWeather } from "./api/fetchWeather";
import addNotification from "react-push-notification";
import { Link } from "react-router-dom";

const Weather = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);

      setWeather(data);
      setQuery("");
    }
  };

  const showNotification = () => {
    console.log("first");
    addNotification({
      title: "Push notification",
      subtitle: "demo",
      message: "Dummy notification",
      theme: "lightblue",
      position: "top-left",
      //   native: true,
    });
  };

  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
      <button onClick={showNotification}>Show Notification</button>
      <Link to="webcam">Open Webcam</Link>
    </div>
  );
};

export default Weather;
