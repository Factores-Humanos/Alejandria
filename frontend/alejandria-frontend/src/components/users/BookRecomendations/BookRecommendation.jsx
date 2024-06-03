import React, { useEffect, useState } from 'react';
import './bookRecommendation.css';
import { listBooks } from '../../../services/BookService';
import book1 from '../../../assets/books/book1.png';
import book2 from '../../../assets/books/book2.jpg';
import book3 from '../../../assets/books/book3.jpeg';

const BookRecommendation = () => {
    const [books, setBooks] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const bookData = await listBooks();
                const formattedBooks = bookData.slice(0, 3).map((book, index) => ({
                    id: index + 1,
                    title: book.title,
                    author: book.author,
                    description: book.description,
                }));
                setBooks(formattedBooks);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, []);

    const bookCovers = {
        1: book1,
        2: book2,
        3: book3,
        // Agrega más portadas si es necesario para otros IDs de libros
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % books.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + books.length) % books.length);
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="title-container">
                        <h2 className="title mb-5 fw-bold">Libros que te recomendamos:</h2>
                    </div>
                </div>
                <div className="col-md-8">
                    {books.length > 0 && (
                        <>
                            <div className="book-details">
                                <div className="book-cover">
                                    <img src={bookCovers[books[currentSlide].id]} alt={books[currentSlide].title} />
                                </div>
                                <div className="book-info">
                                    <h3>{books[currentSlide].title}</h3>
                                    <p>{books[currentSlide].author}</p>
                                    <p>{books[currentSlide].description}</p>
                                </div>
                            </div>

                            <div className="slide-indicators">
                                {books.map((book, index) => (
                                    <span key={book.id} className={`indicator ${index === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(index)}></span>
                                ))}
                            </div>

                            <div className="carousel-controls">
                                <button onClick={prevSlide}>&#10094;</button>
                                <button onClick={nextSlide}>&#10095;</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookRecommendation;
