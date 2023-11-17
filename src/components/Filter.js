import React from 'react';

function Filter(props) {
  const { roleFilter, experienceFilter, onRoleFilterChange, onExperienceFilterChange } = props;

  return (
    <div>
      <label htmlFor="role-filter">Filter by Role:</label>
      <input
        type="text"
        id="role-filter"
        value={roleFilter}
        onChange={(e) => onRoleFilterChange(e.target.value)}
      />
      <label htmlFor="experience-filter">Filter by Experience:</label>
      <input
        type="text"
        id="experience-filter"
        value={experienceFilter}
        onChange={(e) => onExperienceFilterChange(e.target.value)}
      />
    </div>
  );
}

export default Filter;