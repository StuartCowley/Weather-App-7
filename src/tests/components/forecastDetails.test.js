import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components /forecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 1111,
    temperature: {
      min: 12,
      max: 22,
    },
    humidity: 34,
    wind: {
      speed: 23,
      direction: "North West",
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values of props correctly", () => {
    const { getByTestId } = render(<ForecastDetails forecast={validProps} />);

    expect(getByTestId("forecast-date")).toHaveClass("forecast-details_date");
    expect(getByTestId("forecast-temp-min")).toHaveClass(
      "forecast-details_temperatureMin"
    );
    expect(getByTestId("forecast-temp-max")).toHaveClass(
      "forecast-details_temperatureMax"
    );
    expect(getByTestId("forecast-humidity")).toHaveClass(
      "forecast-details_humidity"
    );
    expect(getByTestId("forecast-wind")).toHaveClass("forecast-details_wind");
  });
});
