# Types of testing (developer)

- Unit Testing
- Integration Testing
- End to End Testing - e2e testing

#### React Testing library we are using for testing in our app

Note : That react testing library uses something known as Jest(Behind The Scene BTS) is a Javascript testing framework which is focus on simplicity

# Setting up Testing in our app

- Install React Testing Library
- Installed Jest
- Installed Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- Jest configuration : npx jest --init
  ![Alt text](image-4.png)
- Install jsdom library : npm install --save-dev jest-environment-jsdom
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config

* Why we adding @babel/preset-react because @babel/preset-react basicallly healping a testing library to convert JSX into HTML

- Install @testing-library/jest-dom : for that toBeInTheDocument()
- command for test : npm run test

- To make your test cases run again and again like HMR add the below script inside package.json

```
  "script" : {
  "watch-test": "jest --watch"
  }
```

```
 "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "jest",
    "watch-test": "jest --watch"
  },
```

- Then run the test case using the following cmd : `npm run watch-test` it will keep running as soon as I make changes into my test case file and save it.

```jsx
// first test case
import { sum } from "../sum";

test("Sum function should calculate the sum of two numbers", () => {
  const result = sum(10, 5);

  // This line is known as Assertion
  expect(result).toBe(15);
});
```

### Test Case Syntax

- Some time we have so many test cases so we make different group of test cases with the help of "describe" block and you have somthing describe block inside describe block like nested block

  `Syntax : describe("",() => {})`

Note : "test" has aliase name which is "it"

`Syntax : it("",() => {}) or test("", () => {})`

```jsx
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
```

## Note : Whenever your using fetch, state update wrapped your render method inside act(...)

- Warning: An update to Body inside a test was not wrapped in act(...).
- When testing, code that causes React state updates should be wrapped into act(...):

```
act(() => {
       /* fire events that update state */
   // });
/* assert on the output */
```
```jsx 
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import MOCK_DATA from "../mockData/resListMock.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

// Note : Whenever your using fetch, state update wrapped your render method inside act(...)

// for fetch to fetch mockdata
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render the Body Component with Search", async () => {
  await act(async () => render(<BrowserRouter>
    <Body />
  </BrowserRouter>));
});

```