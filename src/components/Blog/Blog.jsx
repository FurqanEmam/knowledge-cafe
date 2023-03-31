import React from 'react'; 
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className="blog-container">
                <img src="" alt="Cover" />
                <div>
                    <img src="" alt="Author" />
                    <div className="blog-details">
                        <h5>Author Name</h5>
                        <p>Date of blog</p>
                        <div className="read-time">
                            <p>timing to read</p>
                            <p>icon for bookmark</p>
                        </div>
                    </div>
                    <h1>Blog title goes here...</h1>
                    <p>#hashtag</p>
                    <a href="">Mark As Read</a>
                </div>
            </div>
        </div>
    );
};

export default Blog;