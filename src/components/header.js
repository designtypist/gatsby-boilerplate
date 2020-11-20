import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Header = ({ siteTitle }) => (
  <header className="bg-indigo-700 text-xl py-4">
    <div className="w-full mx-auto p-2">
      <h1 className="text-center m-0">
        <Link to="/" className="text-white uppercase">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
