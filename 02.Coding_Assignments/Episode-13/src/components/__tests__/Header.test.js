import { Provider } from "react-redux";
import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header Component with a login button", () => {
  // render & screen coming from import { render, screen } from "@testing-library/react";

  // Pass Provider
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "LogIn" });

  expect(loginButton).toBeInTheDocument();
  //   toBeInTheDocument coming from import "@testing-library/jest-dom"
});

it("Should render Header Component with a Cart Items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // const cartItems = screen.getByText("Cart - (0 items)");

  // to dynamic use regex expression below used
  const cartItems = screen.getByText(/Cart/);

  expect(cartItems).toBeInTheDocument();
});

it("Should change Login Button to Logout on click Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "LogIn" });

  //fire event coming from import { fireEvent } from "@testing-library/react";

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "LogOut" });

  expect(logoutButton).toBeInTheDocument();
});
