import React from "react";
import "./style.css";

export const Search = ({ handleChange, value }) => {
  return (
    <div className="row search shadow">
      <div className="input-group col-sm-12 col-md-12">
        <form className="form-inline my-2 my-lg-0">
          <span style={{ marginRight: "10px" }}>
            Search Employees by Name:{" "}
          </span>
          <input
            onChange={(event) => handleChange(event)}
            value={value}
            className="form-control mr-sm-2"
            name="search"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
