import React from 'react';
import styles from './Blog.module.css';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Techinical',
      description: 'I.R.I.S. Website',
      author: 'Techinical Team',
      date: 'SEPTEMBER,1 2024',
      image: 'website.jpg',
    },
    {
      id: 2,
      title: 'Research Project',
      description: 'Current research paper work in progress',
      author: 'Research Team',
      date: 'September 10, 2024',
      image: 'Research.jpg',
    },
    {
      id: 3,
      title: 'Automated Vehicle',
      description: 'Currenting work going on',
      author: 'Machanical project',
      date: 'September 10, 2024',
      image: 'vehicle.jpg',
    },
  ];

  return (
    <div className={styles.blogPage}>
      <div className="container py-5">
        <h1 className={styles.pageTitle}>Our Blog</h1>
        <p className={styles.pageTitle}>I.R.I.S. resent development and Ongoing Projects.</p>
        <div className="row">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-md-4">
              <div className={styles.blogCard}>
                <img src={post.image} alt={post.title} className={styles.blogImage} />
                <div className={styles.blogContent}>
                  <h3 className={styles.blogTitle}>{post.title}</h3>
                  <p className={styles.blogDescription}>{post.description}</p>
                  <div className={styles.blogMeta}>
                    <span>By {post.author}</span> | <span>{post.date}</span>
                  </div>
                  <a href="#" className={styles.readMoreButton}>Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
