import { render, screen } from "@testing-library/react";
import Table from "./Table";
import { coordinates } from "./coordinates";

test("renders Table component", () => {
  render(<Table coordinates={coordinates} />);
  const element = screen.getByTestId("Table");
  expect(element).toBeInTheDocument();
});
