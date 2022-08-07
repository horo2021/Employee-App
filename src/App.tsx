import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddNewEmployee from "./components/addNewEmployee/AddNewEmployee";
import DeletedEmployeeList from "./components/deletedEmployeeList/DeletedEmployeeList";
import EditEmployee from "./components/editEmployee/EditEmployee";
import EmployeeForm from "./components/employeeForm/EmployeeForm";
import EmployeeList from "./components/employeeList/EmployeeList";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <AddNewEmployee title="Employee Dashboard System" />
          <EmployeeList />
        </Route>
        <Route path="/employee-form">
          <AddNewEmployee title="Add new Employee Form" />
          <EmployeeForm />
        </Route>
        <Route path="/deleted-list">
          <AddNewEmployee title="Deleted Employee List" />

          <DeletedEmployeeList />
        </Route>
        <Route path="/edit-employee">
          <AddNewEmployee title="Edit Employee" />
          <EditEmployee />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
