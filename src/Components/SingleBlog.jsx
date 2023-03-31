import React, { useState } from 'react';
const SingleBlog = ({blog,handleBookmark,markAsRead}) => {
    const {_id,image, authorName, authorImage,date,time,topic} = blog;
    const [isBookmarked, setIsBookmarked] = useState(false);

    
    return (
        <div>
            <img src={image} className="h-full w-full rounded-xl"/>
            <div className='flex justify-between items-center my-5'>
              <div className='flex justify-center items-center gap-4'>
              <img src={authorImage} className="h-14 w-14" />
              <div>
                <h3 className="text-lg font-bold">{authorName}</h3>
                <p className="text-sm text-gray-700">{date}</p>
              </div>
              </div>
              <div className='flex justify-center items-center gap-2'>
                <p className="text-md text-gray-700">{time} minute</p>
                <p className="text-sm">
                  <i onClick={() => {setIsBookmarked(true); handleBookmark(topic)}} 
                    className={isBookmarked ? "fa-solid fa-bookmark cursor-pointer" : "fa-regular fa-bookmark cursor-pointer"}
                    ></i>
                </p>
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4 leading-snug">{topic}</h2>
            <p className="text-sm text-gray-600">#beginners #programming</p>
            <span onClick={() => {markAsRead(time)}}
            className="inline-block text-md text-blue-700 font-semibold cursor-pointer underline mt-3">Mark as read</span>
            <hr className="my-8 text-gray-900 border-t-2 rounded-xl"/>
        </div>
    );
};

export default SingleBlog;