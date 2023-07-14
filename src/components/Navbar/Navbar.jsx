import React from 'react';
import styles from "./Navbar.module.css"
import {FaPaw} from "react-icons/fa"
import { NavLink } from 'react-router-dom';
import { BLOGS_ROUTE, BREEDS_ROUTE, CONTACT_ROUTE, CREATE_ROUTE, HOME_ROUTE, QUARRIES_ROUTE } from '../../utils/consts';

const Navbar = () => {

    const navLinkStyles = ({ isActive }) => {
        return {
          color: isActive ? '#4A1E1E' : 'white'
        }
      }

    return (
        <div className={styles.wrapper}>
            <div className={styles.logoText}>meow <br/>love</div>
            <FaPaw className={styles.logo}/>
            <ul className={styles.navigation}>
                <li><NavLink to={HOME_ROUTE}  style={navLinkStyles} className={styles.link}>Home</NavLink></li>
                <li><NavLink to={BREEDS_ROUTE}  style={navLinkStyles} className={styles.link}>Breeds</NavLink></li>
                <li><NavLink to={BLOGS_ROUTE}  style={navLinkStyles} className={styles.link}>Blogs</NavLink></li>
                <li><NavLink to={CREATE_ROUTE}  style={navLinkStyles} className={styles.link}>Post</NavLink></li>
                <li><NavLink to={CONTACT_ROUTE}  style={navLinkStyles} className={styles.link}>Contact</NavLink></li>
            </ul>
        </div>
    );
};

export default Navbar;