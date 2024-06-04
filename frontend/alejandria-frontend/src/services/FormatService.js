import axios from "axios";

const REST_API_BASE_URL = "http://127.0.0.1:8000/api/formats/";


export const listFormats = async () => {
    try {
        const response = await axios.get(REST_API_BASE_URL); // Ajusta la URL según tu API
        console.log("formatoos api ", response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching formats:', error);
        throw error;
    }
};

