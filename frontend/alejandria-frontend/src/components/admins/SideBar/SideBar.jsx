import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import useSignOut from 'react-auth-kit/hooks/useSignOut';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBorderAll, faStore, faBook, faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import logo from "../../../assets/logo.png"
import "./sideBar.css"

const SideBar = () => {
    const signOut = useSignOut()
    const navigate = useNavigate()

    // Estado para controlar la expansión del sidebar
    const [expanded, setExpanded] = useState(false);

    // Función para alternar la expansión del sidebar
    const toggleSidebar = () => {
        setExpanded(!expanded);
    };

    const handleSignOut = () => {
        signOut();
        navigate('/'); // Redirecciona a la página de inicio de sesión después de cerrar sesión
    };

    // Clase condicional para expandir o contraer el sidebar
    const sidebarClass = expanded ? "expand" : "";
    return (
        <>
            <aside id="sidebar" className={sidebarClass}>
                <div className="d-flex">
                    <button className='toggle-btn' type='button' onClick={toggleSidebar} >
                        <div className="logo-container"> {/* Contenedor para el logo */}
                            <img src={logo} alt="logo" className='logo-img' />
                        </div>
                    </button>

                    <div className="sidebar-logo">
                        <Link to="/admin" >Alejandria</Link>
                    </div>
                </div>
                <ul className="sidebar-nav">
                    <li className="sidebar-item">
                        <Link to="/admin" >
                            <a className="sidebar-link">
                                <FontAwesomeIcon icon={faBorderAll} />

                                <span>Dashboard</span>
                            </a>
                        </Link>

                    </li>
                    <li className="sidebar-item">
                        <Link to="/purchases" >
                            <a href="#" className="sidebar-link">
                                < FontAwesomeIcon icon={faStore} />
                                <span>Ventas</span>
                            </a>
                        </Link>

                    </li>
                    <li className="sidebar-item">
                        <Link to="/books">
                            <a href="#" className="sidebar-link text-decoration-none">
                                <FontAwesomeIcon icon={faBook} />
                                <span>Libros</span>
                            </a>
                        </Link>

                    </li>
                    <li className="sidebar-item">
                        <Link to="/users" >
                            <a href="#" className="sidebar-link">
                                <FontAwesomeIcon icon={faUser} />
                                <span>Usuarios</span>
                            </a>
                        </Link>

                    </li>
                </ul>
                <div className="sidebar-footer">

                    <a href="#" className="sidebar-link" onClick={handleSignOut}>
                        <FontAwesomeIcon icon={faRightFromBracket} />
                        <span>Logout</span>
                    </a>
                </div>
            </aside>

        </>
    )
}

export default SideBar