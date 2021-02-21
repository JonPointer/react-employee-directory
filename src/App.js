import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import API from "./utils/API";

class App extends Component {
  state = {
    employees: [],
    country: "",
    originalEmployees: []
  };

  componentDidMount() {
    this.loadEmployees("?inc=name,picture,location,registered&results=30");
  }

  loadEmployees = query => {
    console.log("Got here");
    API.search(query)
      .then(res => {
        this.setState({ employees: res.data.results, originalEmployees: res.data.results })
        console.log(res.data.results)
      })
      .catch(err => console.log(err));
  };

  removeEmployee = id => {
    // Filter this.state.employees for employees with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => (this.state.employees.indexOf(employee)) !== id);
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
  };

  employeeSortBySeniority = () => {
    const employees = this.state.employees.sort((a, b) => (a.registered.age > b.registered.age ? 1 : -1));
    this.setState({ employees });
  }

  // employeeFilterCountry = event => {
  //   event.preventDefault();
  //   // console.log(this.state.country);
  //   const employees = this.state.employees.filter(employee => employee.location.country.trim() === this.state.country.trim());
  //   this.setState({ employees });
  // }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    // Updating the input's state
    this.setState({
      [name]: value
    });
    const employees = this.state.originalEmployees.filter(employee => employee.location.country.trim().toLowerCase().includes(value.trim().toLowerCase()));
    this.setState({ employees });
  };

  render() {
    return (

      <div className="container-fluid">
        <div className="text-center mt-2">
          <h2>Employee Directory</h2>
          {/* <div className ="position-absolute top-50 start-50 translate-middle"> */}
          {/* Button to sort the employees by age */}
          <button type="submit" onClick={this.employeeSortBySeniority} className="btn btn-primary mt-2" style={{backgroundColor: 'rgb('+51+','+ 83+','+ 132+')'}}>
            Sort by Seniority
        </button>

          <br></br>

          {/* Form to filter by country */}
          <form className="search mt-2 col-12 col-offset-12">
            {/* <div className="form-group"  style={{width: 100 +'px'}}> */}
            <div className="form-group">
              <label>Filter by Country:</label>
              <input style={{ width: 18 + 'rem' }, {textAlign: "center"}}
                name="country"
                value={this.state.country}
                type="text"
                className="form-control"
                placeholder="Enter Desired Country"
                onChange={this.handleInputChange}
                autocomplete="off"
              />
            </div>
          </form>
        </div>

        <Wrapper>
          {/* Map over this.state.employees and render an EmployeeCard component for each employee object */}
          {this.state.employees.map(employee => (
            <EmployeeCard
              removeEmployee={this.removeEmployee}
              id={this.state.employees.indexOf(employee)}
              key={this.state.employees.indexOf(employee)}
              name={`${employee.name.title} ${employee.name.first} ${employee.name.last}`}
              country={employee.location.country}
              seniority={employee.registered.age}
              image={employee.picture.medium}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
