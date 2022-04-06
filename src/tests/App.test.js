import { render, screen } from "@testing-library/react";
import App from "../components /App";

describe("App", () => {
  test("renders App correctly after pulling live data", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
