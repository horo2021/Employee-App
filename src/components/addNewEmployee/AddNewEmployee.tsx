import React, { useCallback } from "react";
import styles from "./addNewEmployee.module.css";
import { useHistory } from "react-router-dom";
type props = {
  title: string;
};
const AddNewEmployee: React.FC<props> = (props) => {
  const history = useHistory();
  const onAddEmployee = useCallback(() => {
    history.push("/employee-form");
  }, [history]);

  return (
    <div data-testid="mainCont" className={styles["header-cont"]}>
      <h2>{props.title}</h2>
      {props.title === "Employee Dashboard System" && (
        <div>
          <button data-testid="addNewEmployeeBtn" onClick={onAddEmployee}>
            ADD NEW EMPLOYEE
          </button>
          <button
            data-testid="deletedListBtn"
            onClick={() => history.push("/deleted-list")}
          >
            Deleted Employee List
          </button>
        </div>
      )}
      {props.title !== "Employee Dashboard System" && (
        <button onClick={() => history.push("/")}>Back Home</button>
      )}
    </div>
  );
};

export default AddNewEmployee;
