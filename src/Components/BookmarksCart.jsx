import React from 'react';
import SingleBookmark from './SingleBookmark';

const BookmarksCart = ({allBookmarks,readingTimes}) => {
    return (
        <article className=''>
            <div className='border border-blue-300 rounded-md bg-purple-50 text-blue-600 font-semibold flex justify-center items-center py-5 px-3 mb-4'>
                <p className="text-lg">Spent time on read : {readingTimes} min</p>
            </div>
            <div className='bg-gray-200 px-4 py-6 rounded-md'>
                <h2 className="text-xl font-semibold mb-4">Bookmarked Blogs : {allBookmarks.length}</h2>
                {
                    allBookmarks.map((topicName, index) => <SingleBookmark key={index} topicName={topicName}/>)
                }
            </div>
        </article>
    );
};

export default BookmarksCart;