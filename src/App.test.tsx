import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders hello", () => {
    const { getByText } = render(<App />);
    const helloElement = getByText(/hello/i);
    expect(helloElement).toBeInTheDocument();
});
