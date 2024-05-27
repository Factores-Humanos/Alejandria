// Footer.js
import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../assets/logo.png'; // Asegúrate de tener un logo en tu directorio de proyecto

const Footer = () => {
    return (
        <footer className="footer py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h5>Contacto</h5>
                        <p><FontAwesomeIcon icon={faEnvelope} /> correo@example.com</p>
                        <h5 className='mt-3' >Síguenos</h5>
                        <p>
                            <FontAwesomeIcon icon={faFacebook} />
                        </p>
                    </div>
                    <div className="col-md-3">
                        <h5>Categorías</h5>
                        <ul className="list-unstyled">
                            <li>Ficción</li>
                            <li>No Ficción</li>
                            <li>Misterio</li>
                            <li>Biografías</li>
                            <li>Ciencia</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Enlaces</h5>
                        <ul className="list-unstyled">
                            <li>Ingresar</li>
                            <li>Registrarse</li>
                            <li>Catálogo</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Métodos de pago</h5>
                        <p>
                            <FontAwesomeIcon icon={faCcVisa} />
                        </p>
                        <p>
                            <img
                                src={logo}
                                width="100"
                                height="100"
                                alt="App Logo"
                            />
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
