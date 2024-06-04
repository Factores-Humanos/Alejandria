import axios from "axios";

const REST_API_BASE_URL = "http://127.0.0.1:8000/api/books/";


export const listBooks = async () => {
    try {
        const response = await axios.get(REST_API_BASE_URL); // Ajusta la URL según tu API
        console.log("libros: ", response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching books:', error);
        throw error;
    }
};

export const addBook = async (book) => {
    try {
        const author = {
            name: book.author
        }
        const publisher = {
            name_publisher: book.publisher
        }
        const body = {
            format: book.format,
            author: author,
            publisher: publisher,
            seller: parseInt(book.sellerId),
            categories: [parseInt(book.categories)],
            title: book.title,
            price: parseInt(book.price),
            description: book.description,
            pub_year: parseInt(book.pub_year),
            pages: parseInt(book.pages),
            status: "inactive"
        }
        console.log("body: ", body);
        const response = await axios.post(REST_API_BASE_URL, body);
        console.log("libro: ", response.data);
        return response.data;
    } catch (error) {
        console.error('Error adding book:', error);
        throw error;
    }
}

export const getBookById = async (id) => {
    try {
        const response = await axios.get(`${REST_API_BASE_URL}${id}/`);
        console.log("libro: ", response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching book:', error);
        throw error;
    }
}

export const approveBook = async (bookId) => {
    return await axios.put(`${bookId}/change_status/`);
};