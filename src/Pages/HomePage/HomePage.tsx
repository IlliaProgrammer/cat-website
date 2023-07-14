import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./HomePage.module.css"

const HomePage = () => {
    return (
        <div>
            <img className={styles.mainCat} src={require("./assets/mainCat.png")}/>
            <p className={styles.main}>every cat is my best friend</p>
            <p className={styles.text}>It has been scientifically proven that owning cats is good for our health and can decrease the occurrence of high blood pressure and other illnesses. Stroking a cat can help to relieve stress, and the feel of a purring cat on your lap conveys a strong sense of security and comfort.</p>
            <div className={styles.button}>
                <Link to='/breeds' className={styles.button_text}>find more</Link>
            </div>
        </div>
    );
}; 
export default HomePage;
