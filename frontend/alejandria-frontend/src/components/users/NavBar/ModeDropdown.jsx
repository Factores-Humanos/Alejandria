import React, { useState } from 'react';

const ModeDropdown = ({ handleThemeChange }) => {
    const [modeDropdownOpen, setModeDropdownOpen] = useState(false);

    const toggleModeDropdown = () => {
        setModeDropdownOpen(!modeDropdownOpen);
    };

    return (
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
    );
};

export default ModeDropdown;
