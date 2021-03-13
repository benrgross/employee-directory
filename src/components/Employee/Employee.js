import React from "react";

export const Employee = ({ employees }) => {
  return (
    <div style={{ padding: "0px" }} className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12">
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
                  <tr key={employee.id.value} className="text-center">
                    <td>
                      <img
                        alt={`img-of-employee#${employee.id.value}`}
                        src={employee.picture.medium}
                      />
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
      </div>
    </div>
  );
};

export default Employee;
