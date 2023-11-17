import React from 'react';

function Employee(props) {
  const { name, role, experience } = props;

  return (
      <tr>
        <td>{name}</td>
        <td>{role}</td>
        <td>{experience} years</td>
      </tr>
  );
}

export default Employee;