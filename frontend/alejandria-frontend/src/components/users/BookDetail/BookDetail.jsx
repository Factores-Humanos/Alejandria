import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PropTypes from 'prop-types';

import { getBookById } from '../../../services/BookService';
import { addToCartApi } from '../../../services/CartService';

import book1 from '../../../assets/books/book1.png';

import './BookDetail.css';

const BookDetail = () => {

    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [seller, setSeller] = useState(null);

    const auth = useAuthUser();


    const handleAddToCart = async () => {
        try {
            await addToCartApi(auth.id, book.id);
        } catch (error) {
            toast.success('Error agregando libro  al carrito:', error);
        }
        toast.success('Producto agregado al carrito');
    };

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await getBookById(id);
                setBook(response);
                setSeller(response.seller);
            } catch (error) {
                console.error('Error fetching book:', error);
            }
        };
        fetchBook();
    }, [id]);

    if (!book || !seller) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="book-detail-container">
            <div className="book-detail-main">
                <img src={book1} alt={book.title} className="book-detail-cover" />
                <div className="book-detail-info">
                    <h1 className="book-detail-title">{book.title}</h1>
                    <p className="book-detail-description">{book.description}</p>
                    <p className="book-detail-author"><strong>Autor:</strong> {book.author}</p>
                    <p className="book-detail-categories"><strong>Categorías:</strong> {book.categories.join(', ')}</p>
                    <p className="book-detail-price">{book.price}</p>
                    <button className="btn btn-primary add-to-cart" onClick={handleAddToCart} >Agregar al carrito</button>
                </div>
            </div>
            <div className="book-detail-additional">
                <h2>Información Adicional</h2>
                <table className="book-detail-table">
                    <tbody>
                        <tr>
                            <td>Autor</td>
                            <td>{book.author}</td>
                        </tr>
                        <tr>
                            <td>Formato</td>
                            <td>{book.format}</td>
                        </tr>
                        <tr>
                            <td>Idioma</td>
                            <td>{book.language}</td>
                        </tr>
                        <tr>
                            <td>Estado</td>
                            <td>{book.condition}</td>
                        </tr>
                        <tr>
                            <td>Páginas</td>
                            <td>{book.pages}</td>
                        </tr>
                        <tr>
                            <td>Editorial</td>
                            <td>{book.publisher}</td>
                        </tr>
                        <tr>
                            <td>Año</td>
                            <td>{book.year}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="book-detail-seller">
                <h2>Información del Vendedor</h2>
                <div className="seller-card">
                    <img src={seller.profilePicture} alt={seller.name} className="seller-picture" />
                    <div className="seller-info">
                        <h3>{seller.name}</h3>
                        <p>Vendedor Certificado por {seller.certifiedBy}</p>
                        <p>{seller.sales} ventas realizadas</p>
                        <a href={seller.morePublicationsLink}>Ver más publicaciones</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

BookDetail.propTypes = {
    book: PropTypes.shape({
        cover: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        categories: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.string.isRequired,
        format: PropTypes.string.isRequired,
        language: PropTypes.string.isRequired,
        condition: PropTypes.string.isRequired,
        pages: PropTypes.number.isRequired,
        publisher: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
    }).isRequired,
    seller: PropTypes.shape({
        profilePicture: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        certifiedBy: PropTypes.string.isRequired,
        sales: PropTypes.number.isRequired,
        morePublicationsLink: PropTypes.string.isRequired,
    }).isRequired,
};

export default BookDetail;
