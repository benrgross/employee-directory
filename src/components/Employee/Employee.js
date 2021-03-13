import React from "react";

export const Employee = () => {
  return (
    <div className="container-fluid">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Image</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Image</td>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
            <td>phone</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
