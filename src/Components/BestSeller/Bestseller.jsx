import React from 'react'
import Best_Seller from '../Assets/Bestseller'
import Item from '../Items/Item'


const Bestseller = () => {
  return (
    <div className='my-12 font-poppins'>
        <div className=' text-center'>
            <h1 className='text-xl text-gray-900 font-bold'>Check out</h1>
            <h1 className='text-4xl text-red-500 font-bold'>Our Best Seller</h1>
        </div>

        <div className='md:grid grid-cols-3 mx-8 md:mx-16 mt-6'>
            {Best_Seller.map((item , i)=>{

              return <Item key = {i} 
              id = {item.id} 
              image = {item.image} 
              name = {item.name} 
              description = {item.description} 
              price = {item.price} />
            })}
        </div>
    </div>
  )
}

export default Bestseller


// {Best_Seller.map((item, i) => {
//   // Check if the item's category is "Pizza"
//   if (item.category === "pizza") {
//     return (
//       <Item
//         key={i}
//         id={item.id}
//         image={item.image}
//         name={item.name}
//         description={item.description}
//         price={item.price}
//       />
//     );
//   } else {
//     // If the item's category is not "Pizza", return null (or you can skip the else block altogether)
//     return null;
//   }
// })}