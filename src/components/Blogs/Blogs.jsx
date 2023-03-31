import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/public/data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className='blogs-container'>
            <div>
                {
                    blogs.map(blog => <Blog></Blog>)
                }
                <h1>blogs post here</h1>
            </div>
            <div>
                <h1>blogs functionality here</h1>
            </div>
        </div>
    );
};

export default Blogs;