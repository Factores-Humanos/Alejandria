import React, { useEffect, useState } from 'react';
import { listBooks, approveBook } from '../../../services/BookService';
import SideBar from '../../../components/admins/SideBar/SideBar';
import "./books.css";

const Books = () => {
    const [bookList, setBookList] = useState([]);
    const [filter, setFilter] = useState('all');

    const loadBooks = async () => {
        try {
            const response = await listBooks();
            // Ordena los libros por created_date
            const sortedBooks = response.sort((a, b) => new Date(b.created_date) - new Date(a.created_date));
            setBookList(sortedBooks);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    useEffect(() => {
        loadBooks();
    }, []);

    const handleApprove = async (bookId) => {
        try {
            await approveBook(bookId);
            loadBooks();
        } catch (error) {
            console.error('Error approving book:', error);
        }
    };

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const filteredBooks = bookList.filter(book => {
        if (filter === 'all') return true;
        if (filter === 'active') return book.status === 'activo';
        if (filter === 'inactive') return book.status === 'inactivo';
        return true;
    });

    return (
        <>
            <div className="d-flex">
                <SideBar />
                <div className="container-fluid p-5 main">
                    <h1>Libros Publicados</h1>
                    <button className="btn btn-primary mb-3" onClick={() => print('Exportando reporte...')}>
                        Exportar Reporte
                    </button>
                    <div className="filters mb-3">
                        <select className="form-select" value={filter} onChange={handleFilterChange}>
                            <option value="all">Todos</option>
                            <option value="active">Activos</option>
                            <option value="inactive">Inactivos</option>
                        </select>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
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
                                    <th>Estado</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredBooks.map(book => (
                                    <tr key={book.id} >
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
                                        <td>{book.status  === 'inactive' ? "Inactivo" : "Activo"}</td>
                                        <td>
                                            {book.status === 'inactive' && (
                                                <button
                                                    className="btn btn-success"
                                                    onClick={() => handleApprove(book.id)}
                                                >
                                                    Aprobar
                                                </button>
                                            )}
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
