import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../../components /searchForm";
import handleCitySearch from "../../components /App";
import setSearchText from "../../components /App";

describe("SearchForms", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchForm
        onSubmit={handleCitySearch}
        searchText="Manchester"
        setSearchText={setSearchText}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should render a button with the text 'search", () => {
    const { getByText } = render(
      <SearchForm
        onSubmit={handleCitySearch}
        searchText="Manchester"
        setSearchText={setSearchText}
      />
    );

    expect(getByText("Search")).toBeInTheDocument;
  });
});
