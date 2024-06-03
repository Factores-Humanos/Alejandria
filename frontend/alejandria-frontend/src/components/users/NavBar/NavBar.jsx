import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../assets/logo.png';
import './NavBar.css';

const NavBar = ({ isLoggedIn }) => {
    const signOut = useSignOut();

    const [modeDropdownOpen, setModeDropdownOpen] = useState(false);
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);

    const handleThemeChange = (newTheme) => {
        document.body.setAttribute('data-theme', newTheme);
    };

    const toggleModeDropdown = () => {
        setModeDropdownOpen(!modeDropdownOpen);
    };

    const toggleUserDropdown = () => {
        setUserDropdownOpen(!userDropdownOpen);
    };

    const handleProfileClick = (e) => {
        e.preventDefault();
        console.log('Ver perfil');
    };

    const handleLogoutClick = (e) => {
        e.preventDefault();
        signOut();
        window.location.reload();
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-custom px-3">
            <Link to="/" className="navbar-brand">
                <img src={logo} width="40" height="40" className="d-inline-block align-top" alt="App Logo" />
                <span className="logo-name">Alejandria</span>
            </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <Link to="/catalog" className="nav-link">Catálogo</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#blog">Blog</a>
                    </li>
                    {isLoggedIn && (
                        <li className="nav-item">
                            <Link to="/publications" className="nav-link">Mis publicaciones</Link>
                        </li>
                    )}
                </ul>
                <form className="d-flex">
                    <input className="form-control me-1 search-bar" type="search" placeholder="Buscar un libro" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </form>
                <div className="dropdown mx-2">
                    <button className="btn btn-outline-secondary dropdown-toggle select-mode" type="button" onClick={toggleModeDropdown}>
                        Seleccionar Modo
                    </button>
                    <ul className={`dropdown-menu ${modeDropdownOpen ? 'show' : ''}`}>
                        <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); handleThemeChange('light'); }}>Modo Claro</a></li>
                        <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); handleThemeChange('dark'); }}>Modo Oscuro</a></li>
                        <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); handleThemeChange('daltonic'); }}>Modo Daltonico</a></li>
                    </ul>
                </div>
                {isLoggedIn ? (
                    <div className="dropdown">
                        <FontAwesomeIcon icon={faShoppingCart} className="mx-2" size="lg" />
                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" onClick={toggleUserDropdown}>
                            <FontAwesomeIcon icon={faUser} className="mx-2" />
                        </button>
                        <ul className={`dropdown-menu ${userDropdownOpen ? 'show' : ''}`}>
                            <li><a className="dropdown-item" href="#" onClick={handleProfileClick}>Ver mi perfil</a></li>
                            <li><a className="dropdown-item" href="#" onClick={handleLogoutClick}>Cerrar sesión</a></li>
                        </ul>
                    </div>
                ) : (
                    <>
                        <Link to="/register" className="btn mx-2 register-btn-nav">Regístrate</Link>
                        <Link to="/login" className="btn btn-outline-primary login-btn-nav">Ingresar</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
