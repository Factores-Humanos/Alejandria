import axios from "axios";

const REST_API_BASE_URL = "http://127.0.0.1:8000/api/books/";

export const listBooks = () => axios.get(REST_API_BASE_URL)