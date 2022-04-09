import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({children}) {

    const [items, setItems] = useState([]);
    
    const addToCart = (name, price, sku) => {
        setItems((prevState) => [...prevState, {name, price, sku}]);
    }

    return (
        <CartContext.Provider value={{items, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;  