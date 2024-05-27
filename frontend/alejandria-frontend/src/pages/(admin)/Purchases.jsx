import React, { useEffect, useState } from 'react'

import { listPurchases } from '../../services/PurchaseService';

import SideBar from '../../components/(admin)/SideBar';

const Purchases = () => {
    const [purchaseList, setPurchaseList] = useState([])

    useEffect(() => {
        listPurchases()
            .then(response => {
                setPurchaseList(response.data)
            })
            .catch(error => {
                console.error('Error al obtener la lista de compras:', error);
            });
    }, []);
    return (
        <>
            <div className="d-flex">
                <SideBar />
                <div className="container-fluid p-5 main">
                    <h1>Ordenes</h1>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Cliente</th>
                                    <th>Libros Comprados</th>
                                    <th>Fecha de Compra</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {purchaseList.map(purchase => (
                                    <tr key={purchase.id}>
                                        <td>{purchase.user.user_name}</td>
                                        <td>
                                            <ul>
                                                {purchase.books.map(book => (
                                                    <li key={book.id}>{book.title}</li>
                                                ))}
                                            </ul>
                                        </td>
                                        <td>{purchase.date_purchase}</td>
                                        <td>{purchase.total_amount}</td>
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

export default Purchases;
