import React from 'react'; 
import './Blog.css'

const Blog = (props) => {
    const {name, guid, read_time, published_date, cover, author, title} = props.blog;
    return (
        <div>
            <div className="blog-container">
                <img className='w-full cover-img mt-4' src={cover} alt="Cover" />
                <div className='flex items-center'>
                    <img className='author-img rounded m-4' src={author} alt="Author" />
                    <div className="blog-details flex justify-between items-center">
                        <div className="author">
                            <h3 className='text-xl bold'>{name}</h3>
                            <p>{published_date} (5days ago)</p>
                        </div>
                        <div className="read-time flex">
                            <p>{read_time} min read</p>
                            <img className='bookmark-ico' src="https://cdn-icons-png.flaticon.com/512/25/25667.png" alt="" />
                        </div>
                    </div>
                </div>
                <h1 className='text-4xl mt-4 mb-2'>{title}</h1>
                <p className='mb-1'>#beginners #programming</p>
                <a href="">Mark As Read</a>
            </div>
        </div>
    );
};

export default Blog;