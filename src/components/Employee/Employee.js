import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import "./style.css";

export const Employee = ({
  employees,
  sortName,
  toggleName,
  sortCity,
  toggleCity,
}) => {
  return (
    <div style={{ padding: "0px" }} className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 ">
          <table className="table">
            <thead>
              <tr className="text-center md:flex bg-white shadow-lg items-center justify-between">
                <th>Image</th>
                <th className="arrow" onClick={() => sortName()}>
                  Name {toggleName ? <FaArrowDown /> : <FaArrowUp />}
                </th>
                <th className="arrow" onClick={() => sortCity()}>
                  City {toggleCity ? <FaArrowDown /> : <FaArrowUp />}{" "}
                </th>
                <th>Email</th>

                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => {
                return (
                  <tr
                    key={employee.id.value}
                    className=" text-center md:flex bg-white shadow rounded-md items-center justify-between "
                  >
                    <td>
                      <img
                        alt={`img-of-employee#${employee.id.value}`}
                        src={employee.picture.medium}
                      />
                    </td>
                    <td>{`${employee.name.first}  ${employee.name.last}`}</td>
                    <td>{employee.location.city}</td>
                    <td>{employee.email}</td>
                    <td>{employee.cell}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Employee;
