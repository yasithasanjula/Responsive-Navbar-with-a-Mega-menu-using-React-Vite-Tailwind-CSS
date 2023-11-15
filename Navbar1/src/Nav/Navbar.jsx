import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <>
    <nav className='z-50'>
        <div className='h-10hv flex justify-between lg:py-5 px-20 py-20 border-b'>
            <div className='flex items-center flex-1'>
                <h2 className='text-3xl font-bold text-pink-500'>Beauty</h2>
            </div>
            <div>
                <ul className='flex gap-8 mr-16 text-[18px]'>
                    <Link to='/'>
                        <li className='hover:text-pink-400 transition border-b-2 border-white hover:border-pink-400 cursor-pointer '>Home</li>
                    </Link>
                    <Link to='/'>
                        <li className='hover:text-pink-400 transition border-b-2 border-white hover:border-pink-400 cursor-pointer '>Shop</li>
                    </Link>
                    <Link to='/'>
                        <li className='hover:text-pink-400 transition border-b-2 border-white hover:border-pink-400 cursor-pointer '>Blogs</li>
                    </Link>
                    <Link to='/'>
                        <li className='hover:text-pink-400 transition border-b-2 border-white hover:border-pink-400 cursor-pointer '>Pages</li>
                    </Link>
                        
                        {/*mega menu start*/}


                        <div className='group'>
                            <button className='text-pink-400'>Products</button>
                            <div className='hidden group-hover:flex flex-col absolute left-0 top-16 p-10 w-full bg-white z-20 text-black duration'>
                                <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                                    <div className='flex flex-col'>
                                        <h3 className='mb-4 text-2xl text-pink-400'>Beauty Products</h3>
                                        <a href="" className='hover:underline hover:text-pink-400'>Makeup Kit</a>
                                        <a href="" className='hover:underline hover:text-pink-400'>Lotion</a>
                                        <a href="" className='hover:underline hover:text-pink-400'>Body Wash</a>
                                        <a href="" className='hover:underline hover:text-pink-400'>Face Pack</a>
                                    </div>

                                    <div className='flex flex-col'>
                                        <h3 className='mb-4 text-2xl text-pink-400'>Beauty Products</h3>
                                        <a href="" className='hover:underline hover:text-pink-400'>Makeup Kit</a>
                                        <a href="" className='hover:underline hover:text-pink-400'>Lotion</a>
                                        <a href="" className='hover:underline hover:text-pink-400'>Body Wash</a>
                                        <a href="" className='hover:underline hover:text-pink-400'>Face Pack</a>
                                    </div>

                                    <div className='flex flex-col'>
                                        <h3 className='mb-4 text-2xl text-pink-400'>Beauty Products</h3>
                                        <a href="" className='hover:underline hover:text-pink-400'>Makeup Kit</a>
                                        <a href="" className='hover:underline hover:text-pink-400'>Lotion</a>
                                        <a href="" className='hover:underline hover:text-pink-400'>Body Wash</a>
                                        <a href="" className='hover:underline hover:text-pink-400'>Face Pack</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/*mega menu end*/}
                 
                    <Link to='/'>
                        <li className='hover:text-pink-400 transition border-b-2 border-white hover:border-pink-400 cursor-pointer '>Contact</li>
                    </Link>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar