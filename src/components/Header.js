import React from "react";

// import PropTypes
import PropTypes from "prop-types";

const Header = ({ firstName, lastName, title, year }) => (
  <header>
    <h1 className="header-title">{title}</h1>
    <h4>Teacher: {firstName} {lastName}</h4>
    <p>Year: {year}</p>
  </header>
);

Header.defaultProps = {
  // default title
  title: 'Default title',

  // default firstName
  firstName: "Name",

  // the default input type: text
  type: 'text', 
}

Header.propTypes = {
  // required as a string
  title: PropTypes.string.isRequired,
}

export default Header;
