import React, { Component } from 'react';
import EmployeeTable from './EmployeeTable';
import Filter from './Filter';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [
        {
          name: 'Ruwais',
          role: 'CEO',
          experience: 10
        },
        {
          name: 'Joy',
          role: 'Junior Devolper',
          experience: 1
        },
        {
          name: 'Lakshmi',
          role: 'HR',
          experience: 7
        },
        {
          name: 'Sudheer',
          role: 'Intern',
          experience: 1
        },
        {
          name: 'Alex',
          role: 'Junior Devolper',
          experience: 2
        },
        {
          name: 'Goutham',
          role: 'Intern',
          experience: 1
        },
        {
          name: 'Rithik',
          role: 'Senior Devolper',
          experience: 7
        },
        {
          name: 'Ashley',
          role: 'Intern',
          experience: 1
        },
        {
          name: 'Akshay',
          role: 'HR',
          experience: 8
        },
        {
          name: 'Akash',
          role: 'Content creator',
          experience: 3
        },
        {
          name: 'Sreejith',
          role: 'Project head',
          experience: 9
        },
        {
          name: 'Surumi',
          role: 'Intern',
          experience: 1
        },
        {
          name: 'Bopanna',
          role: 'Junior Devolper',
          experience: 2
        },
        {
          name: 'Diya',
          role: 'Intern',
          experience: 1
        },
        {
          name: 'Sravya',
          role: 'Content creator',
          experience: 1
        },
        {
          name: 'Suneethi',
          role: 'Intern',
          experience: 1
        },
        {
          name: 'Anoop',
          role: 'marketing head',
          experience: 6
        },
        {
          name: 'Febin',
          role: 'Creative head',
          experience: 5
        },
        {
          name: 'Suraj',
          role: 'Intern',
          experience: 1
        },
        {
          name: 'Malavika',
          role: 'Intern',
          experience: 1
        },
      ],
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