import React, { useState, useEffect } from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./forecastSummaries";
import "../styles/App.css";
import ForecastDetails from "./forecastDetails";
import getForecast from "./getForecast";
import SearchForm from "./searchForm";

function App() {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );
  const handlesForecastSelect = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    getForecast(
      setSelectedDate,
      setForecasts,
      setLocation,
      setSearchText,
      setErrorMessage
    );
  }, []);

  const handleCitySearch = () => {
    getForecast(
      setSelectedDate,
      setForecasts,
      setLocation,
      searchText,
      setErrorMessage
    );
  };

  return (
    <div className="weather-app">
      <LocationDetails
        city={location.city}
        country={location.country}
        error={errorMessage}
      />
      <SearchForm
        onSubmit={handleCitySearch}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      {!errorMessage && (
        <>
          <ForecastSummaries
            forecast={forecasts}
            onForecastSelect={handlesForecastSelect}
          />
          {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
        </>
      )}
    </div>
  );
}

export default App;
