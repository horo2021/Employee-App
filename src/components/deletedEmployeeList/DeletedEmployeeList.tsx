import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletedEmployeeList, deletedEmployeeListCount } from "../../dataSlice";
import { RootState } from "../../store";
import styles from "./deletdEmployeeList.module.css";
import { employee } from "../employeeList/EmployeeList";
import EmployeeCard from "../employeeCard/EmployeeCard";

const DeletedEmployeeList = () => {
  const [page, setPage] = useState(1);
  const count = useSelector((state: RootState) => {
    return state.data.deletedListCount;
  });
  const data = useSelector((state: RootState) => {
    return state.data.deletedList;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`http://142.132.229.249:3000/employees/deleted?page=${page}&limit=3`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(deletedEmployeeList(data.employees));
        dispatch(deletedEmployeeListCount(data.count));
      });
  }, [page]);
  const nextPageHandler = () => {
    if (page * 3 < +count) {
      setPage((prev) => {
        return prev + 1;
      });
    }
  };
  const prevPageHandler = () => {
    if (page > 1) {
      setPage((prev) => {
        return prev - 1;
      });
    }
  };
  return (
    <div className={styles["employee-list-cont"]}>
      {data.map((employee: employee) => {
        return (
          <EmployeeCard
            name={employee.name}
            email={employee.email}
            phoneNumber={employee.phoneNumber}
            key={employee._id}
            id={employee._id}
            addressLine1={employee.homeAddress.addressLine1}
            addressLine2={employee.homeAddress.addressLine2}
            ZIPCode={employee.homeAddress.ZIPCode}
            city={employee.homeAddress.city}
            dateOfBirth={employee.dateOfBirth}
            dateOfEmployment={employee.dateOfEmployment}
            isDeleted={employee.isDeleted}
            deletedAt={employee.deletedAt}
          />
        );
      })}
      {+count !== 0 && (
        <div className={styles["btn-next-prev-cont"]}>
          <button onClick={prevPageHandler}>previous</button>
          <button onClick={nextPageHandler}>next</button>
        </div>
      )}
    </div>
  );
};

export default DeletedEmployeeList;
