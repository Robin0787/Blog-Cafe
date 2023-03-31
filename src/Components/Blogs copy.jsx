
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BookmarksCart from './BookmarksCart';
import SingleBlog from './SingleBlog';
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [allBookmarks, setAllBookmarks] = useState([]);
    const [readingTimes, setReadingTimes] = useState(0);
  
    useEffect(() => {
        fetch('Data.json')
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);
    
    function handleBookmark (blogTitle) {
        const isExists = allBookmarks.find(each => each === blogTitle);
        const allElements = [...allBookmarks, blogTitle];
        if(isExists) {
            toast('You have already Bookmarked this Blog');
        }
        // setAllBookmarks((prev) => [...prev, blogTitle]);
        setAllBookmarks(allElements.reverse());
    }

    function markAsRead (newTime) {
        setReadingTimes((prev) => prev + parseInt(newTime));
    }
    return (
        <>
        <ToastContainer position="top-center" autoClose={2000} pauseOnHover={false}/>
        <section className='w-full grid md:grid-cols-main gap-4'>
            <article>
                {
                    blogs.map(blog => <SingleBlog key={blog._id} blog={blog} handleBookmark={handleBookmark} markAsRead={markAsRead}/>)
                }
            </article>
                <BookmarksCart allBookmarks={allBookmarks} readingTimes={readingTimes}/>
        </section>
        </>
    );
};

export default Blogs;