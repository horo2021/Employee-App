import { render, screen } from "@testing-library/react";
import EmployeeCard from "./EmployeeCard";
import { store } from "../../store";
import { Provider } from "react-redux";

test(" it insures emp;oyee card display the data corectlly", () => {
  render(
    <Provider store={store}>
      <EmployeeCard
        name="{employee.name}"
        email="{employee.email}"
        phoneNumber="{employee.phoneNumber}"
        key="{employee._id}"
        id="{employee._id}"
        addressLine1="{employee.homeAddress.addressLine1}"
        addressLine2="{employee.homeAddress.addressLine2}"
        ZIPCode="{employee.homeAddress.ZIPCode}"
        city="{employee.homeAddress.city}"
        dateOfBirth="{employee.dateOfBirth}"
        dateOfEmployment="{employee.dateOfEmployment}"
        isDeleted={false}
        deletedAt={null}
      />
    </Provider>
  );
  const cardContent = screen.getByTestId("card-container");
  expect(cardContent).toBeInTheDocument();
  expect(cardContent).toHaveTextContent(
    "{employee.name} {employee.email}{employee.phoneNumber}date of birth:{employee.dateOfBirth}date of employemnet:{employee.dateOfEmployment}city:{employee.homeAddress.city}zip code:{employee.homeAddress.ZIPCode}address line 1:{employee.homeAddress.addressLine1}address line 2:{employee.homeAddress.addressLine2}Edit EmployeeDelete Employee"
  );
});
