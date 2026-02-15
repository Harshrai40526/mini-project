import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState, useEffect } from "react";
import "./WeatherApp.css";

export default function WeatherApp() {

  const [weatherInfo, setWeatherInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isNight, setIsNight] = useState(false);

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);

    // Check night (6PM to 6AM)
    const hour = new Date().getHours();
    if (hour >= 18 || hour <= 6) {
      setIsNight(true);
    } else {
      setIsNight(false);
    }
  };

  return (
    <div className={`app-container ${isNight ? "night" : "day"}`}>
      
      {isNight && <div className="stars"></div>}
      {isNight && weatherInfo?.weather?.toLowerCase().includes("rain") && (
        <div className="rain"></div>
      )}

      <h2 className={isNight ? "glow-text" : ""}>
        Weather App By Harsh 🌤️
      </h2>

      <SearchBox 
        updateInfo={updateInfo}
        setLoading={setLoading}
      />

      {loading && <h3>Loading...</h3>}

      {weatherInfo && !loading && (
        <InfoBox info={weatherInfo} />
      )}
    </div>
  );
}
