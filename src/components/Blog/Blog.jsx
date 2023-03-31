import React from 'react'; 
import './Blog.css'

const Blog = (props) => {
    const {name, guid, read_time, published_date, cover, author, title} = props.blog;
    return (
        <div>
            <div className="blog-container">
                <img className='cover-img' src={cover} alt="Cover" />
                <div>
                    <img className='author-img' src={author} alt="Author" />
                    <div className="blog-details">
                        <h5>Author Name: {name}</h5>
                        <p>{published_date} (5days ago)</p>
                        <div className="read-time">
                            <p>{read_time} min read</p>
                            <img className='bookmark-ico' src="https://cdn-icons-png.flaticon.com/512/25/25667.png" alt="" />
                        </div>
                    </div>
                    <h1>{title}</h1>
                    <p>#hashtag</p>
                    <a href="">Mark As Read</a>
                </div>
            </div>
        </div>
    );
};

export default Blog;