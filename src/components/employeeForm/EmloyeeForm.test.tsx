import { fireEvent, render, screen } from "@testing-library/react";
import EmployeeForm from "./EmployeeForm";

test("name input ", () => {
  render(<EmployeeForm />);
  const nameInput = screen.getByTestId("name");
  expect(nameInput).toBeInTheDocument();
});
test("name input value ", () => {
  render(<EmployeeForm />);
  const nameInput = screen.getByTestId("name") as HTMLInputElement;
  fireEvent.change(nameInput, { target: { value: "" } });
  expect(nameInput.value).toBe("");
});

test("email input ", () => {
  render(<EmployeeForm />);
  const emailInput = screen.getByTestId("email");
  expect(emailInput).toBeInTheDocument();
});
test("email input value ", () => {
  render(<EmployeeForm />);
  const emailInput = screen.getByTestId("email") as HTMLInputElement;
  fireEvent.change(emailInput, { target: { value: "" } });
  expect(emailInput.value).toBe("");
});
test("phone input ", () => {
  render(<EmployeeForm />);
  const phoneInput = screen.getByTestId("phone");
  expect(phoneInput).toBeInTheDocument();
});
test("phone input value ", () => {
  render(<EmployeeForm />);
  const phoneInput = screen.getByTestId("phone") as HTMLInputElement;
  fireEvent.change(phoneInput, { target: { value: "" } });
  expect(phoneInput.value).toBe("");
});
test("address1 input ", () => {
  render(<EmployeeForm />);
  const address1Input = screen.getByTestId("address1");
  expect(address1Input).toBeInTheDocument();
});
test("address1 input value ", () => {
  render(<EmployeeForm />);
  const address1Input = screen.getByTestId("address1") as HTMLInputElement;
  fireEvent.change(address1Input, { target: { value: "" } });
  expect(address1Input.value).toBe("");
});
test("address2 input ", () => {
  render(<EmployeeForm />);
  const address2Input = screen.getByTestId("address2");
  expect(address2Input).toBeInTheDocument();
});
test("address2 input value ", () => {
  render(<EmployeeForm />);
  const address2Input = screen.getByTestId("address2") as HTMLInputElement;
  fireEvent.change(address2Input, { target: { value: "" } });
  expect(address2Input.value).toBe("");
});
test("zip input ", () => {
  render(<EmployeeForm />);
  const zipInput = screen.getByTestId("zip");
  expect(zipInput).toBeInTheDocument();
});
test("zip input value ", () => {
  render(<EmployeeForm />);
  const zipInput = screen.getByTestId("zip") as HTMLInputElement;
  fireEvent.change(zipInput, { target: { value: "" } });
  expect(zipInput.value).toBe("");
});
test("city input ", () => {
  render(<EmployeeForm />);
  const cityInput = screen.getByTestId("city");
  expect(cityInput).toBeInTheDocument();
});
test("city input value ", () => {
  render(<EmployeeForm />);
  const cityInput = screen.getByTestId("city") as HTMLInputElement;
  fireEvent.change(cityInput, { target: { value: "" } });
  expect(cityInput.value).toBe("");
});
test("birth input ", () => {
  render(<EmployeeForm />);
  const birthInput = screen.getByTestId("birth");
  expect(birthInput).toBeInTheDocument();
});
test("birth input value ", () => {
  render(<EmployeeForm />);
  const birthInput = screen.getByTestId("birth") as HTMLInputElement;
  fireEvent.change(birthInput, { target: { value: "" } });
  expect(birthInput.value).toBe("");
});
test("employement input ", () => {
  render(<EmployeeForm />);
  const employementInput = screen.getByTestId("employement");
  expect(employementInput).toBeInTheDocument();
});
test("employement input value ", () => {
  render(<EmployeeForm />);
  const employementInput = screen.getByTestId(
    "employement"
  ) as HTMLInputElement;
  fireEvent.change(employementInput, { target: { value: "" } });
  expect(employementInput.value).toBe("");
});
