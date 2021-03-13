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
    // let employeesArr = data;

    this.setState({ employees: results });
  };

  handleChange = (event) => {
    const { value } = event.target;

    this.setState({ search: value });
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
        <Employee employees={searchName} />
      </Wrapper>
    );
  }
}

export default App;
