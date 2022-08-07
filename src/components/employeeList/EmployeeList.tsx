import React, { useEffect, useState } from "react";
import EmployeeCard from "../employeeCard/EmployeeCard";
import styles from "./employee.module.css";
import { useDispatch, useSelector } from "react-redux";
import { listHandler, listCountHandler } from "../../dataSlice";
import { RootState } from "../../store";
export type employee = {
  dateOfBirth: string;
  dateOfEmployment: string;
  deletedAt: null;
  email: string;
  homeAddress: {
    addressLine2: string;
    addressLine1: string;
    ZIPCode: string;
    city: string;
    _id: string;
  };
  isDeleted: false;
  name: string;
  phoneNumber: string;
  _id: string;
};

const EmployeeList = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => {
    return state.data.list;
  });
  const count = useSelector((state: RootState) => {
    return state.data.listCount;
  });
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

  useEffect(() => {
    fetch(`http://142.132.229.249:3000/employees?page=${page}&limit=3`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(listHandler(data.employees));
        dispatch(listCountHandler(data.count));
      });
  }, [page]);

  return (
    <>
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
      </div>
      {+count !== 0 && (
        <div className={styles["btn-next-prev-cont"]}>
          <button onClick={prevPageHandler}>previous</button>
          <button onClick={nextPageHandler}>next</button>
        </div>
      )}
    </>
  );
};

export default EmployeeList;
