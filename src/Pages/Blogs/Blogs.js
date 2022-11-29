import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])


    return (
        <div>
            <h2 className="text-center text-4xl font-bold">My Blogs</h2>
            {
                blogs.map(blog => <Blog
                key={blog._id}
                blog={blog}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;