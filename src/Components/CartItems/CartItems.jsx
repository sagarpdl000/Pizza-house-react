import React, { useContext } from 'react'
import { ItemContext } from '../../Context/ItemContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const CartItems = () => {

    const{All_Item,cartItems,removeFromCart,getTotalCartAmount} = useContext(ItemContext);
  return (
    <div className=' mt-6 mb-12 mx:6 md:mx-20 font-poppins'>
        <h1 className='text-center text-3xl font-poppins text-red-500 font-bold'>Cart</h1>

        <div className='md:grid grid-cols-2 mt-10'>

            <div className=''>

                {All_Item.map((e)=>{

                      if(cartItems[e.id]>0)
                      {
                        return <div> <div className='grid grid-cols-6 mb-4 mt-4  place-items-center'>
                        <img src={e.image} alt="" className='h-12 w-12 rounded-full' />
                        <p className='font-bold'>{e.name}</p>
                        <p className='font-bold px-6'>{e.price}</p>
                        <p className='font-bold'>{cartItems[e.id]}</p>
                        <button className='border-2 bg-red-400 p-2' onClick={()=>{removeFromCart(e.id)}}><FontAwesomeIcon icon={faTrash} /></button>
                    </div> 
                    <hr/>
                    </div>
                      }

                      return null;

                })}

                <div>
                    <p className='font-bold mt-2 text-right mx-24'>Total price: Rs. {getTotalCartAmount()}</p>
                </div>

            </div>



            <div className='bg-gray-300 rounded-lg pl-2 pt-2 mx-4'>
                <h1 className='font-bold'>Checkout</h1>
                <h1 className='mt-2'>Phone</h1>
                <input type="text" className='border-2 rounded-lg'/>

                <h1 className='mt-2'>Street Address</h1>
                <input type="text" className='border-2 rounded-lg'/>

                <h1 className='mt-2'>City</h1>
                <input type="text"className='border-2 rounded-lg' />
                
                <h1 className='mt-2'>Country</h1>
                <input type="text"className='border-2 rounded-lg' /><br/>

                <button className='mt-6 bg-red-500 rounded-lg px-14 mb-2'>Pay Rs. {getTotalCartAmount()}</button>

            </div>

        </div>
    </div>
  )
}

export default CartItems