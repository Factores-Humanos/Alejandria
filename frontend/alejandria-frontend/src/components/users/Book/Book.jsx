import React, { useContext } from 'react';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { toast } from 'react-toastify';

import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import { addToCartApi } from '../../../services/CartService';

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

import './Book.css';


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

const Book = ({ book }) => {
    const auth = useAuthUser();


    const handleAddToCart = async () => {
        try {
            await addToCartApi(auth.id, book.id);
        } catch (error) {
            toast.success('Error agregando libro  al carrito:', error);
        }
        toast.success('Producto agregado al carrito');
    };

    return (
        <div className="book-card">
            <img src={bookCovers[book.id]} alt={book.title} className="book-cover" />
            <div className="book-info">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">{book.author}</p>
                <div className="book-price-container">
                    <p className="book-price">${book.price}</p>
                    <button className="add-to-cart" onClick={handleAddToCart}>
                        <FontAwesomeIcon icon={faCartPlus} />
                    </button>
                </div>
            </div>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
    }).isRequired,
};

export default Book;
