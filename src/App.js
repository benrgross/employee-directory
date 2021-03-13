import React from "react";
import axios from "axios";
import Title from "./components/Title/Title";
import Wrapper from "./components/Wrapper/index";
import Employee from "./components/Employee/Employee";
import "./App.css";

class App extends React.Component {
  state = {
    employees: [],
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

  render() {
    return (
      <Wrapper>
        <Title />
        <Employee employees={this.state.employees} />
      </Wrapper>
    );
  }
}

export default App;
