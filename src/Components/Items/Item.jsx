import React from 'react'

const Item = (props) => {
  return (
    <div>

        <div className='bg-gray-300 rounded-2xl text-center mx-2 mt-6 md:mt-0 px-2 md:px-0'>
            
            <div className='flex justify-center pt-2'>
            <img src={props.image} alt=""  className='h-36 w-36 rounded-full text-center'/>
            </div>
            

            <div className=''>
                <h1 className='font-bold text-xl my-2'>{props.name}</h1>
                <p className='my-3 text-gray-800'>{props.description}</p>
                <button className='bg-red-600 px-10 rounded-xl py-1 text-white uppercase mb-6 hover:scale-105 duration-300'>Add to cart Rs. {props.price}</button>
            </div>
        </div>

    </div>
  )
}

export default Item