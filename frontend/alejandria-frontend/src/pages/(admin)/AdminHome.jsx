import React from 'react'
import SideBar from '../../components/(admin)/SideBar'
import "./css/adminHome.css"
import userCard from "../../assets/userCard.png"
import ticket from "../../assets/ticket.svg"
import bookCard from "../../assets/bookCard.svg"

const AdminHome = () => {
    return (
        <>
            <div className="d-flex">
                <SideBar></SideBar>
                <div className="container-fluid p-5 main">
                    <h1>Bienvenido</h1>
                    <div className="row">
                        <div className="col-md-3 m-3">
                            <div className="card text-white">
                                <img src={userCard} alt="" className='card-img' />
                                <div className="card-img-overlay text-container">
                                    <h5 className='card-title ' >Clientes Totales</h5>
                                    <p className="card-text">68.000</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 m-3">
                            <div className="card text-white">
                                <img src={ticket} alt="" className='card-img' />
                                <div className="card-img-overlay text-container">
                                    <h5 className='card-title ' >Ordenes Totales</h5>
                                    <p className="card-text">68.000</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 m-3">
                            <div className="card text-white ">
                                <img src={bookCard} alt="" className='card-img' />
                                <div className="card-img-overlay text-container">
                                    <h5 className='card-title ' >Libros Totales</h5>
                                    <p className="card-text">68.000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h2>Órdenes recientes</h2>
                                <button className='btn btn-primary'>
                                    Ver todo
                                </button>
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