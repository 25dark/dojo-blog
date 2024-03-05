import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "Lorem ipsum...", author: "Mario", id: 1 },
    { title: "The Dojo Blog", body: "Lorem ipsum...", author: "Luigi", id: 2 },
    { title: "The Dojo Blog", body: "Lorem ipsum...", author: "Yoshi", id: 3 },
  ]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title={"All Blogs!"} />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "Mario")}
        title={"Mario's Blogs!"}
      />
    </div>
  );
};

export default Home;
