import React from 'react';

const Header = () => {
    return (
        <nav className='flex justify-between items-center my-3'>
            <h1 className="text-3xl font-semibold">Blog Cafe</h1>
            <div className='flex justify-center items-center gap-3'>
                <p className='text-sm text-black cursor-pointer p-2 hover:text-blue-600 duration-300'>HOME</p>
                <p className='text-sm text-black cursor-pointer p-2 hover:text-blue-600 duration-300'>SIGN UP</p>
                <p className='text-sm text-black cursor-pointer p-2 hover:text-blue-600 duration-300'>LOGIN</p>
            </div>
        </nav>
    );
};

export default Header;