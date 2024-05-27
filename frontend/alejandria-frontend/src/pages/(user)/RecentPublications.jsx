// RecentPublications.js
import React, { useEffect, useState } from 'react';

import image1 from '../../assets/portada.jpeg';

import { listBooks } from '../../services/BookService';

import book1 from '../../assets/books/book1.png';
import book2 from '../../assets/books/book2.jpg';
import book3 from '../../assets/books/book3.jpeg';
import book4 from '../../assets/books/book4.jpeg';
import book5 from '../../assets/books/book5.jpeg';
import book6 from '../../assets/books/book6.webp';
import book7 from '../../assets/books/book7.webp';
import book8 from '../../assets/books/book8.jpeg';
import book9 from '../../assets/books/book9.jpeg';
import book10 from '../../assets/books/book10.jpeg';

import './css/recentPublications.css';

const RecentPublications = () => {
    const [apiBooks, setApiBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await listBooks();
                setApiBooks(response.data); // Suponiendo que la respuesta contiene los datos de los libros en su propiedad "data"
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % apiBooks.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + apiBooks.length) % apiBooks.length);
    };

    const visibleBooks = apiBooks.slice(currentIndex, currentIndex + 4);

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

    return (
        <div className="container recent-publications ">
            <h2 className='title' >Recien publicados</h2>
            <div className="carousel-container">
                <button className="carousel-control prev" onClick={prevSlide}>&#10094;</button>
                <div className="row carousel-inner">
                    {visibleBooks.map((book) => (
                        <div className="col" key={book.id}>
                            <div className="book">
                                <img src={bookCovers[book.id]} alt={book.title} className="book-cover" />
                                <h3 className="book-title">{book.title}</h3>
                                <p className="book-author">{book.author}</p>
                                <p className="book-price">{book.price}</p>
                                <button className="btn btn-primary add-to-cart">Agregar al carrito</button>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-control next" onClick={nextSlide}>&#10095;</button>
            </div>
        </div>
    );
};

export default RecentPublications;