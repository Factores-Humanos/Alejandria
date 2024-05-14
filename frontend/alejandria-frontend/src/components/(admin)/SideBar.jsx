import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBorderAll, faStore, faBook, faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import logo from "../../assets/logo.png"
import "./css/sideBar.css"

const SideBar = () => {
    // Estado para controlar la expansión del sidebar
    const [expanded, setExpanded] = useState(false);

    // Función para alternar la expansión del sidebar
    const toggleSidebar = () => {
        setExpanded(!expanded);
    };

    // Clase condicional para expandir o contraer el sidebar
    const sidebarClass = expanded ? "expand" : "";
    return (
        <>
            <aside id="sidebar" className={sidebarClass}>
                <div className="d-flex">
                    <button className="toggle-btn" type="button" onClick={toggleSidebar}>
                        <div className="logo-container"> {/* Contenedor para el logo */}
                            <img src={logo} alt="logo" className='logo-img' />
                        </div>
                    </button>
                    <div className="sidebar-logo">
                        <a href="#">Alejandria</a>
                    </div>
                </div>
                <ul className="sidebar-nav">
                    <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                            <FontAwesomeIcon icon={faBorderAll} />

                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                            < FontAwesomeIcon icon={faStore} />
                            <span>Ventas</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                            <FontAwesomeIcon icon={faBook} />
                            <span>Libros</span>
                        </a>
                    </li>
                    <li className="sidebar-item">

                        <a href="#" className="sidebar-link">
                            <FontAwesomeIcon icon={faUser} />
                            <span>Usuarios</span>
                        </a>
                    </li>
                </ul>
                <div className="sidebar-footer">
                    <a href="#" className="sidebar-link">
                        <FontAwesomeIcon icon={faRightFromBracket} />
                        <span>Logout</span>
                    </a>
                </div>
            </aside>

        </>
    )
}

export default SideBar