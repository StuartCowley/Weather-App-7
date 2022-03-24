import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../components /forecastSummaries";
import ForecastSummary from "../components /forecastSummary";

describe("ForecastSummaries", () => {
  const validProps = [
    // why array?
    {
      date: 1111,
      description: " Stub description 1.0",
      icon: "800",
      temperature: {
        min: 12,
        max: 22,
      },
    },
    {
      date: 3333,
      description: " Stub description 2.0",
      icon: "602",
      temperature: {
        min: 1,
        max: 10,
      },
    },
  ];

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastSummaries forecast={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct number of ForecastSummary instances", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries forecast={validProps} />
    );
    expect(getAllByTestId("forecast-summary")).toHaveLength(2);
  });
});
