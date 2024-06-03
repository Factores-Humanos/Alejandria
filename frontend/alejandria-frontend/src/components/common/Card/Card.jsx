import React from 'react';

const Card = ({ imageSrc, title, text }) => {
    return (
        <div className="card text-white">
            <img src={imageSrc} alt="" className='card-img' />
            <div className="card-img-overlay text-container">
                <h5 className='card-title'>{title}</h5>
                <p className="card-text">{text}</p>
            </div>
        </div>
    );
};

export default Card;
