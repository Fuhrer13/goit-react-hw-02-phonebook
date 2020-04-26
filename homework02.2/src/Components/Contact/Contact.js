import React from "react";
import PropTypes from "prop-types";

const Contact = ({ name, number, onDelete, id }) => {
  return (
    <>
      {name}: {number}
      <button onClick={onDelete}>Delete</button>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
