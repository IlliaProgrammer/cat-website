import React from 'react';
import styles from "./ContactPage.module.css"
import {FaMapMarkerAlt, FaPhone, FaEnvelope} from "react-icons/fa"

const ContactPage = () => {
    return (
    <div className={styles.wrapper}>
         <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.left_side}>
        <div className={`${styles.address} ${styles.details}`}>
          <FaMapMarkerAlt className={styles.icon}/>
          <div className={styles.topic}>Address</div>
          <div className={styles.text_one}>Ukraine Kyiv</div>
          <div className={styles.text_two}>Birendranagar 06</div>
        </div>
        <div className={`${styles.phone} ${styles.details}`}>
          <FaPhone className={styles.icon}/>
          <div className={styles.topic}>Phone</div>
          <div className={styles.text_one}>+0098 9893 5647</div>
          <div className={styles.text_two}>+0096 3434 5678</div>
        </div>
        <div className={`${styles.email} ${styles.details}`}>
          <FaEnvelope className={styles.icon}/>
          <div className={styles.topic}>Email</div>
          <div className={styles.text_one}>codinglab@gmail.com</div>
          <div className={styles.text_two}>info.codinglab@gmail.com</div>
        </div>
      </div>
      <div className={styles.right_side}>
        <div className={styles.topic_text}>Send us a message</div>
        <p className={styles.text}>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
      <form action="#">
        <div className={styles.input_box}>
          <input type="text" placeholder="Enter your name"/>
        </div>
        <div className={styles.input_box}>
          <input type="text" placeholder="Enter your email"/>
        </div>
        <div className={styles.button}>
          <input type="button" value="Send Now" />
        </div>
      </form>
    </div>
    </div>
  </div>
  <img className={styles.contactCat} src={require("./assets/contactCat.png")}/>
    </div>
   
    );
}; 
export default ContactPage;
