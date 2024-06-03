import React from 'react';
import PropTypes from 'prop-types';
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
    return (
        <div className="col">
            <div className="book">
                <img src={bookCovers[book.id]} alt={book.title} className="book-cover" />
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">{book.author}</p>
                <p className="book-price">{book.price}</p>
                <button className="btn btn-primary add-to-cart">Agregar al carrito</button>
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
