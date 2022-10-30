import React from "react";
import moment from "moment";
import "../css/SummaryCard.css";

const SummaryCard = ({day}) => {
  let day_icon = `${process.env.REACT_APP_ICON_URL + day.weather[0]["icon"]}@2x.png`;
  
  return (
    <li className="summary-items">
      <div>
        <p>{Math.round(day.main.temp)}&deg;C</p>
        <p>
          {day.weather[0].main}
          <img src={day_icon} alt="Ícone do dia" />
        </p>
        <p>{day.weather[0].description}</p>
        <p>{moment(day.dt_txt).format("dddd hh:mm")}am</p>
      </div>
    </li>
  );
};

export default SummaryCard;
