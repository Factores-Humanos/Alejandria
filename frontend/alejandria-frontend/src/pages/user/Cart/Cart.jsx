import React, { useEffect, useState } from 'react';

import useAuthUser from 'react-auth-kit/hooks/useAuthUser';

import { getCartItemsApi } from '../../../services/CartService';


import book1 from '../../../assets/books/book1.png';
import book2 from '../../../assets/books/book2.jpg';
import book3 from '../../../assets/books/book3.jpeg';
import book4 from '../../../assets/books/book4.jpeg';
import book5 from '../../../assets/books/book5.jpeg';
import book6 from '../../../assets/books/book6.webp';
import book7 from '../../../assets/books/book7.webp';
import book8 from '../../../assets/books/book8.jpeg';
import book9 from '../../../assets/books/book9.jpeg';
import book10 from '../../../assets/books/book10.jpeg';

import './Cart.css';
const bookCovers = {
    1: book1,
    2: book2,
    3: book3,
    4: book4,
    5: book5,
    6: book6,
    7: book7,
    8: book8,
    9: book9,
    10: book10,
};


const Cart = () => {
    const [cart, setCart] = useState([]);
    const auth = useAuthUser();


    useEffect(() => {
        if (auth) {
            const fetchCartItems = async () => {
                try {
                    const cartResponse = await getCartItemsApi(auth.id);
                    setCart(cartResponse);
                } catch (error) {
                    console.error('Error fetching cart: ', error);
                }
            };
            fetchCartItems();
        }
    }, [auth]);

    const calculateTotal = () => {
        return cart.books.reduce((total, book) => total + parseInt(book.price), 0);
    };

    const handleCheckout = () => {
        // Simulación del proceso de pago
        alert('Pago realizado con éxito. ¡Gracias por tu compra!');
        setCart([]); // Limpia el carrito después del pago
    };

    if (cart.length === 0) {
        return <div className="cart-empty">Tu carrito está vacío</div>;
    }

    return (
        <div className="cart-container">
            <h1>Carrito de Compras</h1>
            {cart.books.map((book, index) => (
                <div key={index} className="cart-item">
                    <img src={bookCovers[book.id]} alt={book.title} className="cart-item-cover" />
                    <div className="cart-item-info">
                        <h3 className="cart-item-title">{book.title}</h3>
                        <p className="cart-item-author">{book.author}</p>
                        <p className="cart-item-price">COP {book.price}</p>
                    </div>
                </div>
            ))}
            <div className="cart-total">
                Total: COP {calculateTotal().toLocaleString('es-CO', { minimumFractionDigits: 2 })}
            </div>
            <div className="cart-checkout">
                <button onClick={handleCheckout}>Pagar</button>
            </div>
        </div>
    );
};

export default Cart;