import React, { Component } from 'react';
import { EmployeeTable,Filter } from './components';
import './App.css';
import { employeeList } from './utils';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: employeeList,
      roleFilter: '',
      experienceFilter: ''
    };
  }

  handleRoleFilterChange = (value) => {
    this.setState({ roleFilter: value });
  };

  handleExperienceFilterChange = (value) => {
    this.setState({ experienceFilter: value });
  };

  render() {
    const { employees, roleFilter, experienceFilter } = this.state;

    const filteredEmployees = employees.filter((employee) => {
      if (roleFilter && !employee.role.toLowerCase().includes(roleFilter.toLowerCase())) {
        return false;
      }
      if (experienceFilter && employee.experience < experienceFilter) {
        return false;
      }
      return true;
    });

    return (
      <div>
        <h1 className='heading'>Employee List</h1>
        <Filter
          roleFilter={roleFilter}
          experienceFilter={experienceFilter}
          onRoleFilterChange={this.handleRoleFilterChange}
          onExperienceFilterChange={this.handleExperienceFilterChange}
        />
        <EmployeeTable employees={filteredEmployees} />
      </div>
    );
  }
}

export default App;