import React from 'react';
import './HeroSection.css';
import hero from '../../../assets/hero2.png';

const HeroSection = () => {
    return (
        <div className="hero-section text-dark py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h1 className="display-4">Compra y vende tus libros favoritos</h1>
                        <p className="lead">
                            Encuentra una amplia variedad de libros nuevos y usados a precios increíbles. ¡Empieza a leer hoy mismo!
                        </p>
                        <a href="#browse-books" className="btn btn-primary btn-lg">
                            Explorar Libros
                        </a>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center">
                        <img
                            src={"https://images.pexels.com/photos/4659797/pexels-photo-4659797.jpeg?auto=compress&cs=tinysrgb&w=800"}
                            alt="Libros"
                            className="img-fluid"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
