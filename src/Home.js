import { useState } from "react";
const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "Lorem ipsum...", author: "Mario", id: 1 },
    { title: "The Dojo Blog", body: "Lorem ipsum...", author: "Luigi", id: 2 },
    { title: "The Dojo Blog", body: "Lorem ipsum...", author: "Yoshi", id: 3 },
  ]);
  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
