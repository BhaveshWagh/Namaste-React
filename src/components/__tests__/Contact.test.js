import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

// This is a Basics of testing

// Some time we have so many test cases so we make different group of test cases with the help of "describe" block and you have somthing describe block inside describe block like nested block
// Syntax : describe("",() => {})

// Note : "test" has aliase name which is "it"
// Syntax : it("",() => {}) or test("", () => {})

describe("Should load contact us component", () => {
  it("Should load 2 input boxes inside Contact component", () => {
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");

    // console.log(inputBoxes[0]);
    // Assertion
    expect(inputBoxes.length).toBe(2);
  }); 

  it("Should load Contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside Contact Component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");
    // const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside Contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });
});
