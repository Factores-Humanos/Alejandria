import React, { useState, useEffect } from 'react';

import { listBooks } from '../../../services/BookService';

import NavBar from '../../../components/users/NavBar/NavBar'; // Importa el componente NavBar with correct capitalization

import './publications.css'; // Importa el archivo de estilos CSS

const Publications = () => {
    const [books, setBooks] = useState([]);

    const loadBooks = async () => {
        try {
            const response = await listBooks();
            setBooks(response.data.filter(book => book.seller.id === 15));
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    useEffect(() => {
        loadBooks();
    }, []);

    return (
        <>
            <NavBar />
            <div className="container mt-5">
                <h1 className="mb-4 mt-4">Mis Publicaciones</h1>
                <button className="btn btn-primary mb-4 fs-5">Agregar nuevo libro</button>
                <table className="table table-bordered shadow p-5"> {/* Agrega clases de Bootstrap y una clase 'shadow' para dar sombra */}
                    <thead>
                        <tr className='fs-3' >
                            <th>Titulo</th>
                            <th>Autor</th>
                            <th>Editorial</th>
                            <th>Formato</th>
                            <th>Categorias</th>
                            <th>Precio</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody className='fs-4 p-4' >
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
        </>
    );
};

export default Publications;
