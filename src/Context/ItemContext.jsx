import React, { createContext, useState, useEffect} from "react";
import All_Item from "../Components/Assets/All_Item";



export const ItemContext = createContext(null);



const getDefaultCart = () =>{

    let cart = {};
    for (let index = 0; index < All_Item.length+1; index++) {
        cart[index] = 0;

    }
    return cart;
}



const ItemContextProvider = (props) =>{

    const [cartItems, setCartItems] = useState(getDefaultCart())

    

    

    const addToCart = (itemId) =>{
        
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        
    }


    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]); 


    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for (const itemId in cartItems)
        {
            if(cartItems[itemId]>0){
                let itemInfo = All_Item.find((item)=>item.id ===Number(itemId));
                totalAmount += itemInfo.price * cartItems[itemId];
            }
            
        }
        return totalAmount;
    }

    const getTotalCartItem = ()=>{

        let totalItem = 0;
        for (const item in cartItems){
            if(cartItems[item] > 0){

                totalItem+= cartItems[item];

            }

        }
        return totalItem;
    }

    





    const contextValue = {All_Item, cartItems,addToCart,removeFromCart,getTotalCartAmount,getTotalCartItem};

   
    return (
        <ItemContext.Provider value={contextValue}>

        {props.children}

        </ItemContext.Provider>
    )

}


export default ItemContextProvider;
























// Notes:---------------------For my understanding only----------


// step-1---------------------------------------------------

//import React, { createContext } from "react";

// export const ItemContext = createContext(null); //








//Step-2 item context provider------------------------------

// const ItemContextProvider = (props) =>{

//     const contextValue = { Here we will provide the data or function which we want to access anywhere}

// }






//Step-3 Return item context value through item context provider------------------------------


// const ItemContextProvider = (props) =>{

//     const contextValue = {All_Item}

//     return (
//         <ItemContext.Provider value={contextValue}>

//         {props.children}

//         </ItemContext.Provider>
//     )

// }



// Step-4-----------------------------------------
// export default ItemContextProvider;



// import React, { createContext } from "react";
// import All_Item from "../Components/Assets/All_Item";



// export const ItemContext = createContext(null);


// const ItemContextProvider = (props) =>{

//     const contextValue = {All_Item}

//     return (
//         <ItemContext.Provider value={contextValue}>

//         {props.children}

//         </ItemContext.Provider>
//     )

// }


// export default ItemContextProvider;








// Step-5-------------------------------------------------

// wrap the context provider in index.js



