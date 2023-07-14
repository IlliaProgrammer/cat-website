import React from 'react';
import { IBreed } from '../../models/models';
import styles from "./Breed.module.css"

interface IBreedItemProp{
    breed: IBreed;
}

const Breed: React.FC<IBreedItemProp> = ({breed}) => {
    const randomRotate = () => {
        const deg = Math.random() * (5 - -5) + -5;
        return `rotate(${deg}deg)`;
      };
    
    
      return (
        <div
          className={styles.card}
          style={{ transform: randomRotate() }}
        >
           <img src={breed.imageUrl} alt="Card" />
          <h2>{breed.breed}</h2>
          <p>{breed.shortInfo}</p>
        </div>
      );
    };
export default Breed;