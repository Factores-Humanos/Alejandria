import React, { createContext, useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { addToCartApi, getCartItemsApi } from '../services/CartService';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const items = await getCartItemsApi(userId);
                setCart(items);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        fetchCartItems();
    }, []);

    const addToCart = async (book, userId) => {
        try {
            await addToCartApi(userId, book.id);
            setCart((prevCart) => [...prevCart, book]);
        } catch (error) {
            console.error('Error adding book to cart:', error);
        }
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
