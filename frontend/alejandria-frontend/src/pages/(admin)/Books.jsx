import React, { useEffect, useState } from 'react';
import SideBar from '../../components/(admin)/SideBar';
import { listBooks } from '../../services/BookService';
import "./css/books.css";

const Books = () => {
    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        listBooks()
            .then(response => {
                setBookList(response.data);
            })
            .catch(error => {
                console.error('Error al obtener la lista de compras:', error);
            });
    }, []);

    const exportReport = () => {
        // Lógica para exportar el reporte aquí
        console.log("Exportando reporte...");
    };

    return (
        <>
            <div className="d-flex">
                <SideBar />
                <div className="container-fluid p-5 main">
                    <h1>Libros Publicados</h1>
                    <button className="btn btn-primary mb-3" onClick={exportReport}>Exportar Reporte</button>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Titulo</th>
                                    <th>Precio</th>
                                    <th>Descripción</th>
                                    <th>Autor</th>
                                    <th>Editorial</th>
                                    <th>Formato</th>
                                    <th>Vendedor</th>
                                    <th>Categorias</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookList.map(book => (
                                    <tr key={book.id}>
                                        <td>{book.title}</td>
                                        <td>{book.price}</td>
                                        <td>{book.description}</td>
                                        <td>{book.author}</td>
                                        <td>{book.publisher}</td>
                                        <td>{book.format}</td>
                                        <td>{book.seller.user_name}</td>
                                        <td>
                                            <ul>
                                                {book.categories.map(category => (
                                                    <li key={category.id}>{category.description}</li>
                                                ))}
                                            </ul>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Books;
