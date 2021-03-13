import React from "react";
import Title from "./components/Title/Title";
import Wrapper from "./components/Wrapper/index";
import "./App.css";

class App extends React.Component {
  state = {
    employees: null,
  };

  componentDidMount() {
    // fetch some dad jokes
    this.getDadJoke();
  }

  getEmployees = async () => {
    const { data } = await axios.get("https://randomuser.me/", {
      headers: {
        Accept: "application/json",
      },
    });

    this.setState({ employees: data });
  };

  render() {
    console.log(this.state.employees);
    return (
      <Wrapper>
        <Title />
      </Wrapper>
    );
  }
}

export default App;
