import React from "react";
import { Link, NavLink } from "react-router-dom";
import GoogleAuth from "../GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamy
      </Link>
      <NavLink to="/stream/new" className="item">
        Add New
      </NavLink>
      <NavLink to="/stream/edit" className="item">
        Edit
      </NavLink>
      <NavLink to="/stream/show" className="item">
        Show
      </NavLink>
      <NavLink to="/stream/delete" className="item">
        Delete
      </NavLink>
      <div className="right menu">
        <Link to="/" className="item">
          All Streamer
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
