import React, { createContext } from 'react';
import collection from '../Components/Assets/collections.js'

const ShopContext = createContext([])

const ShopProvider = ({children}) => {
    // const value = {
    //     collection,
    // };

    return (
        <ShopContext.Provider value={collection}>
            {children}
        </ShopContext.Provider>
    )
}


export {ShopContext, ShopProvider}