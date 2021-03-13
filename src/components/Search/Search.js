import React from "react";
import "./style.css";

export const Search = () => {
  return (
    <div className="row search ">
      <div class="input-group col-sm-12 col-md-12">
        <form class="form-inline my-2 my-lg-0">
          <span style={{ marginRight: "10px" }}>
            Search Employees by Name:{" "}
          </span>
          <input
            value=""
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
