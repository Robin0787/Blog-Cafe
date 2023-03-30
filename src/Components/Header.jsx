import React from 'react';

const Header = () => {
    return (
        <nav className='flex justify-between items-center my-3'>
            <h1 className="text-3xl font-bold">Blog Cafe</h1>
            <img src="/public/images/author-4.png" className='h-14 w-14'/>
        </nav>
    );
};

export default Header;