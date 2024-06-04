import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { listBooks, addBook } from '../../../services/BookService';
import { listCategories } from '../../../services/CategoryService';
import { listFormats } from '../../../services/FormatService';

import NavBar from '../../../components/users/NavBar/NavBar'; // Importa el componente NavBar
import './publications.css'; // Importa el archivo de estilos CSS

const Publications = () => {
    const [books, setBooks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
        publisher: '',
        format: '',
        categories: '',
        price: '',
        sellerId: 15,
        description: '',
        pub_year: '',
        pages: '',
    });
    const [formats, setFormats] = useState([]);
    const [categories, setCategories] = useState([]);

    const loadBooks = async () => {
        try {
            const response = await listBooks();
            console.log('Lista de libros', response);
            setBooks(response.filter(book => book.seller.id === 15));
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    const loadFormats = async () => {
        try {
            const response = await listFormats();
            console.log('formatooos', response);
            setFormats(response);
        } catch (error) {
            console.error('Error fetching formats:', error);
        }
    };

    const loadCategories = async () => {
        try {
            const response = await listCategories();
            console.log('Categoriaaas', response);
            setCategories(response);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    useEffect(() => {
        loadBooks();
        loadFormats();
        loadCategories();
    }, []);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBook({ ...newBook, [name]: value });
    };

    const handleAddBook = async () => {
        try {
            console.log('Adding book:', newBook);
            await addBook(newBook);
            setNewBook({
                title: '',
                author: '',
                publisher: '',
                format: '',
                categories: '',
                price: '',
                sellerId: 15,
                description: '',
                pub_year: '',
                pages: '',
            });
            handleCloseModal();
            loadBooks();
        } catch (error) {
            console.error('Error adding book:', error);
        }
    };

    return (
        <>
            <div className="container mt-5 publications-container">
                <h1 className="mb-4 mt-4">Mis Publicaciones</h1>
                <Button className="btn btn-primary mb-4 fs-5" onClick={handleShowModal}>
                    Agregar nuevo libro
                </Button>
                <table className="table table-bordered shadow p-5">
                    <thead>
                        <tr className='fs-3'>
                            <th>Titulo</th>
                            <th>Autor</th>
                            <th>Editorial</th>
                            <th>Formato</th>
                            <th>Categorías</th>
                            <th>Precio</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody className='fs-4 p-4'>
                        {books.map(book => (
                            <tr key={book.id}>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.publisher}</td>
                                <td>{book.format}</td>
                                <td>{book.categories.map(category => category.description).join(', ')}</td>
                                <td>${book.price}</td>
                                <td>
                                    <button className="btn btn-primary me-2">Edit</button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar Nuevo Libro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBookTitle">
                            <Form.Label>Título</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={newBook.title}
                                onChange={handleInputChange}
                                placeholder="Ingrese el título del libro"
                            />
                        </Form.Group>
                        <Form.Group controlId="formBookAuthor">
                            <Form.Label>Autor</Form.Label>
                            <Form.Control
                                type="text"
                                name="author"
                                value={newBook.author}
                                onChange={handleInputChange}
                                placeholder="Ingrese el autor del libro"
                            />
                        </Form.Group>
                        <Form.Group controlId="formBookPublisher">
                            <Form.Label>Editorial</Form.Label>
                            <Form.Control
                                type="text"
                                name="publisher"
                                value={newBook.publisher}
                                onChange={handleInputChange}
                                placeholder="Ingrese la editorial del libro"
                            />
                        </Form.Group>
                        <Form.Group controlId="formBookDescription">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                type="text"
                                name="description"
                                value={newBook.description}
                                onChange={handleInputChange}
                                placeholder="Ingrese la descripción del libro"
                            />
                        </Form.Group>
                        <Form.Group controlId="formBookFormat">
                            <Form.Label>Formato</Form.Label>
                            <Form.Control
                                as="select"
                                name="format"
                                value={newBook.format}
                                onChange={handleInputChange}
                            >
                                <option value="">Seleccione un formato</option>
                                {formats.map((format, index) => (
                                    <option key={index} value={format.id}>
                                        {format.description}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formBookCategories">
                            <Form.Label>Categorías</Form.Label>
                            <Form.Control
                                as="select"
                                name="categories"
                                value={newBook.categories}
                                onChange={handleInputChange}
                            >
                                <option value="">Seleccione una categoría</option>
                                {categories.map((category, index) => (
                                    <option key={index} value={category.id}>
                                        {category.description}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formBookPrice">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control
                                type="text"
                                name="price"
                                value={newBook.price}
                                onChange={handleInputChange}
                                placeholder="Ingrese el precio del libro"
                            />
                        </Form.Group>
                        <Form.Group controlId="formBookPubYear">
                            <Form.Label>Año de publicación</Form.Label>
                            <Form.Control
                                type="text"
                                name="pub_year"
                                value={newBook.pub_year}
                                onChange={handleInputChange}
                                placeholder="Ingrese el año de publicación"
                            />
                        </Form.Group>
                        <Form.Group controlId="formBookPages">
                            <Form.Label>Cantidad de páginas</Form.Label>
                            <Form.Control
                                type="text"
                                name="pages"
                                value={newBook.pages}
                                onChange={handleInputChange}
                                placeholder="Ingrese la cantidad de páginas"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleAddBook}>
                        Agregar Libro
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Publications;
