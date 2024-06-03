// src/components/NavBar/UserDropdown.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const UserDropdown = ({ handleProfileClick, handleLogoutClick }) => {
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);

    const toggleUserDropdown = () => {
        setUserDropdownOpen(!userDropdownOpen);
    };

    return (
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
    );
};

export default UserDropdown;
