import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddNewEmployee from "./AddNewEmployee";
import userEvent from "@testing-library/user-event";
import { useHistory } from "react-router-dom";

test("it makes sure that the main div have a header-cont class", () => {
  render(<AddNewEmployee title="Employee Dashboard System" />);
  const mainCont = screen.getByTestId("mainCont");
  expect(mainCont).toHaveClass("header-cont");
});
test("renders the add new emplooyee btn", () => {
  render(<AddNewEmployee title="Employee Dashboard System" />);
  const addNewEmployeeBtn = screen.getByTestId("addNewEmployeeBtn");
  expect(addNewEmployeeBtn).toBeInTheDocument();
});
test("renders the deleted list btn ", () => {
  render(<AddNewEmployee title="Employee Dashboard System" />);
  const deletedListBtn = screen.getByTestId("deletedListBtn");
  expect(deletedListBtn).toBeInTheDocument();
});
