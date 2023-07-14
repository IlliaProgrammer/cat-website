import React, {useState} from 'react';
import Breed from '../../components/Breed/Breed';
import Loading from '../../components/Loading/Loading';
import { breedsApi } from '../../services/BreedsService';
import styles from "./BreedsPage.module.css"

const BreedsPage = () => {
    let [currentPage, setCurentPage] = useState(1)
    const {data: breeds, isLoading, error} = breedsApi.useFetchAllBreedsQuery({ limit: 4, page: currentPage })

    
    
    return (
        <div className={styles.wrapper}>
            <div>
                {
                    isLoading ? <div className={styles.loading}><Loading/></div> :
                    <div className={styles.breeds}>
                        {
                            currentPage === 2 ?  <div className={styles.button_container}><button onClick={()=>setCurentPage(currentPage = currentPage -1)} className={styles.paginateButton}>Prev</button></div> : ""
                        }
                
                        {
                        breeds && breeds.map(breed => (<Breed key={breed.id} breed={breed}/>))
                        }
                        {
                            currentPage === 1 ?  <div className={styles.button_container}><button onClick={()=>setCurentPage(currentPage = currentPage + 1)} className={styles.paginateButton}>Next</button></div> : ""
                        }
                    </div>
            }
            </div>
            <img className={styles.breedsCat} src={require("./assets/breedsCat.png")}/>
        </div>
    );
};

export default BreedsPage;