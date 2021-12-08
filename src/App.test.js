import { render, screen } from "@testing-library/react";
import App from "./App";
import Gallery from "./pages/Gallery";
import Card from "./components/Card";
import Rows from "./components/Rows";
import data from "./data.json";

test("renders App component", () => {
  console.log("renders App component");
  render(<App />);
  const linkElement = screen.getByText("Gallery");
  expect(linkElement).toBeInTheDocument();
});

test("renders Gallery component", () => {
  console.log("renders Gallery component");
  render(<Gallery />);
  const linkElement = screen.getByText("Gallery");
  expect(linkElement).toBeInTheDocument();
});

test("renders Rows component", () => {
  console.log("renders Rows component");
  render(<Rows data={data} />);
  const linkElement = screen.getByText(data[0].title);
  expect(linkElement).toBeInTheDocument();
});

test("renders Card component", () => {
  console.log("renders Card component");
  const { container } = render(<Card data={data[0]} />);
  const img = container.querySelector("img");
  expect(img.src).toContain(data[0].image);
});
