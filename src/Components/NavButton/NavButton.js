import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./NavButton.css";
const NavButton = ({ path, title }) => {
  return (
    <>
      <Link to={path}>
        <Button className="button" variant="success">
          {title}
        </Button>
      </Link>
    </>
  );
};

export default NavButton;
