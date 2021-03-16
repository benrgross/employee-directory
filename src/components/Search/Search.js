import React from "react";
import "./style.css";

export const Search = ({ handleChange, value }) => {
  return (
    <div className="row search container-fluid">
      <div className="input-group col-sm-12 col-md-12">
        <form className="form-inline my-2 my-lg-0 ">
          <input
            onChange={(event) => handleChange(event)}
            style={{ width: "260px" }}
            value={value}
            className="form-control mr-sm-2 shadow"
            name="search"
            type="text"
            placeholder="Search by First or Last Name"
            aria-label="Search"
          />
        </form>
      </div>
    </div>
  );
};

export default Search;
