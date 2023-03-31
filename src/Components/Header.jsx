import React from 'react';

const Header = () => {
    return (
        <nav className='flex justify-between items-center my-3'>
            <h1 className="text-3xl font-semibold">Blog Cafe</h1>
            <div>
                <a href="/home" className='text-sm text-black p-2 hover:text-blue-600 duration-300'>HOME</a>
                <a href="/SignUP" className='text-sm text-black p-2 hover:text-blue-600 duration-300'>SIGN UP</a>
                <a href="/login" className='text-sm text-black p-2 hover:text-blue-600 duration-300'>LOGIN</a>
            </div>
        </nav>
    );
};

export default Header;