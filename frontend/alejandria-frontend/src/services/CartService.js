import axios from 'axios';

const REST_API_BASE_URL = "http://127.0.0.1:8000/api/carts/";


/* 
    {
        "user": 9,
        "books": [1],
        "total_amount": 20000
    }

*/
export const addToCartApi = async (userId, bookId) => {
    try {
        const body = {
            user: userId,
            books: [bookId],
            total_amount: 20000
        };
        const response = await axios.post(`${REST_API_BASE_URL}add_to_cart/`, body);
        return response.data;
    } catch (error) {
        console.error('Error al agregar el producto al carrito:', error);
        throw error;
    }
};

export const getCartItemsApi = async (userId) => {
    console.log("userId: ", userId);
    try {
        const response = await axios.get(`${REST_API_BASE_URL}get_cart_by_user/?user_id=${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los productos del carrito:', error);
        throw error;
    }
};
