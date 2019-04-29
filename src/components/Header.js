import React from "react";
import PropTypes from "prop-types";

const Header = ({ firstName, lastName, title, year }) => (
  <header>
    <h1 className="header-title">{title}</h1>
    <h4>Teacher: {firstName} {lastName}</h4>
    <p>Year: {year}</p>
  </header>
);

Header.defaultProps = {
  title: 'Default title',
  firstName: "Name",
  type: 'text', /* this makes it so that the default input type is text */
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header;
