import { render } from "@testing-library/react";
import App from "./App";

test("renders App Component", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Laptop Customisation Tool/i);
  expect(linkElement).toBeInTheDocument();
});
