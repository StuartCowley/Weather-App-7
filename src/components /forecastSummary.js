import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import moment from "moment";

function ForecastSummary(props) {
  const { date, description, icon, temperature, onSelect } = props;

  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary_date">
        {moment(date).format("ddd do MMM")}
      </div>
      <div className="forecast-summary_description">{description}</div>
      <div className="forecast-summary_icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <div className="forecast-summary_temperature">
        {temperature.max}&deg;C
      </div>
      <button type="button" onClick={() => onSelect(date)}>
        More details
      </button>
    </div>
  );
}

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ForecastSummary;
