import React from "react";
import axios from "axios";
import Title from "./components/Title/Title";
import Wrapper from "./components/Wrapper/index";
import Employee from "./components/Employee/Employee";
import Search from "./components/Search/Search";
import "./App.css";

class App extends React.Component {
  state = {
    // object array with employee sorted descending initally
    employees: [],
    // search string set to empty
    search: "",
    // boolean for descending property of sort by Name or City
    nameDescending: true,
    cityDecending: true,
  };

  // get request on loading page
  componentDidMount() {
    this.getEmployees();
  }

  //function with axios call to get employee array
  getEmployees = async () => {
    const {
      data: { results },
    } = await axios.get("https://randomuser.me/api/?results=100&nat=us");
    // sort data descending
    let nameDescending = results.sort((a, b) => {
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

    // set state to sorted object array
    this.setState({ employees: nameDescending });
  };

  // update search state on change event
  handleChange = (event) => {
    const { value } = event.target;

    this.setState({ search: value });
  };

  // toggle sort by name function
  sortByName = () => {
    if (this.state.nameDescending === true) {
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
      this.setState({ employees: ascending, nameDescending: false });
    } else {
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
      this.setState({ employees: descending, nameDescending: true });
    }
  };

  //toggle sort by city function
  sortByCity = () => {
    if (this.state.cityDecending === true) {
      let ascending = this.state.employees.sort((a, b) => {
        let fa = a.location.city.toLowerCase(),
          fb = b.location.city.toLowerCase();

        if (fa > fb) {
          return -1;
        }
        if (fa < fb) {
          return 1;
        }
        return 0;
      });
      this.setState({ employees: ascending, cityDecending: false });
    } else {
      console.log("false click");
      let descending = this.state.employees.sort((a, b) => {
        let fa = a.location.city.toLowerCase(),
          fb = b.location.city.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
      this.setState({ employees: descending, cityDecending: true });
    }
  };

  render() {
    // filter employee array by letters in search string
    let searchName = this.state.employees.filter((employee) => {
      return (
        employee.name.first
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    return (
      <>
        <Title />
        <Wrapper>
          <Search value={this.state.search} handleChange={this.handleChange} />
          <Employee
            employees={searchName}
            sortName={this.sortByName}
            toggleName={this.state.nameDescending}
            sortCity={this.sortByCity}
            toggleCity={this.state.cityDecending}
          />
        </Wrapper>
      </>
    );
  }
}

export default App;
