import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
// import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
// import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees: {},
  };

  componentDidMount() {
    this.loadEmployees("?inc=name,gender,dob,picture&results=25");
  }

  loadEmployees = query => {
    API.search(query)
      .then(res => this.setState({ employees: res.results }))
      .catch(err => console.log(err));
  };

  removeEmployee = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ employees });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        {
          this.state.employees.map(employee => (
            <FriendCard
              removeEmployee={this.removeEmployee}
              id={employee.id}
              key={employee.id}
              name={employee.name}
              image={employee.image}
              occupation={employee.occupation}
              location={employee.location}
            />
          ))
        }
      </div>
    );
  }
}

export default App;


import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
