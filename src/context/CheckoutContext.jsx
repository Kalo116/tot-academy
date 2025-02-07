import { createContext, useState, useContext } from 'react';

const CheckoutContext = createContext();

export function CheckoutProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product, productId) => {
        setCartItems((prevItems) => {
            const cartItemId = `${productId}-${Date.now()}`;
            return [...prevItems, { ...product, id: productId, cartItemId }];
        });
    };

    const removeFromCart = (cartItemId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.cartItemId !== cartItemId));
    };

    return (
        <CheckoutContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CheckoutContext.Provider>
    );
}

export const useCheckout = () => useContext(CheckoutContext);
