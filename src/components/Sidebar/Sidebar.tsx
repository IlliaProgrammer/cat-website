import React, { useState } from 'react';
import {BsPeople, BsFillHeartFill, BsChevronDown, BsFillHouseDoorFill} from "react-icons/bs"
import {AiOutlineAlignCenter} from "react-icons/ai"
import styles from "./Sidebar.module.css"
import { BLOGS_ROUTE, CONTACT_ROUTE, HOME_ROUTE, LIKED_ROUTE } from '../../utils/consts';
import { Link } from 'react-router-dom';
import { customersApi } from '../../services/CustomerService';
import Customer from '../Customer/Customer';

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const {data: cats, isLoading, error} = customersApi.useFetchAllCustomersQuery("")
  
    return (
      <div>
        <div className={styles.icons}>
        <Link to={LIKED_ROUTE} className={styles.icon}> <BsFillHeartFill /></Link>
        <Link to={CONTACT_ROUTE} className={styles.icon}> <BsPeople /></Link>
        <Link to={HOME_ROUTE} className={styles.icon}> <BsFillHouseDoorFill /></Link>
        <Link to={BLOGS_ROUTE} className={styles.icon}> <AiOutlineAlignCenter /></Link>
        </div>
        <div
          className={`${styles.toggle} ${open ? styles.flipped : ''}`}
          onClick={() => setOpen(!open)}
        >
          <BsChevronDown />
        </div>
        {open ? (
          <ul className={styles.flipCard}>
            {cats && cats.map((cat) => (
              <li className={styles.cat}>
                  <Customer cat={cat}/>
              </li>
            
            ))}
          </ul>
        ) : (
          <div className={styles.customersTag}>Our customer's cats</div>
        )}
      </div>
    );
  };

export default Sidebar;