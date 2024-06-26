import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    interface LinkClassProps {
        isActive: boolean;
    };
    
    const linkClass = ({ isActive }: LinkClassProps): string =>
        isActive ? 'bg-black text-white hover:bg-gray-800 hover:text-white rounded-md px-3 py-2 mr-5'
        : 'text-black hover:bg-gray-800 hover:text-white rounded-md px-3 py-2 mr-5';

  return (
    <div className='h-full mt-2'>
        <nav className='text-center mx-auto'>
            <NavLink className={linkClass} to='/'>Home</NavLink>
            <NavLink className={linkClass} to='/about'>About</NavLink>
            <NavLink className={linkClass} to='/blog'>Blog</NavLink>
            <NavLink className={linkClass} to='/portfolio'>Portfolio</NavLink>
            <NavLink className={linkClass} to='/contact'>Contact</NavLink>
        </nav>
    </div>
  )
}

export default NavBar