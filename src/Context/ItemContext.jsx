import React, { createContext, useState } from "react";
import All_Item from "../Components/Assets/All_Item";



export const ItemContext = createContext(null);

const getDefaultCart = () =>{

    let cart = {};
    for (let index=0; index < All_Item.length; index++) {
        cart[index] = 0;

    }
    return cart;
}



const ItemContextProvider = (props) =>{

    const [cartItems, setCartItems] = useState(getDefaultCart())

    const contextValue = {All_Item, cartItems};

    console.log(cartItems);






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



