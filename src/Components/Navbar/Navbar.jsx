import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='flex justify-between mx-24 mt-5 font-bold font-poppins text-lg '>
        <div className='flex gap-8 '>
            <h1 className='text-2xl font-bold text-red-500 
            uppercase '>Pizza house</h1>
            <ul className='flex gap-6 items-center text-gray-600'>
                <li className='hover:border-b-2 hover:border-red-500'><Link to={'/home'}>Home</Link></li>
                <li className='hover:border-b-2 hover:border-red-500'><Link to={'/menu'}>Menu</Link></li>
                <li className='hover:border-b-2 hover:border-red-500'><Link to={'/about'}>About</Link></li>
                <li className='hover:border-b-2 hover:border-red-500'><Link to={'/contact'}>Contact</Link></li>
            </ul>
        </div>

        <div className='flex items-center text-gray-600 gap-3'>

            <h1>Hello, Sagar</h1>
                <Link to={'/login'}> <button className='bg-red-500 px-6 rounded-2xl py-1 text-white duration-300 hover:scale-105'>Login</button></Link>

            <div className='relative duration-300 hover:scale-105'>
               <Link to={'/cart'}> <p className='text-xl'> <FontAwesomeIcon icon={faCartShopping} /></p>
               <p className='absolute bottom-4 left-3 bg-red-500 rounded-full px-1 text-sm text-white'>0</p></Link> 
           </div>
           
        </div>
    </div>
  )
}

export default Navbar