import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar fixed-top bg-black justify-content-center px-5">
        <ul className="nav">
          <h3 className="text-danger mt-2">
            <i className="fa fa-building">Employee Management</i>
          </h3>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="addnewemployee">
              Add New Employee
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="employeelist">
              Employee List
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
