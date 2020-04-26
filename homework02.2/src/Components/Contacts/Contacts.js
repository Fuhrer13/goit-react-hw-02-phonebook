// import React from "react";
// import PropTypes from "prop-types";
// import Contact from "../Contact/Contact";

// const Contacts = ({ contactList, onDelete }) => {
//   contactList.length > 0 && (
//     <ul>
//       {contactList().map((contact) => (
//         <Contact {...contact} key={contact.id} onDelete={onDelete} />
//       ))}
//     </ul>
//   );
// };

// Contacts.propTypes = {
//   contactList: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
//   onDelete: PropTypes.func.isRequired,
// };
// export default Contacts;

import React from "react";
import Contact from "../Contact/Contact";
import PropTypes from "prop-types";

const Contacts = ({ contactList, onDelete }) =>
  contactList.length > 0 && (
    <ul>
      {contactList.map((contact) => (
        <li key={contact.id}>
          <Contact {...contact} onDelete={() => onDelete(contact.id)} />
        </li>
      ))}
    </ul>
  );

Contacts.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contacts;
