import axios from "axios";

const REST_API_BASE_URL = "http://127.0.0.1:8000/api/users/";

export const login = async (data) => {
    try {
        const response = await axios.post(REST_API_BASE_URL + "login/", data);
        return response;
    } catch (error) {
        console.error("Error during login:", error);
        throw error;
    }
}

export const register = async (data) => {
    try {
        const response = await axios.post(REST_API_BASE_URL + "register/", data);
        return response.data;
    } catch (error) {
        console.error("Error during register:", error);
        throw error;
    }
}

export const listUsers = () => axios.get(REST_API_BASE_URL)