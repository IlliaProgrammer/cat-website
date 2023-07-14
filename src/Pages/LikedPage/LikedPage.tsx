import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import styles from "./LikedPage.module.css"

const LikedPage = () => {
    const {favourites} = useAppSelector(state => state.post)

    if(favourites.length <= 0){
        return <div>No liked post yet</div>
    }

    return (
        <div className={styles.wrapper}>
            <ul className={styles.favs}>
                {
                    favourites.map(fav => (
                        <li className={styles.fav} key={fav}>{fav.title}<span className={styles.category}>({fav.category})</span></li>
                    )
                    )
                }
            </ul>
        </div>
    );
};

export default LikedPage;