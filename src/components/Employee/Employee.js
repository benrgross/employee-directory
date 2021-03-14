import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

export const Employee = ({ employees, sort, toggleIcon }) => {
  console.log(toggleIcon);
  return (
    <div style={{ padding: "0px" }} className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 ">
          <table className="table">
            <thead>
              <tr className="text-center md:flex bg-white shadow-lg items-center justify-between">
                <th>Image</th>
                <th>
                  First Name{" "}
                  {toggleIcon ? (
                    <FaArrowDown onClick={() => sort()} />
                  ) : (
                    <FaArrowUp onClick={() => sort()} />
                  )}
                </th>
                <th>Last Name</th>
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
                    <td>{employee.name.first}</td>
                    <td>{employee.name.last}</td>
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
