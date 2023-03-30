import React from 'react';
import SingleBookmark from './SingleBookmark';

const BookmarksCart = () => {
    return (
        <article className=''>
            <div className='border border-blue-300 rounded-md bg-purple-50 text-blue-600 font-semibold flex justify-center items-center py-5 px-3 mb-4'>
                <p className="text-lg">Spent time on read : {114} min</p>
            </div>
            <div className='bg-gray-200 px-4 py-6 rounded-md'>
                <h2 className="text-xl font-semibold mb-4">Bookmarked Blogs : {5}</h2>
                <SingleBookmark />
                <SingleBookmark />
                <SingleBookmark />
            </div>
        </article>
    );
};

export default BookmarksCart;