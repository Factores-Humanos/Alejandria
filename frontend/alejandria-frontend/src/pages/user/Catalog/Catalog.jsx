import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { listBooks } from '../../../services/BookService';
import { listCategories } from '../../../services/CategoryService';
import Book from '../../../components/users/Book/Book';
import './Catalog.css';

const Catalog = () => {
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Todos');
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBooksAndCategories = async () => {
            try {
                const booksResponse = await listBooks();
                setBooks(booksResponse);
                setFilteredBooks(booksResponse);

                const categoriesResponse = await listCategories();
                setCategories(['Todos', ...categoriesResponse]);
            } catch (error) {
                console.error('Error fetching books or categories:', error);
            }
        };

        fetchBooksAndCategories();
    }, []);

    useEffect(() => {
        filterBooks();
    }, [selectedCategory, searchTerm, books]);

    const filterBooks = () => {
        let filtered = books;

        if (selectedCategory !== 'Todos') {
            filtered = filtered.filter(book =>
                book.categories.some(category =>
                    typeof category === 'string' ?
                        category.trim().toLowerCase() === selectedCategory.trim().toLowerCase() :
                        category.description === selectedCategory.description
                )
            );
        }

        if (searchTerm) {
            filtered = filtered.filter(book =>
                book.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredBooks(filtered);
    };

    const handleBookClick = (id) => {
        navigate(`/book/${id}`);
    };

    return (
        <div className="container catalog-page">
            <h2 className="title">Catálogo de libros</h2>
            <input
                type="text"
                className="search-bar-catalog"
                placeholder="Buscar un libro..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="categories">
                {categories.map((category) => (
                    <button
                        key={category.id || category}
                        className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {typeof category === 'object' ? category.description : category}
                    </button>
                ))}
            </div>
            <div className="books-container">
                <div className="row">
                    {filteredBooks.map(book => (
                        <div
                            className="col-lg-3 col-md-4 col-sm-6 col-xs-12"
                            key={book.id}
                            
                        >
                            <Book book={book} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Catalog;
