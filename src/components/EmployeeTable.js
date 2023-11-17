import React from 'react';
import Employee from './Employee';

function EmployeeTable(props) {
  const { employees } = props;

  return (
    <table className='table'>
      <thead>
        <tr>
          <th className='employee-name'>Employee Name</th>
          <th className='role'>Role</th>
          <th className='experience'>Experience</th>
        </tr>
      </thead>
      <tbody className='table-content'>
        {employees.map((employee, index) => (
          <Employee key={index} name={employee.name} role={employee.role} experience={employee.experience} />
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;