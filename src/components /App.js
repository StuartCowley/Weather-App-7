/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import "../styles/App.css";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";

function App(props) {
  return (
    <div className="App">
      <LocationDetails
        city={props.location.city}
        country={props.location.country}
      />
    </div>
  );
}

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired, // Why isRequired on the outer scope?
};

export default App;
