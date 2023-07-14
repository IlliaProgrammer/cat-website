import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./NotFoundPage.module.css"

const NotFoundPage = () => {
  const navigate = useNavigate()
    return (
      <div>
      <section className={styles.error_container}>
        <span>4</span>
        <span><span className={styles.screen_reader_text}>0</span></span>
        <span>4</span>
      </section>
      <div className={styles.link_container}>
        <button onClick={() => navigate(-1)} className={styles.more_link}>Go back!</button>
      </div>
      <img className={styles.notfoundCat} src={require("./assets/notfoundCat.png")}/>
      </div>
     
      );
    }

export default NotFoundPage;