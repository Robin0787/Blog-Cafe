
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BookmarksCart from './BookmarksCart';
import SingleBlog from './SingleBlog';
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [allBookmarks, setAllBookmarks] = useState([]);
  
    useEffect(() => {
        fetch('Data.json')
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);
    function handleBookmark (topic) {
        const isExists = allBookmarks.find(each => each === topic);
        if(isExists) {
            toast('Already Bookmarked');
        } 
        else {
            setAllBookmarks((prev) => [...prev, topic]);
        }
    }
    return (
        <>
        <ToastContainer position="top-center" autoClose={3000} pauseOnHover={false}/>
        <section className='w-full grid md:grid-cols-main gap-4'>
            <article>
                {
                    blogs.map(blog => <SingleBlog key={blog._id} blog={blog} handleBookmark={handleBookmark}/>)
                }
            </article>
                <BookmarksCart allBookmarks={allBookmarks}/>
        </section>
        </>
    );
};

export default Blogs;