import React from "react";
import { useSelector } from "react-redux";
import EmployeeForm from "../employeeForm/EmployeeForm";
import { RootState } from "../../store";
import { employee } from "../employeeList/EmployeeList";

const EditEmployee = () => {
  const employeeId = useSelector((state: RootState) => {
    return state.data.selectedEmployeeId;
  });
  const employees: employee[] = useSelector((state: RootState) => {
    return state.data.list;
  });
  const e = employees.find((item) => {
    return item._id === employeeId;
  });
  return (
    <div>
      <EmployeeForm employee={e} />
    </div>
  );
};

export default EditEmployee;
