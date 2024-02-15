import React, { useContext } from 'react'
import img from '../Assets/Pizzabanner.jpg'
import { ItemContext } from '../../Context/ItemContext'
import Item from '../Items/Item'

const MenuCategory = () => {

    const {All_Item} = useContext(ItemContext)
  return (
    <div className='mt-6 mb-10 font-poppins'>
        <div className='mb-4'>
            <img src={img} alt="" className='w-full h-72 object-cover object-top' />
        </div>


        <h1 className='text-center text-4xl text-red-500'>Pizza</h1>

        <div className='md:grid grid-cols-3 mx-8 md:mx-16 mt-6'>
            {All_Item.map((item, i)=>{

                if (item.category === "pizza"){

                return (< 

                Item 
                key = {i}
                id = {Item.id}
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

        <h1 className='text-center text-4xl text-red-500 mt-8'>Burger</h1>

        <div className='md:grid grid-cols-3 mx-8 md:mx-16 mt-6'>
            {All_Item.map((item, i)=>{

                if(item.category === "burger"){

                    return (
                
                    <Item 
                    key = {i}
                    id = {item.id}
                    image = {item.image}
                    name = {item.name} 
                    description = {item.description} 
                    price = {item.price}

                    />
                    );
                }

                else{
                    return null;
                }


            })}
        </div>







    </div>
  )
}

export default MenuCategory