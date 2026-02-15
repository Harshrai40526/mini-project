import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({ info }) {

  if (!info) return null;

  // 🌤 Image URLs
  const CLEAR_URL = "https://images.unsplash.com/photo-1501973801540-537f08ccae7b";
  const CLOUD_URL = "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31";
  const RAIN_URL = "https://images.unsplash.com/photo-1527766833261-b09c3163a791";
  const HAZE_URL = "https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227";

  let imageURL = CLEAR_URL;

  if (info.weather.toLowerCase().includes("cloud")) {
    imageURL = CLOUD_URL;
  } 
  else if (info.weather.toLowerCase().includes("rain")) {
    imageURL = RAIN_URL;
  } 
  else if (info.weather.toLowerCase().includes("haze")) {
    imageURL = HAZE_URL;
  }

  // 🔥 Dynamic Temperature Style
  const getTempStyle = (value) => {
    if (value >= 35) {
      return {
        color: "#ff3b3b",
        textShadow: "0 0 10px red",
        fontSize: "28px",
        fontWeight: "bold"
      };
    }
    else if (value <= 10) {
      return {
        color: "#00bfff",
        textShadow: "0 0 10px cyan",
        fontSize: "24px",
        fontWeight: "bold"
      };
    }
    else {
      return {
        color: "#00ff99",
        textShadow: "0 0 8px #00ff99",
        fontSize: "26px",
        fontWeight: "bold"
      };
    }
  };

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card style={{
          maxWidth: 400,
          margin: "0 auto",
          borderRadius: "15px"
        }}>

          <CardMedia
            component="img"
            height="200"
            image={imageURL}
            alt="weather image"
          />

          <CardContent>

            <Typography variant="h5">
               {info.city}
            </Typography>

            {/* 🌡 Main Temperature Dynamic */}
            <Typography className="gradient-text">
   Temperature: {info.temp}°C
</Typography>


           <Typography className="gradient-text">
   Feels Like: {info.feelsLike}°C
</Typography>

<Typography className="gradient-text">
   Humidity: {info.humidity}%
</Typography>

<Typography className="gradient-text">
   Pressure: {info.pressure} hPa
</Typography>

<Typography className="gradient-text">
  Min Temp: {info.temp_min}°C
</Typography>

<Typography className="gradient-text">
   Max Temp: {info.temp_max}°C
</Typography>

<Typography className="gradient-text">
   Weather: {info.weather}
</Typography>

          </CardContent>
        </Card>
      </div>
    </div>
  );
}
