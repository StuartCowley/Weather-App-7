import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

function ForecastDetails({ forecast }) {
  const { date, temperature, wind, humidity } = forecast;
  return (
    <div className="forecast-details">
      <div className="forecast-details_date" data-testid="forecast-date">
        {moment(date).format("ddd do MMM")}
      </div>
      <div
        className="forecast-details_temperatureMin"
        data-testid="forecast-temp-min"
      >
        Min temperature: {temperature.min} &deg;C
      </div>
      <div
        className="forecast-details_temperatureMax"
        data-testid="forecast-temp-max"
      >
        Max temperature: {temperature.max} &deg;C
      </div>
      <div className="forecast-details_wind" data-testid="forecast-wind">
        Wind:{wind.speed}mph {wind.direction}
      </div>
      <div
        className="forecast-details_humidity"
        data-testid="forecast-humidity"
      >
        Humidity: {humidity}%
      </div>
    </div>
  );
}

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ForecastDetails;
