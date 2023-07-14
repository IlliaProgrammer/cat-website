import React from 'react';
import { ICustomer } from '../../models/models';

import styles from "./Customer.module.css"

interface ICustomerProps {
    cat: ICustomer;   
}

const Customer: React.FC<ICustomerProps> = ({cat}) => {
    return (
        <article className={styles.card}>
            <img
                className={styles.card__background}
                src={cat.imgUrl}
                alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
            />
            <div className={`${styles.card__content} ${styles.flow}`}>
                <div className={`${styles.card__content}--container ${styles.flow}`}>
                <h2 className={styles.card__title}>{cat.name}</h2>
                <p className={styles.card__description}>
                    {cat.breed}
                </p>
                </div>
            </div>
        </article>
    );
};

export default Customer;