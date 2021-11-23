import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

const NavBar = () => {
  return (
    <div className={styles.navbarContainer}>
      <ul className={styles.navbarMenu}>
        <NavLink to="/home" style={{ textDecoration: 'none' }}>
          <li>Home</li>
        </NavLink>
        <NavLink to="/patients" style={{ textDecoration: 'none' }}>
          <li>Patients</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default NavBar;