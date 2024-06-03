import React, { useEffect, useState } from 'react';
import { listBooks } from '../../../services/BookService'; // Ajusta la importación según tu estructura
import { listCategories } from '../../../services/CategoryService'; // Ajusta la importación según tu estructura
import Book from '../../../components/users/Book/Book';
import './Catalog.css';

const Catalog = () => {
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null); // Cambio aquí
    const [searchTerm, setSearchTerm] = useState('');

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
    }, [selectedCategory, searchTerm, books]); // Agregado books como dependencia

    const filterBooks = () => {
        let filtered = books;

        if (selectedCategory && selectedCategory !== 'Todos') {
            filtered = filtered.filter(book =>
                book.categories.some(category =>
                    typeof category === 'string' ?
                        category.trim().toLowerCase() === selectedCategory.trim().toLowerCase() :
                        category.description === selectedCategory.description // Corregido aquí
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

    return (
        <div className="container catalog-page">
            <h2 className="title">Catálogo de libros</h2>
            <input
                type="text"
                className="search-bar"
                placeholder="Buscar un libro..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="categories">
                {categories.map((category) => (
                    <button
                        key={category.id || category} // Cambiado temporalmente para que funcione, idealmente debería usar category.id si existe
                        className={`category-button ${selectedCategory && selectedCategory.description === (typeof category === 'object' ? category.description : category) ? 'active' : ''}`} // Corregido aquí
                        onClick={() => setSelectedCategory(typeof category === 'object' ? category : category)} // Corregido aquí
                    >
                        {typeof category === 'object' ? category.description : category}
                    </button>
                ))}
            </div>
            <div className="books-container">
                <div className="row">
                    {filteredBooks.map(book => (
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={book.id}>
                            <Book book={book} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Catalog;
