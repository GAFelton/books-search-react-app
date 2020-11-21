import React from "react";
import { Navbar } from "react-bootstrap";
import "./style.css";

function Header() {
  return (
    <Navbar className="navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        React Books
      </a>
    </Navbar>
  );
}

export default Header;
