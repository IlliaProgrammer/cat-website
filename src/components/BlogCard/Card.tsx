import React, { useEffect, useState } from 'react';
import { useActions } from '../../hooks/redux';
import { IPost } from '../../models/models';
import styles from './Card.module.css';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface IPostProp {
  post: IPost;
}

const Card: React.FC<IPostProp> = ({ post }) => {
  const [isClicked, setIsClicked] = useState(false);
  const { addFavourite, deleteFavourite } = useActions();

  useEffect(() => {
    const likedPosts = localStorage.getItem('likedPosts');
    if (likedPosts) {
      const parsedLikedPosts = JSON.parse(likedPosts);
      const isPostLiked = parsedLikedPosts.some(
        (likedPost: any) =>
          likedPost.title === post.title && likedPost.category === post.category
      );
      setIsClicked(isPostLiked);
    }
  }, [post]);

  const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addFavourite({ title: post.title, category: post.category });
    setIsClicked(true);
  };

  const deleteFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    deleteFavourite({ title: post.title, category: post.category });
    setIsClicked(false);
  };

  return (
    <article className={`${styles.vertical} ${styles.card}`}>
      
      <img
        className={styles.card__img}
        src={post.imgUrl}
        alt="Card Image"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = require("./assets/noImage.jpeg");
        }}
      />
      
      <div className={styles.card__content}>
        <div className={styles.card__type}>
          {post.category}
          <button
            onClick={isClicked ? deleteFromFavourite : addToFavourite}
            className={styles.button}
            style={{ color: isClicked ? 'red' : 'black' }}
          >
            {isClicked ? <AiFillHeart /> : <AiOutlineHeart />}
          </button>
        </div>
        <div className={styles.card__title}>{post.title}</div>
        <div className={styles.card__date}>{post.date}</div>
        <div className={styles.card__excerpt}>{post.content}</div>
      </div>
    </article>
  );
};

export default Card;