import React from "react";

export const Employee = ({ employees }) => {
  return (
    <div className="container-fluid">
      <table className="table table-striped">
        <thead>
          <tr className="text-center">
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr className="text-center">
                <td>
                  <img src={employee.picture.medium} />
                </td>
                <td>{employee.name.first}</td>
                <td>{employee.name.last}</td>
                <td className="text-center">{employee.email}</td>
                <td>{employee.cell}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
