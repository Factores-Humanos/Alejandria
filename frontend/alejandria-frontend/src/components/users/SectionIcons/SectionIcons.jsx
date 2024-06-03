// SectionIcons.js
import React from 'react';
import './sectionIcons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHandshake, faSearch } from '@fortawesome/free-solid-svg-icons';

const SectionIcons = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="section-icons">
                        <div className="circle">
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <p className='circle-text' >Compra</p>
                        </div>
                        <div className="circle">
                            <FontAwesomeIcon icon={faHandshake} />
                            <p className='circle-text' >Vende</p>
                        </div>
                        <div className="circle">
                            <FontAwesomeIcon icon={faSearch} />
                            <p className='circle-text' >Explora</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionIcons;
