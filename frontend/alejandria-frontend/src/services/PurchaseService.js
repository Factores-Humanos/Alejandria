import axios from "axios";

const REST_API_BASE_URL = "http://127.0.0.1:8000/api/purchases/";

export const listPurchases = () => axios.get(REST_API_BASE_URL)