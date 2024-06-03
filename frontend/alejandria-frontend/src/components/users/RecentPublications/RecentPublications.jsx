import React, { useEffect, useState } from 'react';
import { listBooks } from '../../../services/BookService';
import Book from '../Book/Book';
import './recentPublications.css';

const RecentPublications = () => {
    const [books, setBooks] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const data = await listBooks();
                setBooks(data);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % books.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + books.length) % books.length);
    };

    const visibleBooks = books.slice(currentIndex, currentIndex + 4);

    return (
        <div className="container recent-publications">
            <h2 className="title">Recién publicados</h2>
            <div className="carousel-container">
                <button className="carousel-control prev" onClick={prevSlide}>&#10094;</button>
                <div className="row carousel-inner">
                    {visibleBooks.map((book) => (
                        <Book key={book.id} book={{ ...book, price: book.price.toString() }} />
                    ))}
                </div>
                <button className="carousel-control next" onClick={nextSlide}>&#10095;</button>
            </div>
        </div>
    );
};

export default RecentPublications;
