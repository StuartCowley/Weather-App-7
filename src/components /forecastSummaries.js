import React from "react";
import PropTypes from "prop-types";
import ForecastSummary from "./forecastSummary";
import "../styles/forecastSummaries.css";

function ForecastSummaries({ forecast, onForecastSelect }) {
  return (
    <div className="forecast-summaries">
      {forecast.map((forecasts) => (
        <ForecastSummary
          key={forecasts.date}
          date={forecasts.date}
          description={forecasts.description}
          icon={forecasts.icon.toString()}
          onSelect={onForecastSelect}
          temperature={forecasts.temperature}
        />
      ))}
    </div>
  );
}

export default ForecastSummaries;

ForecastSummaries.propTypes = {
  forecast: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.number.isRequired,
      temperature: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
      }).isRequired,
    })
  ).isRequired,
  onForecastSelect: PropTypes.func.isRequired,
};
