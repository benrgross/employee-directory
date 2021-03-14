import React from "react";
import axios from "axios";
import Title from "./components/Title/Title";
import Wrapper from "./components/Wrapper/index";
import Employee from "./components/Employee/Employee";
import Search from "./components/Search/Search";

import "./App.css";

class App extends React.Component {
  state = {
    employees: [],
    search: "",
    descending: true,
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = async () => {
    const {
      data: { results },
    } = await axios.get("https://randomuser.me/api/?results=50&nat=us", {
      headers: {
        Accept: "application/json",
      },
    });
    console.log("data", results);
    let descending = results.sort((a, b) => {
      let fa = a.name.first.toLowerCase(),
        fb = b.name.first.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });

    this.setState({ employees: descending });
  };

  handleChange = (event) => {
    const { value } = event.target;

    this.setState({ search: value });
  };

  sortByName = () => {
    if (this.state.descending === true) {
      let ascending = this.state.employees.sort((a, b) => {
        let fa = a.name.first.toLowerCase(),
          fb = b.name.first.toLowerCase();

        if (fa > fb) {
          return -1;
        }
        if (fa < fb) {
          return 1;
        }
        return 0;
      });
      this.setState({ employees: ascending, descending: false });
    } else {
      console.log("false click");
      let descending = this.state.employees.sort((a, b) => {
        let fa = a.name.first.toLowerCase(),
          fb = b.name.first.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
      this.setState({ employees: descending, descending: true });
    }
  };

  render() {
    let searchName = this.state.employees.filter((employee) => {
      return (
        employee.name.first
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    return (
      <Wrapper>
        <Title />
        <Search value={this.state.search} handleChange={this.handleChange} />
        <Employee
          employees={searchName}
          sort={this.sortByName}
          toggleIcon={this.state.descending}
        />
      </Wrapper>
    );
  }
}

export default App;
