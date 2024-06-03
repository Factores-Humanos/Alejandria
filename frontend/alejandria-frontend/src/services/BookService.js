import axios from "axios";

const REST_API_BASE_URL = "http://127.0.0.1:8000/api/books/";


export const listBooks = async () => {
    try {
        const response = await axios.get(REST_API_BASE_URL); // Ajusta la URL según tu API
        console.log("libros: ",response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching books:', error);
        throw error;
    }
};

