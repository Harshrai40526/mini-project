import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ updateInfo, setLoading }) {

  const [city, setCity] = useState("");

  const API_URL = ""
  const API_KEY = "" // apna key yaha daalo

  const getWeatherInfo = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();

      const result = {
        city: city,
        temp: data.main.temp,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        feelsLike: data.main.feels_like,
        weather: data.weather[0].description,

        sunrise: data.sys.sunrise,
  sunset: data.sys.sunset,
  timezone: data.timezone
      };

      updateInfo(result);

    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await getWeatherInfo();
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <TextField
        label="Enter City Name"
        variant="outlined"
        required
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <br /><br />
      <Button variant="contained" type="submit">
        Search
      </Button>
    </form>
  );
}
