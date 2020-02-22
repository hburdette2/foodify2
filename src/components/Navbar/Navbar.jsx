import React from "react";
import styles from "./Navbar.module.css";

import { Link } from 'react-router-dom';

const Navbar = props => {
  return (
    <nav className={styles.navbar}>
      <h1>
        <Link to="/">Foodify</Link>
      </h1>
      <ul>
        <li>
          <Link to="/restaurants">Restaurants</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;

