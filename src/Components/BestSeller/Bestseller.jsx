import React, { useContext } from 'react'
import { ItemContext } from '../../Context/ItemContext'
import Item from '../Items/Item'



const Bestseller = () => {
  const {All_Item} = useContext(ItemContext)
  return (
    <div className='my-12 font-poppins'>
        <div className=' text-center'>
            <h1 className='text-xl text-gray-900 font-bold'>Check out</h1>
            <h1 className='text-4xl text-red-500 font-bold'>Our Best Seller</h1>
        </div>

        <div className='md:grid grid-cols-3 mx-8 md:mx-16 mt-6'>
        {All_Item.map((item, i)=>{

          if (item.category === "pizza"){

             return (< 

            Item 
            key = {i}
            id = {item.id}
            image = {item.image} 
            name = {item.name} 
            description = {item.description} 
            price = {item.price}
            />)

          }

          else{
              return null;
          }


        })}

            
          
        </div>
    </div>
      )
    }

export default Bestseller


