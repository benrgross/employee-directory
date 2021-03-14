import React from "react";
import "./style.css";

export const Search = ({ handleChange, value }) => {
  return (
    <div className="row search container-fluid">
      <div className="input-group col-sm-12 col-md-12">
        <form className="form-inline my-2 my-lg-0 ">
          <input
            className="shadow"
            onChange={(event) => handleChange(event)}
            value={value}
            className="form-control mr-sm-2"
            name="search"
            type="text"
            placeholder="Search by Name"
            aria-label="Search"
          />
        </form>
      </div>
    </div>
  );
};

export default Search;
