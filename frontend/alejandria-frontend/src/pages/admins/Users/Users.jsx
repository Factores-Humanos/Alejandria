import React, { useEffect, useState } from 'react';
import { listUsers } from '../../../services/UserService';
import { listPurchases } from '../../../services/PurchaseService';
import { listBooks } from '../../../services/BookService';
import SideBar from '../../../components/admins/SideBar/SideBar';
import './users.css';

const Users = () => {
    const [userList, setUserList] = useState([]);
    const [booksPurchasedByUser, setBooksPurchasedByUser] = useState({});
    const [booksByUser, setBooksByUser] = useState({});
    const [filter, setFilter] = useState('all');

    const loadUsers = async () => {
        try {
            const response = await listUsers();
            setUserList(response.data);
        } catch (error) {
            console.error('Error al obtener la lista de usuarios:', error);
        }
    };

    useEffect(() => {
        loadUsers();
    }, []);

    useEffect(() => {
        userList.forEach(user => {
            getBooksPurchasedByUser(user.id).then(books => {
                setBooksPurchasedByUser(prevState => ({
                    ...prevState,
                    [user.id]: books
                }));
            }).catch(error => {
                console.error(`Error al obtener los libros comprados por el usuario ${user.id}:`, error);
            });
        });
    }, [userList]);

    useEffect(() => {
        userList.forEach(user => {
            getBooksByUser(user.id).then(books => {
                setBooksByUser(prevState => ({
                    ...prevState,
                    [user.id]: books
                }));
            }).catch(error => {
                console.error(`Error al obtener los libros publicados por el usuario ${user.id}:`, error);
            });
        });
    }, [userList]);

    const getBooksPurchasedByUser = async (userId) => {
        try {
            const response = await listPurchases();
            const purchases = response.data.filter(purchase => purchase.user.id === userId);
            const booksPurchased = purchases.flatMap(purchase => purchase.books);
            return booksPurchased;
        } catch (error) {
            console.error('Error al obtener los libros comprados por el usuario:', error);
            return [];
        }
    };

    const getBooksByUser = async (userId) => {
        try {
            const response = await listBooks();
            const books = response.filter(book => book.seller.id === userId);
            return books;
        } catch (error) {
            console.error('Error al obtener los libros publicados por el usuario:', error);
            return [];
        }
    };

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const filteredUsers = userList.filter(user => {
        if (filter === 'all') return true;
        if (filter === 'buyers') return booksPurchasedByUser[user.id] && booksPurchasedByUser[user.id].length > 0;
        if (filter === 'sellers') return booksByUser[user.id] && booksByUser[user.id].length > 0;
        return true;
    });

    return (
        <>
            <div className="d-flex">
                <SideBar />
                <div className="container-fluid p-5 main">
                    <h1>Usuarios del sistema</h1>
                    <div className="filters mb-3">
                        <select className="form-select" value={filter} onChange={handleFilterChange}>
                            <option value="all">Todos</option>
                            <option value="buyers">Compradores</option>
                            <option value="sellers">Vendedores</option>
                        </select>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Correo electrónico</th>
                                    <th>Dirección</th>
                                    <th>Libros Comprados</th>
                                    <th>Libros Publicados</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers.map(user => (
                                    <tr key={user.id}>
                                        <td>{user.user_name}</td>
                                        <td>{user.email_address}</td>
                                        <td>{user.street_address}</td>
                                        <td>
                                            <ul>
                                                {booksPurchasedByUser[user.id]?.map(book => (
                                                    <li key={book.id}>{book.title}</li>
                                                ))}
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                {booksByUser[user.id]?.map(book => (
                                                    <li key={book.id}>{book.title}</li>
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

export default Users;
