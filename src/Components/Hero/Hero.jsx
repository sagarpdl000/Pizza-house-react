import React from 'react'
import img from '../Assets/Hero-bg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Hero = () => {
  return (
    <div className='md:grid grid-cols-2 mx-8 md:mx-24 mt-16 font-poppins '>

        <div className='md:mx-20 md:my-auto '>
            
            <h1 className='text-3xl font-bold'>What all you need<br/> in this <br/>life is <span className='text-red-500'>Pizza</span></h1>

            <p className='mt-2'>Indulge in Irresistible Pizzas, Handcrafted with Love and Fresh, Locally-Sourced Ingredients Every Time.</p>

            <button className='bg-red-500 px-4 py-2  rounded-2xl mt-3 uppercase text-white hover:scale-105 duration-300'>Order Now <FontAwesomeIcon icon={faArrowRight} /> </button>
           

        </div>

        <div className='mt-12 md:mt-0'>
            <img src={img} alt="" className='h-34 w-80 mx-auto' />
        </div>

    </div>
  )
}

export default Hero