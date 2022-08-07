import React from "react";
import styles from "./employeeCard.module.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteEmployeeHandler,
  selectedEmployeeIdHandler,
} from "../../dataSlice";

type props = {
  dateOfBirth: string;
  dateOfEmployment: string;
  deletedAt: null;
  email: string;

  addressLine2: string;
  addressLine1: string;
  ZIPCode: string;
  city: string;
  id: string;

  isDeleted: boolean;
  name: string;
  phoneNumber: string;
};

const EmployeeCard: React.FC<props> = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const deleteEmployeeHandler = () => {
  const onEditEmployee = () => {
    dispatch(selectedEmployeeIdHandler(props.id));
    history.push("/edit-employee");
  };
  return (
    <div data-testid="card-container" className={styles["employee-card-cont"]}>
      <h3>{props.name} </h3>

      <div className={styles["main-info-cont"]}>
        <h4>{props.email}</h4>
        <h4>{props.phoneNumber}</h4>
      </div>
      <div className={styles["dates-info-cont"]}>
        <span>
          date of birth:<span>{props.dateOfBirth}</span>
        </span>
        <span>
          date of employemnet:<span>{props.dateOfEmployment}</span>
        </span>
      </div>
      <div className={styles["location-info-cont"]}>
        <span>
          city:<span>{props.city}</span>
        </span>
        <span>
          zip code:<span>{props.ZIPCode}</span>
        </span>
      </div>
      <div className={styles["location-info-cont"]}>
        <span>
          address line 1:<span>{props.addressLine1}</span>
        </span>
        <span>
          address line 2:<span>{props.addressLine2}</span>
        </span>
      </div>
      {!props.isDeleted && (
        <div className={styles["btn-cont"]}>
          <button onClick={onEditEmployee}>Edit Employee</button>
          <button onClick={() => dispatch(deleteEmployeeHandler(props.id))}>
            Delete Employee
          </button>
        </div>
      )}
    </div>
  );
};

export default EmployeeCard;
