import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import App from "./App";

it("renders without crashing", () => {
  const { getByText, getByTestId, asFragment } = render(<App />);

  expect(asFragment()).toMatchSnapshot();
  expect(getByText("Learning react-testing-library")).toBeInTheDocument();
  expect(getByTestId("counter-test-id")).toHaveTextContent("0");
});

// Fire Events

it("increment counter correctly", () => {
  const { getByText, getByTestId } = render(<App />);

  fireEvent.click(getByText("+"));

  expect(getByTestId("counter-test-id")).toHaveTextContent("1");
});

// fireEvent can also fill form and much more
// fireEvent.change(getByLabelText(/username/i), {target: {value: 'chuck'}})
// fireEvent.change(getByLabelText(/password/i), {target: {value: 'norris'}})

it("decrease counter correctly", () => {
  const { getByText, getByTestId } = render(<App />);

  fireEvent.click(getByText("-"));

  expect(getByTestId("counter-test-id")).toHaveTextContent("-1");
});

it("increment counter multiple times", () => {
  const { getByText, getByTestId } = render(<App />);

  const plusButton = getByText("+");
  fireEvent.click(plusButton);
  fireEvent.click(plusButton);
  fireEvent.click(plusButton);

  expect(getByTestId("counter-test-id")).toHaveTextContent("3");
});

it("increment/decrement counter multiple times", () => {
  const { getByText, getByTestId } = render(<App />);

  const plusButton = getByText("+");
  const minusButton = getByText("-");
  fireEvent.click(plusButton);
  fireEvent.click(minusButton);
  fireEvent.click(plusButton);
  fireEvent.click(plusButton);
  fireEvent.click(minusButton);

  expect(getByTestId("counter-test-id")).toHaveTextContent("1");
});

// Async Events

// this test fails
xit("increment async counter correctly - wrong test", () => {
  const { getByText, getByTestId } = render(<App />);

  fireEvent.click(getByText("+ Async"));

  expect(getByTestId("counter-test-id")).toHaveTextContent("1");
});

it("increment async counter correctly", async () => {
  const { getByText } = render(<App />);

  fireEvent.click(getByText("+ Async"));

  await waitForElement(() => getByText("Current counter: 1"));
});

it("decrement async counter correctly", async () => {
  const { getByText } = render(<App />);

  fireEvent.click(getByText("- Async"));

  await waitForElement(() => getByText("Current counter: -1"));
});
