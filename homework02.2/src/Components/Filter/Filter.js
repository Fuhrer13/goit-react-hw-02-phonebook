import React from "react";
import PropTypes from "prop-types";

const Filter = ({ filter, changeFilter }) => {
  return (
    <>
      <h2>Contacts</h2>
      <label htmlFor="filter">
        Find contacts by name
        <input
          type="text"
          id={filter}
          name="filter"
          value={filter}
          onChange={changeFilter}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;
