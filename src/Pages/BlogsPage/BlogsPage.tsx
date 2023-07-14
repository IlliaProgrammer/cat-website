import React, { useState } from 'react';
import Card from "../../components/BlogCard/Card"
import { postsApi } from '../../services/PostService/PostsService';
import styles from "./BlogPage.module.css"

const categories = ["all", "Behaviour", "Breeds", "Nutrition", "Health"];

const BlogsPage = () => {
  const [pagination, setPagination] = useState(3);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { data: posts = [], error, isLoading } = postsApi.useFetchAllPostQuery({
    limit: pagination,
    category: selectedCategory === "all" ? undefined : selectedCategory,
  });

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleLoadMore = () => {
    setPagination(prevPagination => prevPagination + 3);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`${styles.tab} ${selectedCategory === category ? styles.activeTab : ''}`}
          >
            {category}
          </button>
        ))}
      </div>

      <section className={styles.cards}>
        {
          [...posts].map(post => <Card key={post.id} post={post} />)
        }
        <div className={styles.more}>
          {
            posts.length >= pagination && <button className={styles.load} onClick={handleLoadMore}>Load more</button>
          }
        </div>
      </section>
      <img className={styles.blogCat} src={require("./assets/blogCat.png")} alt="Blog Categories" />
    </div>
  );
};

export default BlogsPage;