import React from 'react';
import { NavLink } from 'react-router-dom';
import router from '../routes';
import styles from './Navigation.module.css'

const Navigation = () => (
  <ul>
    <li>
      <NavLink
        exact
        to={router.home}
        className={styles.NavLink}
        activeClassName={styles.NavLinkactive}
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        exact
        to={router.movies}
        className={styles.NavLink}
        activeClassName={styles.NavLinkactive}
      >
        Movies
      </NavLink>
    </li>
  </ul>
)
export default Navigation;
