import React, { useState } from "react";
import thumbnailImg from "./../assets/blog/blog.jpg";

const otherBlogs = [
  {
    date: "22 April 2024",
    author: "Admin",
    title: "Finances And Accounting Are Despite",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    link: "/blog/1",
  },
  {
    date: "20 April 2024",
    author: "John Doe",
    title: "The Future of Remote Work",
    content:
      "As technology advances, the potential for remote work continues to grow, offering new opportunities for businesses and employees.",
    link: "/blog/2",
  },
  {
    date: "18 April 2024",
    author: "Jane Smith",
    title: "Marketing Strategies for 2024",
    content:
      "Explore the latest marketing strategies and trends that can help your business thrive in the coming year.",
    link: "/blog/3",
  },
];

function Blog() {
  const [activeBlog, setActiveBlog] = useState(1);

  return (
    <div className="blog">
      <div className="container">
        <div className="blog-container">
          <div className="blog-header">
            <h5>My Latest Blogs</h5>
            <h2>Mastering The Art Of Efficient Movement</h2>
          </div>
          <div className="blog-content">
            <div className="featured-blog">
              <img
                src={thumbnailImg}
                alt="Blog thumbnail"
                className="thumbnail"
              />
              <div className="blog-info">
                <div className="blog-date">
                  <span>25</span> April
                </div>
                <h4>When A Small Business Is Just Starting Out</h4>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
                <a href="/" className="read-more">
                  Read More
                </a>
              </div>
            </div>
            <div className="other-blogs">
              {otherBlogs.map((blog, index) => (
                <div
                  className={`blog-card ${
                    index === activeBlog ? "active" : ""
                  }`}
                  key={index}
                  onClick={() => setActiveBlog(index)}
                >
                  <p className="blog-meta">
                    <span className="line"></span> {blog.date} - By{" "}
                    <span className="blog-author">{blog.author}</span>
                  </p>
                  <h4>{blog.title}</h4>
                  <p>{blog.content}</p>
                  <a href={blog.link} className="read-more">
                    Read More
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
