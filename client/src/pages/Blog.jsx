// Blog.jsx
import React from 'react';
import styles from './Blog.module.css';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Exploring the Future of AI',
      description: 'Artificial Intelligence is transforming the world. Let\'s dive into the future possibilities and current trends.',
      author: 'John Doe',
      date: 'October 14, 2024',
      image: 'ai-future.jpg',
    },
    {
      id: 2,
      title: 'The Rise of Quantum Computing',
      description: 'Quantum computing promises to revolutionize technology. Here\'s what you need to know about it.',
      author: 'Jane Smith',
      date: 'October 12, 2024',
      image: 'quantum-computing.jpg',
    },
    {
      id: 3,
      title: 'Blockchain Beyond Cryptocurrency',
      description: 'Discover the various applications of blockchain technology beyond just cryptocurrency.',
      author: 'Alice Johnson',
      date: 'October 10, 2024',
      image: 'blockchain.jpg',
    },
  ];

  return (
    <div className={styles.blogPage}>
      <div className="container py-5">
        <h1 className={styles.pageTitle}>Our Blog</h1>
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
