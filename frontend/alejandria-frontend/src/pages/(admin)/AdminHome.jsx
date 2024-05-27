import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';

/* Functions */
import { listUsers } from '../../services/UserService'
import { listPurchases } from '../../services/PurchaseService'
import { listBooks } from '../../services/BookService'


/* Components */
import SideBar from '../../components/(admin)/SideBar'
import Card from '../../components/(admin)/Card'

/* Images */
import userCard from "../../assets/userCard.png"
import ticket from "../../assets/ticket.svg"
import bookCard from "../../assets/bookCard.svg"

import "./css/adminHome.css"


const AdminHome = () => {

    const [totalUsers, setTotalUsers] = useState(0)
    const [totalPurchases, setTotalPurchases] = useState(0)
    const [totalBooks, setTotalBooks] = useState(0)
    const [purchaseList, setPurchaseList] = useState([])

    //const { authUser } = useAuthUser();

    // Ahora puedes acceder a authUser.userState


    // Puedes acceder a propiedades específicas como name, uid, etc.
    /* console.log(authUser.userState.name);
    console.log(authUser.userState.uid); */

    useEffect(() => {
        /* console.log(authUser); */
        listUsers()
            .then(response => {
                setTotalUsers(response.data.length);
            })
            .catch(error => {
                console.error('Error al obtener la lista de usuarios:', error);
            });

        listPurchases()
            .then(response => {
                setTotalPurchases(response.data.length);
                setPurchaseList(response.data)
            })
            .catch(error => {
                console.error('Error al obtener la lista de compras:', error);
            });

        listBooks()
            .then(response => {
                setTotalBooks(response.data.length);
            })
            .catch(error => {
                console.error('Error al obtener la lista de libros:', error);
            });
    }, []);

    return (
        <>
            <div className="d-flex">

                <SideBar></SideBar>
                <div className="container-fluid p-5 main">
                    {/* <div>
                        Hello {auth.userState.name}
                    </div> */}
                    <h1>Bienvenido Administrador!</h1>
                    <div className="row">
                        <div className="col-md-3 m-3">
                            <Card imageSrc={userCard} title="Clientes Totales" text={totalUsers.toString()} />
                        </div>
                        <div className="col-md-3 m-3">
                            <Card imageSrc={ticket} title="Órdenes Totales" text={totalPurchases.toString()} />

                        </div>
                        <div className="col-md-3 m-3">
                            <Card imageSrc={bookCard} title="Libros Totales" text={totalBooks.toString()} />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h2>Órdenes recientes</h2>
                                <Link to="/purchases" className='btn btn-primary'>
                                    Ver todo
                                </Link>
                            </div>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Producto</th>
                                            <th>Cliente</th>
                                            <th>Precio</th>
                                            <th>Estado</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {purchaseList.map(purchase => (
                                            purchase.books.map(
                                                book => (
                                                    <tr key={book.id}>
                                                        <td>{book.title}</td>
                                                        <td>{purchase.user.user_name}</td>
                                                        <td>{book.price}</td>
                                                        <td>Completada</td>
                                                    </tr>
                                                )
                                            )
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AdminHome