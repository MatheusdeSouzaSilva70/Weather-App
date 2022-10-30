import React from "react";
import moment from "moment";
import "../css/DetailsCard.css";

const DetailsCard = ({weather_icon, data}) => {
  const {clouds, main, weather} = data.list[0];
  
  return (
    <div className="details">
      <div className="clouds">
        <p className="celsius">{Math.round(main.temp)}&deg;C</p>
        <div className="clouds-icon">
          {weather[0].main}
          <img src={weather_icon} alt="Ícone do clima" />          
        </div>
        <div className="description">
          {weather[0].description}
        </div>
        <div className="time">
          {moment().format("dddd MMM YYYY")}
        </div>
      </div>

      <div className="more-info">
        <p>Sensação Térmica: {Math.round(main.feels_like)}&deg;C</p>
        <p>Humidade: {main.humidity}%</p>
        <p>Nuvens: {clouds.all}%</p>
        <p>Temp Min: {Math.round(main.temp_min)}&deg;C</p>
        <p>Temp Max: {Math.round(main.temp_max)}&deg;C</p>
      </div>
    </div>
  );
};

export default DetailsCard;
