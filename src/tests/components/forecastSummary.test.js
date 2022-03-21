import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components /forecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    date: 1111,
    description: "Stub description",
    icon: "stubIcon",
    temperature: {
      min: 12,
      max: 22,
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText, getByTestId } = render(
      <ForecastSummary
      date={validProps.date}
      description={validProps.description}
      icon={validProps.icon}
      temperature={validProps.temperature}
      />
    );

    expect(getByText("1111")).toHaveClass("forecast-summary_date");
    expect(getByText("Stub description")).toHaveClass(
      "forecast-summary_description"
    );
    expect(getByTestId("forecast-icon")).toHaveClass("forecast-summary_icon");
    expect(getByText("22°C")).toHaveClass("forecast-summary_temperature");
  });
});
