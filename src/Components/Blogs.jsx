
import React, { useEffect, useState } from 'react';
import BookmarksCart from './BookmarksCart';
import SingleBlog from './SingleBlog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('Data.json')
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);

    return (
        <section className='w-full grid md:grid-cols-main gap-4'>
            <article>
                {
                    blogs.map(blog => <SingleBlog key={blog._id} blog={blog} />)
                }
            </article>
                <BookmarksCart />
        </section>
    );
};

export default Blogs;