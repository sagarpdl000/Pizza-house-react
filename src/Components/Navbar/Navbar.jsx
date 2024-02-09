import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Navbar() {

    const [isMenuOpen , SetIsMenuOpen] = useState(false);

    const toggleMenu = () =>{
        SetIsMenuOpen(!isMenuOpen);
    }
    
    return (
        <div>
        <div className='md:flex justify-between mx-4 md:mx-24 mt-4 md:mt-5 font-bold font-poppins text-lg '>
        <div className='md:flex gap-8'>
            <h1 className='text-2xl font-bold text-red-500 
            uppercase '>Pizza house</h1>

            
            <ul className={`md:flex gap-6 items-center text-gray-600  bg-red-300 md:bg-white mt-2 md:mt-0 ${isMenuOpen ? 'block' : 'hidden'}`}>
                <li className='md:hover:border-b-2 hover:border-red-500'><Link to={'/home'}>Home</Link></li>
                <li className='md:hover:border-b-2 hover:border-red-500'><Link to={'/menu'}>Menu</Link></li>
                <li className='md:hover:border-b-2 hover:border-red-500'><Link to={'/about'}>About</Link></li>
                <li className='md:hover:border-b-2 hover:border-red-500'><Link to={'/contact'}>Contact</Link></li>
            </ul>
        </div>

        <div className={`md:flex items-center text-gray-600 gap-3 bg-red-300 md:bg-white ${isMenuOpen ? 'block' : 'hidden'}`}>

            <h1 className='hidden md:block'>Hello, Sagar</h1>
                <Link to={'/login'}> <button className='md:bg-red-500 md:px-6 rounded-2xl py-1 md:text-white duration-300 md:hover:scale-105 '>Login</button></Link>

            <div className='relative duration-300 md:hover:scale-105 my-1'>
               <Link to={'/cart'}> <p className='md:text-xl'> <FontAwesomeIcon icon={faCartShopping} /></p>
               <p className='absolute bottom-4 left-3 bg-red-500 rounded-full md:px-1 text-sm text-white'>0</p></Link> 
               
           </div>
           
          
           
        </div>
        <FontAwesomeIcon icon={faBars} className='absolute top-6 right-8 text-lg md:hidden cursor-pointer' onClick={toggleMenu}/>
    </div>
    </div>
    );
}

export default Navbar;








