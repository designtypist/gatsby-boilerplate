import React from "react";

const Footer = () => (
  <footer className="bg-indigo-700 text-center text-white p-2">
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.com">Gatsby</a>
  </footer>
);

export default Footer;
