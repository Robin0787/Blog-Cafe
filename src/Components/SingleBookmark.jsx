import React from 'react';

const SingleBookmark = ({topicName}) => {
    return (
        <div className='rounded-md bg-white p-3 my-3'>
            <h2 className="text-md font-semibold">{topicName}</h2>
        </div>
    );
};

export default SingleBookmark;