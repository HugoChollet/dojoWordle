import * as React from "react";
import { render, screen } from "@testing-library/react-native";

import { LetterBox } from "./LetterBox";

describe("Testing Tooltip Component", () => {
  it("should render the letter when letter is sent", () => {
    render(<LetterBox status={"success"} letter={"a"} />);

    expect(screen.getByText("a")).toBeTruthy();
  });

  it("should render a dot when no letter is sent", () => {
    render(<LetterBox status={"success"} />);

    expect(screen.getByText(".")).toBeTruthy();
  });
});
