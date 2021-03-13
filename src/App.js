import React from "react";
import axios from "axios";
import Title from "./components/Title/Title";
import Wrapper from "./components/Wrapper/index";
import Employee from "./components/Employee/Employee";
import "./App.css";

class App extends React.Component {
  state = {
    employees: null,
  };

  componentDidMount() {
    // fetch some dad jokes
    this.getEmployees();
  }

  getEmployees = async () => {
    const { data } = await axios.get(
      "https://randomuser.me/api/?results=200&nat=us",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    console.log("data", data);

    this.setState({ employees: data });
  };

  render() {
    console.log(this.state.employees);
    return (
      <Wrapper>
        <Title />
        <Employee />
      </Wrapper>
    );
  }
}

export default App;
